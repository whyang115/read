<template>
  <div>
      <loading v-if="loading"></loading>
      <div class="content" v-if="!loading">
        <header class="fixed">
          <ul>
            <li @click="preChapter">上一章</li>
            <li>目录</li>
            <li @click="nextChapter">下一章</li>
          </ul>
          <h1>{{title}}</h1>
        </header>
        <article>{{article}}</article>
      </div>
  </div>

</template>

<script>
  import Loading from '../components/Loading'

  export default {
    name: 'chapter',
    components: {Loading},
    data () {
      return {
        title: '',
        article: '',
        menu: '',
        index: 0,
        loading: true
      }
    },
    created () {
      this.getArticle(this.index)
    },
    methods: {
      getArticle (index) {
        this.$http.get(`https://bird.ioliu.cn/v1/?url=http://novel.juhe.im/book-sources?view=summary&book=${this.$route.params.id}`)
        .then(res => {
          return res.data.data[0]._id
        })
        .then(id => {
          return this.$http.get(`https://bird.ioliu.cn/v1/?url=http://novel.juhe.im/book-chapters/${id}`)
        })
        .then(res => {
          let chapterList = res.data.data.chapters
          return chapterList
        })
        .then(list => {
          this.menu = list
          let chapter = encodeURIComponent(list[index].link)
          return this.$http.get(`https://bird.ioliu.cn/v1/?url=http://novel.juhe.im/chapters/${chapter}`)
        })
        .then(res => {
          this.loading = false
          let content = res.data.data.chapter
          this.article = content.cpContent
          this.title = content.title
        })
        .catch(err => console.error(err))
      },
      preChapter () {
        if (this.index === 0) {
          alert(`当前是第一章`)
          return false
        }
        this.index--
        this.getArticle()
        this.loading = true
      },
      nextChapter () {
        this.index++
        this.getArticle(this.index)
        this.loading = true
      }
    },
    watch: {
      '$route' () {
        this.getArticle(this.index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';
  header {
    ul {
      display: flex;
      align-items: center;
      padding-left: 0;
      color: #fff;
      margin: 0;
      li {
        flex-grow: 1;
        padding: 1rem;
      }
    }

    h1 {
      color: #fff;
      font-size: 1.2rem;
      margin: .5rem 0;
    }

  }
  .content {
    max-width: 40rem;
    margin: 0 auto;
  }

  article {
    white-space: normal;
    background-color: #e9e6d0;
    font-size: 1.5rem;
    line-height: 3rem;
    margin-top: 5rem;
    padding: 1rem 1.2rem;
  }
  .menu {
    position: absolute;
    top:5rem;
    left: 0;
    right: 0;
    max-width: 30rem;
    margin: 0 auto;
    height: 500px;
  }
</style>

