<template>
  <div class="content">
    <ul>
      <li
        v-for="(book,index) in bookList"
        :key="index"
        @click="readBook(book)">
        <div class="cover">
          <img :src="book.cover" alt="cover">
        </div>
        <div class="info">
          <p class="title">{{book.title}}</p>
          <p class="lastChapter">{{book.lastChapter}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BookList",
  data() {
    return {};
  },
  created() {
    this.getBookCover();
  },
  computed: mapState({
    bookList: state => state.bookList
  }),
  methods: {
    readBook(book) {
      this.$router.push(`book/${book._id}`);
    },
    getBookCover() {
      for (let key in this.bookList) {
        let item = this.bookList[key];
        item.cover = decodeURIComponent(item.cover).slice(
          item.cover.indexOf("/agent/") > -1 ? 7 : 0
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  max-width: 40rem;
  margin: 6rem auto;
}

ul {
  padding-left: 1rem;
}

li {
  display: flex;
  align-items: center;

  .cover {
    margin-right: 1.5rem;
    img {
      width: 3rem;
      height: 4rem;
    }
  }

  .info {
    flex-grow: 5;
    border-bottom: 1px solid #eee;
    text-align: left;
    p {
      width: 100%;
      color: #333;
    }

    .title {
      margin-bottom: 0.8rem;
    }

    .lastChapter {
      font-size: 0.8rem;
      color: #999;
    }
  }
}
</style>

