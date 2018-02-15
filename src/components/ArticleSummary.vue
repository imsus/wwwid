<template>
  <article class="my-4">
    <div class="relative">
      <router-link class="flex-none ml-4 mb-3 border float-right" :to="`/post/${guidNumber}`">
        <img class="flex" v-lazy="cloudinaryImage2x" height="120" width="120" alt="">
      </router-link>
      <h2 class="text-base leading-tight mb-1">
        <router-link class="text-blue no-underline" :to="`/post/${guidNumber}`">{{ article.title }}</router-link>
      </h2>
      <div class="text-xs mb-2 text-grey-dark leading-tight">ditulis oleh <strong>{{ article.author }}</strong> pada <time :datetime="formattedDate">{{ formattedDate }}</time></div>
      <div class="leading-normal text-sm mb-3" v-html="excerpt"></div>
      <ul class="list-reset flex flex-wrap">
        <li class="mr-2 mb-2 text-xs border rounded-sm bg-grey-lighter" v-for="(category, key) in article.categories" :key="key">
          <router-link class="no-underline text-grey-darker py-1 px-2 inline-block" :to="`/category/${category}`">{{ category | slugToTitle }}</router-link>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
  import downsize from 'downsize'
  import { DateTime } from 'luxon'

  export default {
    name: 'article-summary',
    props: ['article'],
    computed: {
      guidNumber() {
        return this.article.guid.split('/').pop()
      },
      formattedDate() {
        return DateTime.fromSQL(this.article.pubDate).setLocale('id').toLocaleString(DateTime.DATE_FULL)
      },
      cloudinaryImage() {
        return `https://res.cloudinary.com/imsus/image/fetch/c_fill,g_auto:face,h_120,w_120,fl_force_strip.progressive/f_webp/${this.article.thumbnail}`
      },
      cloudinaryImage2x() {
        return `https://res.cloudinary.com/imsus/image/fetch/c_fill,g_auto:face,h_240,w_240,fl_force_strip.progressive/f_webp/${this.article.thumbnail}`
      },
      excerpt() {
        var excerpt = this.article.content.replace(/<a href="#fn.*?rel="footnote">.*?<\/a>/gi, '')
        excerpt = excerpt.replace(/<div class="footnotes"><ol>.*?<\/ol><\/div>/, '')
        // Strip other html
        excerpt = excerpt.replace(/<\/?[^>]+>/gi, '')
        excerpt = excerpt.replace(/(\r\n|\n|\r)+/gm, ' ')

        return downsize(excerpt, { words: 22 })
      },
    }
  }
</script>
