<template>
  <div style="z-index:10">
    <v-toolbar flat style="cursor:pointer; background: transparent; z-index:10;">
      <!-- <v-app-bar-nav-icon class="ml-2"></v-app-bar-nav-icon> -->

      <v-toolbar-title @click="redirect('/')" style="margin-left:7.5vh" class="headline"
        >Demiann</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-toolbar-items style="margin-right:7.5vh;">
        <v-btn text rounded v-scroll-to="'#portfolio'">Home</v-btn>
        <v-btn text rounded v-scroll-to="'#footer'">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    redirect(path) {
      this.$router.push(path).catch(() => {
        return;
      });
    },
  },
};
</script>
