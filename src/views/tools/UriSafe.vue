<template>
    <tool-structure>
        URI safe
        <template #content>
            <v-textarea filled rounded v-model="rawText"></v-textarea>
            <v-textarea filled rounded v-model="URISafeText"></v-textarea>
        </template>
    </tool-structure>
</template>

<script>
    import ToolStructure from "./ToolStructure";
    export default {
        name: "UriSafe",
        components: {ToolStructure},
        data:()=>({
            rawText:"",
            URISafeText:"",
        }),
        watch:{
            rawText(){
                this.URISafeText= window.encodeURIComponent(this.rawText);
            },
            URISafeText(){
                this.rawText = window.decodeURIComponent(this.URISafeText);
            },
        },
    }
</script>

<style scoped>

</style>