<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          History
        </h2>

        <v-row justify="center">

          <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class="px-2">
            <v-timeline-item
              v-for="(item, i) in items"
              :key="i"
              :color="item.color"
              :icon="item.icon"
              fill-dot
            >
              <v-card
                :color="item.color"
                dark
              >
                <v-card-title class="title">{{item.text}}</v-card-title>
                <v-card-text class="text-body-1">{{item.description}}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>

        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Timeline',

    data: () => ({
      items: [
        {
          color: 'green lighten-2',
          icon: 'mdi-baby',
          text: 'Born at Sendai city',
          description: 'Hello, world!',
        },
        {
          color: 'green darken-2',
          icon: 'mdi-human-child',
          text: 'Moved to Tokyo',
          description: '',
        },
        {
          color: 'blue lighten-2',
          icon: 'mdi-school',
          text: 'TNCT(J)',
          description: 'In 5years.',
        },
        {
          color: 'blue-grey lighten-2',
          icon: 'mdi-pac-man',
          text: 'Sole proprietorship',
          description: '',
        },
        {
          color: 'black darken-1',
          icon: 'mdi-school',
          text: 'TUT(7)',
          description: 'In 2 years.',
        },
        {
          color: 'red lighten-1',
          icon: 'mdi-run',
          text: 'Web engineer in Tokyo',
          description: 'Front-end&batch (PHP), Settlement API (ApplePay etc.), Back-end (Information Retrieval, Apache Solr), and more...',
        },
        {
          color: 'red darken-4 lighten-1',
          icon: 'mdi-heart',
          text: 'WUGner',
          description: 'THIS IS "Wake Up, Girls!"',
        },
        {
          color: 'amber darken-2 lighten-1',
          icon: 'mdi-ring',
          text: 'Married',
          description: '',
        },
      ],
    }),
  }
</script>
