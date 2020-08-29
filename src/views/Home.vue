<template>
  <v-app>
    <v-main>
      <Title/>
      <v-divider></v-divider>
      <Me/>
      <GiveMe/>
      <Sake/>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title';
import Me from '@/components/Me';
import GiveMe from '@/components/GiveMe';
import Sake from '@/components/Sake';

export default {
  name: 'Home',
  components: {
    Title,
    Me,
    GiveMe,
    Sake,
  },
  data: () => ({
    //
  }),
};
</script>
