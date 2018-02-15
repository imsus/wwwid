<template>
  <header class="border-t-8 border-red px-3 py-2 fixed max-w-sm mx-auto z-10 bg-white shadow truncate pin-t pin-r pin-l flex items-start">
    <router-link v-show="$route.path !== '/'" to="/" class="no-underline h-8 w-8 rounded-full bg-red mr-3 flex-none text-white flex items-center justify-center">&larr;</router-link>
    <div class="flex-auto truncate">
      <small class="block font-bold uppercase text-grey-dark text-xs mb-1">Publikasi dari</small>
      <h1 class="text-xl leading-tight"><router-link class="no-underline text-black" to="/">{{ title }}</router-link></h1>
      <p class="leading-tight text-grey-dark truncate">{{ description }}</p>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'app-header',
    props: ['title', 'description']
  }
</script>
