<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/IMG_2905.jpeg')"
          class="my-3"
          contain
          height="500"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          watahari.com </h1>

        <p class="subheading font-weight-regular">
          Hope revived
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Title',
  }
</script>
