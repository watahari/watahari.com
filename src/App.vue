<template>
  <v-app>
    <v-main>
      <Title/>
      <v-divider></v-divider>
      <Me/>
      <GiveMe/>
      <Timeline/>
      <Sake/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Title from './components/Title';
import Me from './components/Me';
import GiveMe from './components/GiveMe';
import Timeline from './components/Timeline';
import Sake from './components/Sake';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Title,
    Me,
    GiveMe,
    Timeline,
    Sake,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
