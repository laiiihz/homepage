<template>
  <v-expansion-panels :dark="darkMode" focusable hover popout multiple>
    <v-expansion-panel  v-for="item in items" :key="item.type">
      <v-expansion-panel-header
              :href="'#'+item.type">
        {{ item.type }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-container>
          <v-row>
            <v-col
                    cols="12"
                    xl="3"
                    lg="3"
                    md="4"
                    sm="6"
                    xs="12"
                    v-for="naviObj in item.sites"
                    :key="naviObj.name"
            >
              <navi-component :item="naviObj"></navi-component>
            </v-col>
          </v-row>
        </v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import NaviComponent from "../components/NaviComponent";
import websites from "../static/websites";
export default {
  name: "Navigation",
  mounted() {
    this.items = websites;
  },
  components: { NaviComponent },
  data: () => ({
    items: []
  }),
  computed:{
    darkMode: {
      set() {},
      get() {
        return this.$store.state.darkMode;
      }
    },
  },
};
</script>

<style scoped></style>
