<template>
  <div class="px-3 pb-8">
    <div class="mb-8 mt-4 text-center">
      <div class="uppercase font-bold text-xs text-grey-dark tracking-wide">Artikel dalam kategori</div>
      <h1 class="text-2xl">{{ $route.params.slug | slugToTitle }}</h1>
    </div>
    <article-summary v-for="(item, key) in items" :article="item" :key="key" />
  </div>
</template>

<script>
  export default {
    name: 'category-view',
    components: {
      'article-summary': () => import('../components/ArticleSummary.vue')
    },
    computed: {
      items() {
        return this.$store.getters.itemsByCategory(this.$route.params.slug)
      }
    }
  }
</script>

