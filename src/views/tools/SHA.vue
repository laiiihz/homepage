<template>
  <tool-structure>
    SHA
    <template #content>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn-toggle tile group v-model="typeValue">
          <v-btn>SHA-256</v-btn>
          <v-btn>SHA-512</v-btn>
        </v-btn-toggle>
      </v-card-title>
      <v-textarea filled rounded v-model="rawText"></v-textarea>
      <v-textarea filled rounded v-model="shaText" readonly></v-textarea>
    </template>
  </tool-structure>
</template>

<script>
import ToolStructure from "./ToolStructure";
import sha256 from "crypto-js/sha256";
import sha512 from "crypto-js/sha512";
export default {
  name: "SHA",
  components: { ToolStructure },
  data: () => ({
    rawText: "",
    shaText: "",
    typeValue: 0
  }),
  watch: {
    rawText() {
      switch (this.typeValue) {
        case 0:
          this.shaText = sha256(this.rawText);
          break;
        case 1:
          this.shaText = sha512(this.rawText).toString();
          break;
      }
    },
  }
};
</script>

<style scoped></style>
