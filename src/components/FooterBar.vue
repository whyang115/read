<template>
  <footer>
    <ul>
      <li
        v-for="item in pageItem"
        :key="item.id"
        :class="{active: pages[item.id] }"
        @click="indexNav(item.id)">
        <div>
          <icon :iconName="item.iconName" />
        </div>
        <span>{{item.text}}</span>
      </li>
    </ul>
  </footer>
</template>

<script>
import Icon from "../components/Icon";
export default {
  name: "FooterBar",
  components: { Icon },
  data() {
    return {
      pages: {
        shelf: false,
        community: false,
        find: false,
        user: false
      },
      pageItem: [
        { id: "shelf", iconName: "#icon-bookshelf", text: "书架" },
        { id: "community", iconName: "#icon-shequ", text: "社区" },
        { id: "find", iconName: "#icon-faxian", text: "发现" },
        { id: "user", iconName: "#icon-wode", text: "我的" }
      ]
    };
  },
  props: ["isPage"],
  methods: {
    indexNav(id) {
      switch (id) {
        case "shelf":
          this.$router.push("/shelf");
          break;
        case "community":
          this.$router.push("/community");
          break;
        case "find":
          this.$router.push("/find");
          break;
        case "user":
          this.$router.push("/user");
          break;

        default:
          break;
      }
    }
  },
  created() {
    this.pages[this.isPage] = true;
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
$height: 4rem;
footer {
  @include fixedbottomcenter;
  max-width: $width;
  height: $height;
  box-shadow: 0 -1px 5px 2px rgba(218, 218, 218, 0.6);
  z-index: 10;
  background: #fff;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: $width;
  margin: 0;
  padding: 0;
}
li {
  width: 20%;
  list-style: none;
  cursor: pointer;
}
.icon {
  margin: 0.5rem;
}
.active {
  color: $active-color;
}
</style>
