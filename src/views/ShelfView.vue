<template>
  <div>
    <header-bar></header-bar>
    <book-list></book-list>
    <footer-bar :isPage="isPage"></footer-bar>
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar'
  import BookList from '../components/BookList'
  import FooterBar from '../components/FooterBar'

  export default {
    components: {HeaderBar, BookList, FooterBar},
    data () {
      return {
        isPage: 'shelf'
      }
    },
    created () {
  
    }
  }
</script>
