<template>
  <div>
    <header class="fixed">
      <div class="user">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-denglu"></use>
        </svg>
      </div>
      <div class="message">
        <p>{{login}}</p>
      </div>
    </header>
    <section>
      <div class="info">
        <ul>
          <li
            v-for="(item,index) in headerList"
            :key="index"
          >
            <div class="left-icon">
              <icon :iconName="item.iconName"/>
            </div>
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
      <div class="self">
        <ul>
          <li
            v-for="(item,index) in selfList"
            :key="index"
            >
            <div class="left-icon">
              <icon :iconName="item.iconName"/>
            </div>
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
      <div class="common">
        <ul>
          <li
            v-for="(item,index) in commonList"
            :key="index"
          >
            <div class="left-icon">
              <icon :iconName="item.iconName"/>
            </div>
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  name: "UserHead",
  components: { Icon },
  data() {
    return {
      login: "未登录",
      headerList: [
        {
          iconName: "#icon-xiaoxi",
          text: "消息"
        },
        {
          iconName: "#icon-topic1",
          text: "话题"
        },
        {
          iconName: "#icon-list",
          text: "书单"
        }
      ],
      selfList: [
        {
          iconName: "#icon-zhanghu",
          text: "我的帐户"
        },
        {
          iconName: "#icon-jingyan",
          text: "经验等级"
        }
      ],
      commonList: [
        {
          iconName: "#icon-renwu10",
          text: "每日任务"
        },
        {
          iconName: "#icon-weixin",
          text: "微信公众号"
        },
        {
          iconName: "#icon-ordinaryset",
          text: "设置"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";
header {
  max-width: $width;
  background-color: $header-color;
  display: flex;
  align-items: center;
  z-index: 99;
  .user {
    flex-grow: 1;
    text-align: left;

    .icon {
      font-size: 4rem;
      margin: 1rem 0 1rem 2rem;
      color: #eee;
    }
  }

  .message {
    flex-grow: 5;
    text-align: left;
    color: #fff;
    margin-left: -4rem;
  }
}

section {
  margin: 6rem auto;
  max-width: $width;
  height: 100%;
  background-color: #eee;
  opacity: 0.8;

  ul {
    margin: 0;
    padding: 0;
  }

  .info {
    li {
      margin: 0;

      &:nth-child(2) {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }
    }
  }

  .self {
    li {
      &:nth-child(1) {
        margin-bottom: 0;
      }
      &:nth-child(2) {
        border-top: 1px solid #eee;
        margin: 0;
      }
    }
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0.8rem 0;
    padding: 0.8rem 0;
    background-color: #fff;

    .left-icon {
      margin-left: 1rem;
    }
    p {
      margin: 0 1.5rem;
      color: #333;

      &:hover {
        color: $active-color;
      }
    }
  }
}
</style>
