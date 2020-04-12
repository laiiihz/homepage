<template>
  <tool-structure>
    QR code
    <template #content>
      <v-text-field filled rounded v-model="rawText"></v-text-field>
      <QrcodeVue :value="rawText"></QrcodeVue>
    </template>
  </tool-structure>
</template>

<script>
import ToolStructure from "./ToolStructure";
import QrcodeVue from "qrcode.vue";
export default {
  name: "Qrcode",
  components: { ToolStructure, QrcodeVue },
  data: () => ({
    rawText: "",
  }),

};
</script>

<style scoped></style>
