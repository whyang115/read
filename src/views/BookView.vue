<template>
  <div>
    <book-head></book-head>
    <book-detail></book-detail>
  </div>
</template>

<script>
  import BookHead from '../components/book/BookHead'
  import BookDetail from '../components/book/BookDetail'

  export default {
    name: 'bookView',
    components: {BookHead, BookDetail},
    data () {
      return {}
    }
  }

</script>
