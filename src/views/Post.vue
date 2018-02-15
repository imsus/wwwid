<template>
  <div>
    <article-detail></article-detail>
  </div>
</template>

<script>
  export default {
    name: 'post-view',
    components: {
      'article-detail': () => import('../components/ArticleDetail.vue')
    }
  }
</script>
