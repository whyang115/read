<template>
  <div>
    <header class="fixed">
      <div class="title">
        <p>发现</p>
      </div>
    </header>
    <div class="content">
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
          @click="handler(item)"
        >
          <div class="left-icon">
            <icon :iconName="item.iconName"/>
          </div>
          <p>{{item.text}}<span>&gt;</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  name: "FindHead",
  components: { Icon },
  data() {
    return {
      list: [
        {
          iconName: "#icon-good_rank",
          text: "排行榜"
        },
        {
          iconName: "#icon-theme",
          text: "主题书单"
        },
        {
          iconName: "#icon-fenlei",
          text: "分类"
        },
        {
          iconName: "#icon-shouyinji",
          text: "有声小说"
        },
        {
          iconName: "#icon-055",
          text: "神秘功能"
        },
        {
          iconName: "#icon-dongman",
          text: "漫画中心"
        },
        {
          iconName: "#icon-youxi",
          text: "游戏中心"
        },
        {
          iconName: "#icon-1122-v2-03",
          text: "娱乐中心"
        },
        {
          iconName: "#icon-yuedu",
          text: "咪咕阅读"
        }
      ]
    };
  },
  methods: {
    handler(item) {
      switch (item.iconName) {
        case "#icon-fenlei":
          this.$router.push("/categories");
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";

header {
  color: #fff;
}

p {
  text-align: left;
  margin: 1.5rem 2rem;
}

.content {
  max-width: $width;
  margin: 0 auto;
}

ul {
  padding-left: 1rem;
  margin-top: 5rem;
}

li {
  display: flex;
  align-items: center;

  .icon {
    font-size: 1.8rem;
    margin-right: 1.5rem;
  }

  p {
    width: 100%;
    border-bottom: 1px solid #eee;
    margin: 0;
    padding: 1rem 0;
    line-height: 1.5rem;
    color: #333;

    span {
      float: right;
      margin-right: 1rem;
      font-size: 1.5rem;
      color: #aaa;
    }
  }

  &:hover {
    & > p {
      border-bottom-color: $active-color;
    }
    & > p,
    & span {
      color: $active-color;
    }
  }
}
</style>

