<template>
  <tool-structure>
    Base 64
    <template #content>
      <v-textarea filled rounded v-model="rawText"></v-textarea>
      <v-btn-toggle></v-btn-toggle>
      <v-textarea filled rounded v-model="base64Text"></v-textarea>
    </template>
  </tool-structure>
</template>

<script>
import ToolStructure from "./ToolStructure";
export default {
  name: "Base64",
  components: {ToolStructure },
  data: () => ({
    rawText: "",
    base64Text: ""
  }),
  watch: {
    rawText() {
      this.base64Text =this.btoaUTF16(this.rawText);
    },
    base64Text() {
      this.rawText = this.atobUTF16(this.base64Text);
    }
  },
  methods: {
    /*\
    |*|
    |*|  Base64 / binary data / UTF-8 strings utilities (#3)
    |*|
    |*|  https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
    |*|
    |*|  Author: madmurphy
    |*|
    \*/
    btoaUTF16(sString) {
      let aUTF16CodeUnits = new Uint16Array(sString.length);
      Array.prototype.forEach.call(aUTF16CodeUnits, function (el, idx, arr) {
        arr[idx] = sString.charCodeAt(idx);
      });
      return btoa(
              String.fromCharCode.apply(null, new Uint8Array(aUTF16CodeUnits.buffer))
      );
    },

    atobUTF16(sBase64) {
      let sBinaryString = atob(sBase64),
        aBinaryView = new Uint8Array(sBinaryString.length);
      Array.prototype.forEach.call(aBinaryView, function(el, idx, arr) {
        arr[idx] = sBinaryString.charCodeAt(idx);
      });
      return String.fromCharCode.apply(
        null,
        new Uint16Array(aBinaryView.buffer)
      );
    }
  }
};
</script>

<style scoped></style>
