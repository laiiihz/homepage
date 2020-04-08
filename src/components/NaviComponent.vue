<template>
  <v-hover #default="{hover}">
    <v-card
      :elevation="hover ? 12 : 2"
      @mouseenter="updateAppBarColor"
      :color="item.color"
      dark
      @click="goToPage"
    >
      <v-card-title>
        {{ item.name }}
        <v-spacer></v-spacer>
        <v-img :src="item.icon" contain height="30" width="30"></v-img>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "NaviComponent",
  props: {
    item: Object
  },
  data: () => ({}),
  methods: {
    updateAppBarColor() {
      this.$store.commit("changeAppBarColor", this.item.color);
    },
    goToPage(){
      window.open(this.item.url,"_Blank");
    },
  }
};
</script>

<style scoped></style>
