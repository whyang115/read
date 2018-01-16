<template>
  <header class="fixed">
    <div class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </div>
    <div class="search" @click="runtosearch">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
    </div>
    <div class="more" @click="show">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-more"></use>
      </svg>
    </div>
    <div class="more-info" v-if="isShow">
      <div class="mask" @click="close"></div>
      <ul>
        <li>
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tongbu"></use>
          </svg>
          同步书架
        </li>
        <li>
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-saomiao"></use>
          </svg>
          扫描本地书籍
        </li>
        <li>
           <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wifi"></use>
      </svg>
          WIFI传书
        </li>
        <li>
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yijian"></use>
          </svg>
          意见反馈
        </li>
        <li>
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yejian"></use>
          </svg>
          夜间模式
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderBar',
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      show () {
        this.isShow = true
      },
      runtosearch () {
        this.$router.push('/search')
      },
      close (e) {
        if (e.target.className === 'mask') {
          this.isShow = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: $width;
    height: 5rem;
    background-color: $header-color;
    opacity: .8;
  }
  .logo {
    display: flex;
    flex-direction: row;
    flex-grow: 6;
    .icon {
     margin-left: 4rem;
     transition: all 1s ease-in-out;

      &:hover {
        color: orange;
        transform: rotate(360deg);
        font-size: 3rem;
      }
    }
  }
  .search {
    flex-grow: 1;
  }
  .more {
    flex-grow: 1;
  }
  .icon {
    font-size: 1.2rem;
    color: #fff;
  }
  .more-info {
    .mask {
      @include mask;
    }
    ul {
      position: absolute;
      top: 5rem;
      right: 0;
      margin: 0;
      padding: 10px;
      background-color: #fff;

      li {
        list-style: none;
        padding: .5rem;
        text-align: left;
        line-height: 1.5rem;
        color: #333;

        .icon {
          font-size: 1.5rem;
          color: #333;
          margin-right: 1rem;
          vertical-align: middle;
        }
      }
    }
  }
</style>

