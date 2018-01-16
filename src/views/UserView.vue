<template>
  <div>
    <user-head></user-head>
    <footer-bar :isPage="isPage"></footer-bar>
  </div>
</template>

<script>
  import FooterBar from '../components/FooterBar'
  import UserHead from '../components/user/UserHead'

  export default {
    name: 'UserView',
    components: {UserHead, FooterBar},
    data () {
      return {
        isPage: 'user'
      }
    }
  }
</script>

