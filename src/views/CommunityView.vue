<template>
  <div>
    <community-head v-on:changeView="switchView"></community-head>
    <transition name="fade">
        <component v-bind:is="currentView"> 
        </component>
    </transition>
    
    <footer-bar :isPage="isPage"></footer-bar>
  </div>
</template>

<script>
  import CommunityHead from '../components/community/CommunityHead'
  import Dynamic from '../components/community/Dynamic'
  import Square from '../components/community/Square'
  import FooterBar from '../components/FooterBar'

  export default {
    name: 'CommunityView',
    components: {
      CommunityHead,
      FooterBar,
      square: Square,
      dynamic: Dynamic
    },
    data () {
      return {
        isPage: 'community',
        currentView: 'dynamic'
      }
    },
    methods: {
      switchView (payload) {
        this.currentView = payload.view
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>

