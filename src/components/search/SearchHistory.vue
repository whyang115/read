<template>
  <div class="search-history">
    <h3>
      <span class="history">搜索历史</span>
      <div class="empty" @click="empty">
        <icon iconName="#icon-16trash"/>
        <span class="trash">清空</span>
      </div>
    </h3>
    <ul>
      <li
        v-for="(item,index) in items"
        :key="index"
        @click="searchResouce(item.name)"
      >
        <icon iconName="#icon-history"/>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>

</template>

<script>
import Icon from "../Icon";
export default {
  name: "SearchHistory",
  components: { Icon },
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.getters.getHistory;
    }
  },
  methods: {
    empty() {
      this.$store.commit("clearHistory");
    },
    searchResouce(keyword) {
      this.$store.commit({
        type: "searchResouce",
        content: keyword
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";
.search-history {
  max-width: $width;
  margin: 6rem auto;

  .icon {
    font-size: 1rem;
  }
}
h3 {
  display: flex;
  font-size: 1rem;
  font-weight: 300;
  line-height: 24px;
}
.history {
  flex-grow: 5;
  text-align: left;
  margin-left: 1rem;
}
.empty {
  flex-grow: 1;
  text-align: right;
  margin-right: 1rem;
}

ul {
  padding: 0 1rem;
}

li {
  display: flex;
  list-style: none;
  margin: 1.5rem 0;

  p {
    margin: 0;
    margin-left: 1rem;
    color: #333;
  }
}
</style>
