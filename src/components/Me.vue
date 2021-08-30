<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          It's me.
        </h2>

        <v-row justify="center mb-2">
          <a
            v-for="(next, i) in main_items"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>

        <v-row justify="center mb-2">
          <a
            v-for="(next, i) in sub_items"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>

        <v-row justify="center">
          <a
            v-for="(next, i) in key_items"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Me',

    data: () => ({
      main_items: [
        {
          text: 'Twitter',
          href: 'https://twitter.com/wata_hari',
        },
        {
          text: 'Blog',
          href: 'https://blog.watahari.com/',
        },
        {
          text: 'Instagram - Cooking diary',
          href: 'https://www.instagram.com/meshi_today/',
        },
      ],
      sub_items: [
        {
          text: 'GitHub',
          href: 'https://github.com/watahari',
        },
        {
          text: 'Podcast #まみむメモfm',
          href: 'https://mamimumemo.online/',
        },
        {
          text: 'Qiita',
          href: 'https://qiita.com/watahari',
        },
        {
          text: 'Keybase',
          href: 'https://keybase.io/watahari/',
        },
        {
          text: 'Foursquare',
          href: 'https://ja.foursquare.com/wata_hari',
        },
        {
          text: 'Bookmeter',
          href: 'https://bookmeter.com/users/1913',
        },
        {
          text: 'Visit history in Japan(経県値)',
          href: 'https://uub.jp/kkn/km_new.cgi?MAP=43453434424454424244445434434444241340441343004&NAM=watahari&CAT=%E7%94%9F%E6%B6%AF%E7%B5%8C%E7%9C%8C%E5%80%A4',
        },
        {
          text: 'myFlightradar24',
          href: 'https://my.flightradar24.com/watahari',
        },
      ],
      key_items: [
        {
          text: 'id_rsa.pub',
          href: 'https://github.com/watahari.keys',
        },
      ],
    }),
  }
</script>
