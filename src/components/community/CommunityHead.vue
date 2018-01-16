<template>
  <header class="fixed" v-cloak>
    <div class="dynamic">
      <p @click="toDynamic">动态</p>
      <div class="triangle" v-show="isDynamic"></div>
    </div>
    <div class="square">
      <p @click="toSquare">广场</p>
      <div class="triangle" v-show="isSquare"></div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'CommunityHead',
    data () {
      return {
        isDynamic: true,
        isSquare: false
      }
    },
    methods: {
      toDynamic () {
        this.isDynamic = true
        this.isSquare = false
        this.$emit('changeView', {view: 'dynamic'})
      },
      toSquare () {
        this.isSquare = true
        this.isDynamic = false
        this.$emit('changeView', {view: 'square'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/global.scss';

  .triangle {
    position: absolute;
    top: 2rem;
    left: 0;
    width: 0px;
    height: 0px;
    @include top-triangle(10px);
  }
  header {
    display: flex;
  }

  p {
    margin-bottom: 1rem;
    color: rgba(255,255,255, .6);

    &:hover {
      color: #fff;
    }   
  }
  .dynamic {
    position: relative;
    flex-grow: 1;
    text-align: left;
    margin-left: 1rem;
  };

  .square {
    position: relative;
    flex-grow: 5;
    margin-left: -3rem;
    text-align: left;
  }
</style>

