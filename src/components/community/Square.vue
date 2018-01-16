<template>
  <div class="dynamic">
    <section class="content">
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
        >
          <div class="left-icon">
            <icon :iconName="item.iconName"/>
          </div>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script scoped>
import Icon from "../Icon";
export default {
  name: "Square",
  components: { Icon },
  data() {
    return {
      list: [
        { iconName: "#icon-taolun", text: "综合讨论区" },
        { iconName: "#icon-pinglun", text: "书评区" },
        { iconName: "#icon-huzhujihua", text: "书荒互助区" },
        { iconName: "#icon-huzhujihua", text: "女生区" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";

.dynamic {
  max-width: $width;
  margin: 0 auto;
}
ul {
  margin: 0;
  padding-left: 1rem;
}
li {
  display: flex;
  align-items: center;

  &:last-child {
    p {
      border-bottom: none;
    }
  }

  p {
    color: #333;
    margin: 0;
    margin-left: 2rem;
    padding: 1rem 0;
    width: 100%;
    border-bottom: 1px solid #eee;
    text-align: left;

    &:hover {
      color: $active-color;
      border-bottom-color: $active-color;
    }
  }
}
</style>

