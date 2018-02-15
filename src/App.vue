<template>
  <app-shell>
    <app-header :title="feed.title"
                :description="feed.description" />
    <router-view style="padding-top: 86px;"/>
  </app-shell>
</template>

<script>
  export default {
    name: 'application',
    components: {
      'app-shell': () => import('./components/AppShell.vue'),
      'app-header': () => import('./components/AppHeader.vue')
    },
    mounted() {
      this.$store.dispatch('fetchInitialRSS')
    },
    computed: {
      feed() {
        return this.$store.state.rss.feed
      }
    }
  }
</script>

<style src="./assets/css/fontface.css"></style>
<style src="./assets/css/style.css"></style>
