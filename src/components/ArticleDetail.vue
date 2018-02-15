<template>
  <article class="pb-8">
    <div class="mb-3">
      <img v-lazy="cloudinaryImage2x" class="h-auto w-full flex bg-grey-lightest" alt="">
    </div>
    <div class="mx-3 mb-8">
      <h1 class="text-2xl leading-tight mb-2">{{ article.title }}</h1>
      <div class="text-sm mb-3 text-grey-dark leading-tight">ditulis oleh <strong>{{ article.author }}</strong> pada <time :datetime="formattedDate">{{ formattedDate }}</time></div>
      <div id="content" v-html="article.content"></div>
      <div>
        <h2 class="text-base mb-2">Kategori</h2>
        <ul class="list-reset flex flex-wrap">
          <li class="mr-2 mb-2 text-xs border rounded-sm bg-grey-lighter" v-for="(category, key) in article.categories" :key="key">
            <router-link class="no-underline text-grey-darker py-1 px-2 inline-block" :to="`/category/${category}`">{{ category | slugToTitle }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="text-center">
      <a class="py-2 px-4 rounded-full border no-underline text-grey-darker" :href="article.link" target="_blank" rel="noopener nofollow">Sumber Artikel</a>
    </div>
  </article>
</template>

<script>
  import { DateTime } from 'luxon'

  export default {
    name: 'article-detail',
    computed: {
      article() {
        return this.$store.getters.itemsByGuid(this.$route.params.guid)
      },
      cloudinaryImage() {
        return `https://res.cloudinary.com/imsus/image/fetch/c_scale,fl_force_strip.progressive,w_478/f_webp/${this.article.thumbnail}`
      },
      cloudinaryImage2x() {
        return `https://res.cloudinary.com/imsus/image/fetch/c_scale,fl_force_strip.progressive,w_958/f_webp/${this.article.thumbnail}`
      },
      formattedDate() {
        return DateTime.fromSQL(this.article.pubDate).setLocale('id').toLocaleString(DateTime.DATE_FULL)
      }
    }
  }
</script>
