<template>
  <v-app>
    <v-main>
      <Timeline/>
    </v-main>
  </v-app>
</template>
<script>

// @ is an alias to /src
import Timeline from '@/components/Timeline';

export default {
  name: 'About',
  components: {
    Timeline,
  },
  data: () => ({
    //
  }),
};
</script>
