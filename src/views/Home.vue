<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center" >
      <v-col cols="4">
        <v-img :src="engineImg" max-height="75" contain></v-img>
        <div style="height: 20px"></div>
        <v-text-field
          solo
          label="search"
          prepend-inner-icon="mdi-magnify"
          rounded
          v-model="searchValue"
          @keydown="onSearch"
          :dark="darkMode"
        >
          <template #append>
            {{ engineName }}
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({
    searchValue: "",
    keyValue: false,
    searchItems: ["google", "baidu"]
  }),
  methods: {
    onSearch(event) {
      if (event.keyCode === 13) {
        this.searchWithWord();
      }
    },
    searchWithWord() {
      let prefix = this.$store.state.enginePrefix;
      let url = prefix + encodeURI(this.searchValue);
      window.open(url, "_blank");
    }
  },
  computed: {
    darkMode: {
      set() {},
      get() {
        return this.$store.state.darkMode;
      }
    },
    engineName: {
      set() {},
      get() {
        return this.$store.state.engine;
      }
    },
    engineImg: {
      set() {},
      get() {
        return this.$store.state.engineSrc;
      }
    }
  }
};
</script>
<style lang="scss">
.search-box {
  width: 100%;
}
</style>
