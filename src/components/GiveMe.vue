<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Thank you for a lot!
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
    name: 'GiveMe',

    data: () => ({
      items: [
        {
          text: 'WishList(Amazon.co.jp)',
          href: 'https://www.amazon.co.jp/hz/wishlist/ls/2HUCQ913ZG8WX',
        },
        {
          text: 'Buy me a coffee',
          href: 'https://www.buymeacoffee.com/watahari',
        },
      ],
    }),
  }
</script>
