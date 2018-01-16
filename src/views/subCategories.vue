<template>
<div>
  <loading v-if="loading"></loading>
  <div class="content" v-if="!loading">
    <header class="fixed">
      <svg class="icon" aria-hidden="true" @click="back">
        <use xlink:href="#icon-back"></use>
      </svg>
      <h3>{{major}}</h3>
    </header>
    <div class="select">
      <ul>
        <li v-for="(item,num) in type" :key="num" @click="index = num">{{item}}</li>
      </ul>
      <ul>
        <li v-for="(subcate,index) in subs"
          :key="index"
          @click="tomins(subs)">
          {{subcate}}
          <div class="triangle"></div>
        </li>
      </ul>
    </div>
    <ul class="books">
      <li
        v-for="(book,index) in books"
        :key="index"
        @click="toDetail(book)">
        <div class="cover">
          <img :src="book.cover" alt="cover">
        </div>
        <div class="intro">
          <p>{{book.title}}</p>
          <span class="author">{{book.author}}</span>
          <span>{{major}}</span>
          <p class="shortIntro">{{book.shortIntro}}</p>
          <span>{{book.latelyFollower}} 人在追</span>
          <span>{{book.retentionRatio}}% 读者留存</span>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import SearchResult from "../components/search/SearchResult";
import Loading from "../components/Loading";

export default {
  name: "subCategories",
  components: { SearchResult, Loading },
  data() {
    return {
      type: ["热门", "新书", "好评", "完结"],
      index: 0,
      gender: this.$route.query.gender,
      major: this.$route.query.major,
      loading: true,
      subs: [],
      books: []
    };
  },
  created() {
    this.subCategories();
    this.tomins();
  },
  methods: {
    subCategories() {
      this.$http
        .get(
          "https://bird.ioliu.cn/v1/?url=http://novel.juhe.im/sub-categories"
        )
        .then(res => {
          let cate = this.$route.query.major;
          let data = res.data.data;
          let gender = this.gender;
          if (gender === "male") {
            data = data.male;
          } else {
            data = data.female;
          }
          for (let key in data) {
            if (data[key].major === cate) {
              this.subs = data[key].mins;
            }
          }
          this.loading = false;
        })
        .catch(err => console.error(err));
    },
    tomins() {
      let query = this.$route.query;
      this.$http
        .get(
          `https://bird.ioliu.cn/v1/?url=http://novel.juhe.im/category-info?gender=${query.gender}&type=hot&major=${query.major}&minor=&start=${query.start}&limit=${query.limit}`
        )
        .then(res => {
          this.books = res.data.data.books;
          this.books.forEach(item => {
            item.cover = decodeURIComponent(item.cover).slice(
              item.cover.indexOf("/agent/") > -1 ? 7 : 0
            );
          });
        })
        .catch(err => {
          console.error(err);
        });
    },
    toDetail(book) {
      this.$router.push(`book/${book._id}`);
      this.$store.commit({
        type: "readBook",
        content: book
      });
    },
    back() {
      this.$router.push("/categories");
    }
  },
  watch: {
    $route() {
      this.subCategories();
      this.tomins();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
.content {
  max-width: 40rem;
  margin: 0 auto;

  ul {
    padding-left: 0;
    text-align: left;
  }
}
header {
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  color: #fff;
  .icon {
    margin-left: 1rem;
  }
  h3 {
    flex-grow: 1;
    text-align: center;
  }
}

.select {
  position: fixed;
  top: 3.5rem;
  left: 0;
  right: 0;
  max-width: $width;
  margin: 0 auto;
  background-color: $active-color;

  ul {
    margin-left: 1rem;
  }

  li {
    display: inline-block;
    font-size: 1.2rem;
    margin-right: 1rem;
    color: #ccc;
    text-align: left;

    &:hover,
    &:active {
      color: #fff;
    }
  }
}
.books {
  li {
    display: flex;
    align-items: center;

    .intro {
      flex-grow: 1;
      max-width: 560px;
      padding: 0.6rem 0;
      border-bottom: 1px solid $active-color;
    }

    p {
      margin: 0.2rem 0;
    }
    p.shortIntro {
      max-width: 100%;
      height: 1rem;
      color: #333;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 0.6rem;
    }

    span {
      color: #999;
      font-size: 0.6rem;

      &:first-child {
        padding-right: 0.5rem;
        border-right: 1rem solid $active-color;
      }
    }
  }
  img {
    width: 3rem;
    height: 4rem;
    margin-right: 2rem;
  }
}
</style>

