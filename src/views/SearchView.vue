<template>
  <div>
    <search-head v-on:changeView="changeView"></search-head>
    <component :is="currentView"></component>
  </div>
</template>

<script>
  import SearchHead from '../components/search/SearchHead'
  import SearchHistory from '../components/search/SearchHistory'
  import SearchResult from '../components/search/SearchResult'

  export default {
    components: {
      SearchHead,
      SearchHistory,
      history: SearchHistory,
      result: SearchResult
    },
    data () {
      return {
        currentView: 'history'
      }
    },
    methods: {
      changeView (view) {
        this.currentView = view
      }
    }
  }
</script>
