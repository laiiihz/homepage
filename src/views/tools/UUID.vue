<template>
  <tool-structure>
    UUID
    <template #content>
      <v-card-actions>
        <v-select filled rounded :items="items" v-model="version"></v-select>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="genUUID(version)">生成</v-btn>
      </v-card-actions>
      <transition name="scroll-x-transition" mode="out-in">
        <v-text-field v-if="v3AndV5" filled rounded v-model="dataExtra">
          <template #append-outer>
            <v-select
              filled
              rounded
              dense
              :items="uuidTypes"
              v-model="uuidType"
            ></v-select>
          </template>
          <template #prepend v-if="uuidType === 'custom'">
            <v-text-field
              filled
              rounded
              dense
              hint="namespace"
              v-model="namespaceName"
            ></v-text-field>
          </template>
        </v-text-field>
        <v-card-title v-else>{{ version }}</v-card-title>
      </transition>
      <v-textarea
        rows="1"
        readonly
        filled
        rounded
        v-model="uuidValue"
      ></v-textarea>
    </template>
  </tool-structure>
</template>

<script>
import ToolStructure from "./ToolStructure";
import { v1, v3, v4, v5 } from "uuid";
export default {
  name: "UUID",
  components: { ToolStructure },
  data: () => ({
    uuidValue: "",
    items: ["v1", "v3", "v4", "v5"],
    version: "v4",
    v3AndV5: false,
    uuidTypes: ["dns", "url", "custom"],
    uuidType: "dns",
    namespaceName: "",
    dataExtra: ""
  }),
  watch: {
    version() {
      this.v3AndV5 = this.version === "v3" || this.version === "v5";
    }
  },
  methods: {
    genUUID(version) {
      switch (version) {
        case "v1":
          this.uuidValue = v1();
          break;
        case "v3":
          switch (this.uuidType) {
            case "dns":
              this.uuidValue = v3(this.dataExtra, v3.DNS);
              break;
            case "url":
              this.uuidValue = v3(this.dataExtra, v3.URL);
              break;
            case "custom":
              this.uuidValue = v3(this.dataExtra, this.namespaceName);
              break;
          }
          break;
        case "v4":
          this.uuidValue = v4();
          break;
        case "v5":
            switch (this.uuidType) {
                case "dns":
                    this.uuidValue = v5(this.dataExtra, v5.DNS);
                    break;
                case "url":
                    this.uuidValue = v5(this.dataExtra, v5.URL);
                    break;
                case "custom":
                    this.uuidValue = v5(this.dataExtra, this.namespaceName);
                    break;
            }
            break;
      }
    }
  }
};
</script>

<style scoped></style>
