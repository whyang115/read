<template>
  <header class="fixed">
    <div class="back" @click="back">
      <icon iconName="#icon-back"/>
    </div>
    <div class="form">
      <input type="text" v-model="search" @keyup.enter="searchResouce" placeholder="输入书名或作者名">
      <div class="empty" @click="empty" v-show="isShow">
        <icon iconName="#icon-empty"/>
      </div>
    </div>
    <div class="search" @click="searchResouce">
      <icon iconName="#icon-search"/>
    </div>
  </header>
</template>

<script>
import Icon from "../Icon";
export default {
  data() {
    return {
      search: "",
      searchResult: [],
      isShow: false
    };
  },
  components: { Icon },
  watch: {
    search(newVal) {
      if (newVal) {
        this.isShow = true;
      }
    }
  },
  methods: {
    back() {
      this.$router.push("/shelf");
    },
    empty() {
      this.search = "";
      this.isShow = false;
      this.$emit("changeView", "history");
    },
    searchResouce() {
      if (this.search) {
        this.$emit("changeView", "result");
        this.$store.commit({
          type: "addHistory",
          item: { name: this.search }
        });
        this.$store.commit({
          type: "searchResouce",
          content: this.search
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";
$height: 4rem;
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: $width;
  height: $height;
  background-color: $header-color;
}

.back {
  flex-grow: 1;
}

.form {
  flex-grow: 4;
}
input {
  width: 90%;
  height: $height;
  background-color: transparent;
  border: none;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  padding: 0;
  outline: none;
  padding-left: 2rem;
  font-size: 1.5rem;
  letter-spacing: 1px;
  color: #fff;
}
.empty {
  position: absolute;
  top: 20px;
  right: 16%;
  cursor: pointer;
}
.search {
  flex-grow: 1;
}

::-webkit-input-placeholder {
  color: #fff;
}

.icon {
  color: #fff;
}
</style>
