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

        <v-row justify="center">
          <a
            v-for="(next, i) in items"
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
      items: [
        {
          text: 'Twitter',
          href: 'https://twitter.com/wata_hari',
        },
        {
          text: 'Blog',
          href: 'https://blog.watahari.com/',
        },
        {
          text: 'GitHub',
          href: 'https://github.com/watahari',
        },
        {
          text: 'Instagram - Cooking diary',
          href: 'https://www.instagram.com/meshi_today/',
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
          text: 'Fitbit',
          href: 'https://www.fitbit.com/user/7TQJDG',
        },
        {
          text: 'myfitnesspal - Food diary',
          href: 'https://www.myfitnesspal.com/food/diary/Watahari',
        },
        {
          text: 'Bookmeter',
          href: 'https://bookmeter.com/users/1913',
        },
      ],
    }),
  }
</script>
