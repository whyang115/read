<template>
  <div class="content">
    <div class="center-icon">
      <icon iconName="#icon-1"/>
    </div>
    <p>登陆后才能看到朋友的分享</p>
    <button>快速登录</button>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  name: "Dynamic",
  components: { Icon },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";
.content {
  max-width: $width;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.center-icon {
  flex: 3;

  .icon {
    font-size: 10rem;
    margin-top: 10rem;
  }
}
p {
  color: #333;
}

button {
  flex: 1;
  background-color: $active-color;
  border: none;
  border-radius: 2rem;
  outline: none;
  color: #fff;
  padding: 1rem 2rem;
  margin: 1rem 0 5rem 0;
}
</style>
