<template>
  <div>
    <find-head></find-head>
    <footer-bar :isPage="isPage"></footer-bar>
  </div>
</template>

<script>
  import FindHead from '../components/find/FindHead'
  import FooterBar from '../components/FooterBar'

  export default {
    name: 'FindView',
    components: {FindHead, FooterBar},
    data () {
      return {
        isPage: 'find'
      }
    }
  }
</script>
