<template>
  <v-btn rounded @click="routeBack" :dark="darkMode">
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ToolHeader",
  methods: {
    routeBack() {
      this.$router.go(-1);
    }
  },
  computed: {
    darkMode: {
      set() {},
      get() {
        return this.$store.state.darkMode;
      }
    }
  }
};
</script>

<style scoped></style>
