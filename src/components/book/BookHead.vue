<template>
  <header>
    <div class="back" @click="back">
      <icon iconName="#icon-back"/>
      <span>书籍详情</span>
    </div>
    <div class="opeartor">
      <span>缓存全本</span>
      <span>分享</span>
    </div>
  </header>
</template>

<script>
import Icon from "../Icon";
export default {
  name: "bookHead",
  data() {
    return {};
  },
  components: { Icon },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";

header {
  @include fixedtopcenter;
  display: flex;
  align-items: center;
  max-width: $width;
  background-color: $header-color;
  color: #fff;
}

.back {
  flex-grow: 1;
  text-align: left;
  padding: 1rem;

  span {
    margin-left: 1rem;
    display: inline-flex;
    align-items: center;
    font-size: 1.2rem;
  }
}
.opeartor {
  flex-grow: 1;
  text-align: right;

  span {
    margin-right: 1rem;
  }
}
</style>

