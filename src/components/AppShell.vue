<template>
  <div class="font-inter bg-grey-lighter">
    <main class="mx-auto max-w-sm shadow bg-white min-h-screen">
      <slot />
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app-shell'
  }
</script>
