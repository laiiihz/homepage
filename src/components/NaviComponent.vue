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
        <keep-alive>
          <v-img :src="item.icon" contain height="30" width="30"></v-img>
        </keep-alive>
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
  computed:{
    darkMode: {
      set() {},
      get() {
        return this.$store.state.darkMode;
      }
    },
  },
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
