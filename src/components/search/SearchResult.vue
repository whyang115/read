<template>
  <div class="result">
    <ul>
      <li
        v-for="(item,index) in resultList"
        :key="index"
      >
        <div class="cover">
          <img :src="item.cover" alt="cover">
        </div>
        <div class="detail" @click="readBook(item,index)">
          <p class="title">{{item.title}}</p>
          <span class="follow">{{item.latelyFollower}}人在追</span>
          <span class="remain">{{item.retentionRatio}}%读者留存</span>
          <span class="author">{{item.author}}著</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchResult",
  data() {
    return {
      id: "",
      resultList: []
    };
  },
  created() {
    this.getResult();
  },
  computed: {},
  methods: {
    readBook(item, index) {
      this.$store.commit({
        type: "readBook",
        content: this.resultList[index]
      });
      this.$router.push(`book/${item._id}`);
    },
    getResult() {
      axios
        .get(
          `https://bird.ioliu.cn/v1/?url=http://novel.juhe.im/search?keyword=${this
            .$store.state.searchKeyword}`
        )
        .then(res => {
          this.resultList = res.data.data.books;
          this.resultList.forEach(item => {
            item.cover = decodeURIComponent(item.cover).slice(
              item.cover.indexOf("/agent/") > -1 ? 7 : 0
            );
          });
        })
        .catch(err => console.error(err));
    },
    convertBookCover() {
      this.resultList.forEach(item => {
        item.cover = decodeURIComponent(item.cover).slice(
          item.cover.indexOf("/agent/") > -1 ? 7 : 0
        );
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";

.result {
  max-width: $width;
  margin: 0 auto;
  margin-top: 4.5rem;
}

ul {
  padding-left: 0;
}
li {
  display: flex;
}

.cover {
  width: 6rem;
  overflow: hidden;

  img {
    width: 3rem;
    height: 4rem;
    margin: 0.4rem 0;
  }
}
.detail {
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #999;

  &:li:last-child {
    border-bottom: none;
  }

  span {
    padding: 0 0.5rem;
    color: #aaa;
    font-size: 0.8rem;
    font-weight: 200;
  }
  .remain {
    border-left: 1px solid #aaa;
    border-right: 1px solid #aaa;
  }
}

p {
  color: #000;
  padding-left: 0.5rem;
}
</style>

