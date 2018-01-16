<template>
<div>
  <loading v-if="loading"></loading>
  <div class="content" v-if="!loading">
    <section>
      <div class="cover">
        <img :src="getCover" alt="cover">
      </div>
      <div class="detail">
        <p class="title">
          {{book.title}}
        </p>
        <p class="info">
          <span>{{book.author}}</span>
          <span>{{book.cat}}</span>
          <span>{{book.wordCount}}字</span>
        </p>
        <p class="staus">
          完结
        </p>
      </div>
    </section>
    <section class="operator">
      <button :class="{follow: follow}" @click="changeFollow" v-text="follow ? '不追了' : '追更新'"></button>
      <button @click="bookChapter(book._id)">开始阅读</button>
    </section>
    <section class="reader">
      <div class="follow">
        <p>读书人数</p>
        <p>{{book.latelyFollower}}</p>
      </div>
      <div class="remain">
        <p>读者留存率</p>
        <p>{{book.retentionRatio}}%</p>
      </div>
       <div class="daily">
        <p>日更新字数</p>
        <p>{{book.serializeWordCount}}</p>
      </div>
    </section>
    <section class="tags">
      <span
          v-for="(tag,index) in book.tags"
          :style="{backgroundColor: colors[index%5]}"
          :key="index"
      >
        {{tag}}
      </span>
    </section>
    <section class="abstract">
      <p v-html="book.longIntro"></p>
    </section>
  </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loading from "../../components/Loading";

export default {
  name: "bookDeatil",
  data() {
    return {
      colors: ["#86bfec", "#f5b572", "#86d196", "#f18c8c", "#89a7cc"],
      book: {},
      loading: true
    };
  },
  components: { Loading },
  computed: {
    getCover() {
      return decodeURIComponent(this.book.cover).slice(7);
    },
    ...mapState({
      // book: state => state.book,
      follow: state => state.follow
    })
  },
  created() {
    this.getBook();
  },
  methods: {
    getBook() {
      let id = this.$route.params.id;
      this.$http
        .get(
          `https://bird.ioliu.cn/v1/?url=http://novel.juhe.im/book-info/${id}`
        )
        .then(res => {
          this.book = res.data.data;
          this.loading = false;
        })
        .catch(err => console.error(err));
    },
    changeFollow() {
      this.$store.state.follow = !this.$store.state.follow;
      if (this.$store.state.follow) {
        this.$store.commit("addBook", {
          id: this.book._id
        });
      } else {
        this.$store.commit("removeBook", {
          book: this.book
        });
      }
    },
    bookChapter(id) {
      this.$router.push(`/chapter/${id}`);
    }
  },
  watch: {
    $route() {
      this.getBook();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";
p {
  color: #333;
}
.content {
  max-width: $width;
  margin: 5rem auto;
}

section:first-child {
  display: flex;

  .cover {
    margin: 0 1rem;

    img {
      width: 3rem;
      height: 4rem;
    }
  }
  .detail {
    text-align: left;
  }
  p {
    width: 100%;
    margin: 0 0 0.4rem 0;
    font-size: 0.8rem;

    &:first-child {
      margin: 0.4rem 0 0.4rem 0;
    }
  }
  span {
    font-size: 0.6rem;

    &:first-child {
      color: $active-color;
    }
  }
}
.operator {
  display: flex;
  margin: 1rem;
  justify-content: space-between;

  button {
    flex-grow: 1;
    height: 3rem;
    background-color: $active-color;
    outline: none;
    border: none;
    border-radius: 1.5rem;
    color: #fff;

    &:first-child {
      margin-right: 1rem;
    }
  }

  .follow {
    background-color: #999;
  }
}

.reader {
  display: flex;
  align-content: space-around;
  margin: 1rem;
  padding: 1rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  div {
    flex-grow: 1;
  }
}

.tags {
  margin: 1rem;
  padding: 1rem 0;
  text-align: left;
  border-bottom: 1px solid #eee;
  span {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0.6rem 1rem;
    color: #fff;
  }
}

.abstract {
  letter-spacing: 3px;
  text-align: left;
  text-indent: 2rem;
  line-height: 2rem;
}
</style>

