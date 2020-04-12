<template>
  <v-card :to="{ name: obj.name }" :dark="darkMode">
    <v-card-title>
      {{ obj.name }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "ToolCard",
  props: {
    obj: Object
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
