<template>
  <div class="px-3 pb-8">
    <article-summary v-for="(item, key) in items" :article="item" :key="key" />
  </div>
</template>

<script>
  export default {
    name: 'home-view',
    components: {
      'article-summary': () => import('../components/ArticleSummary.vue')
    },
    computed: {
      items() {
        return this.$store.getters.allFeeds
      }
    }
  }
</script>

