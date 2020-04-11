<template>
    <v-btn rounded @click="routeBack">
        <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: "ToolHeader",
        methods:{
            routeBack(){
                this.$router.go(-1);
            },
        },
    }
</script>

<style scoped>

</style>