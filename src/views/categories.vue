<template>
  <div class="content">
    <header class="fixed">
      <div class="back" @click="back">
        <icon iconName="#icon-back"/>
      </div>
      <p>返回</p>
    </header>
    <section class="male">
      <h2>男生</h2>
      <ul>
        <li v-for="(cate,index) in categories.male"
          :key="index"
          :style="{backgroundColor: colors[index % 5]}"
          @click="toSubCategories(cate,'male')">
          <p class="cate">{{cate.name}}</p>
          <p class="num">{{cate.bookCount}} 本书</p>
        </li>
      </ul>
    </section>
    <section class="female">
      <h2>女生</h2>
      <ul>
        <li v-for="(cate,index) in categories.female"
          :key="index"
          :style="{backgroundColor: colors[index % 5]}"
          @click="toSubCategories(cate,'female')">
          <p class="cate">{{cate.name}}</p>
          <p class="num">{{cate.bookCount}} 本书</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Icon from "../components/Icon";
export default {
  name: "categories",
  data() {
    return {
      categories: {},
      colors: ["#86bfec", "#f5b572", "#86d196", "#f18c8c", "#89a7cc"]
    };
  },
  components: { Icon },
  created() {
    this.$http
      .get("https://bird.ioliu.cn/v1/?url=http://novel.juhe.im/categories")
      .then(res => {
        this.categories = res.data.data;
      })
      .catch(err => {
        console.error(err);
      });
  },
  methods: {
    back() {
      this.$router.push("/find");
    },
    toSubCategories(cate, gender) {
      this.$router.push({
        path: "/cate-info",
        query: {
          gender: gender,
          type: "hot",
          major: cate.name,
          minor: "",
          start: 0,
          limit: 20
        }
      });
      this.$store.commit({
        type: "toSubCategories",
        cate: cate
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
.content {
  max-width: 40rem;
  margin: 0 auto;

  header {
    @include fixedtopcenter;
    display: flex;
    align-items: center;
    color: #fff;

    .icon {
      margin: 0 1rem;
    }
  }

  h2 {
    text-align: left;
    color: #aaa;
    margin-left: 1.5rem;
  }

  p {
    color: #fff;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    li {
      width: 33%;
      border: 1px solid #eee;
    }
  }
}
header {
  display: flex;

  .back {
    flex-grow: 0;
  }

  p {
    text-align: left;
    color: #fff;
  }
}

.male {
  margin-top: 5rem;
}
</style>

