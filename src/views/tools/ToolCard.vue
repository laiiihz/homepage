<template>
    <v-card :to="{name:obj.name}">
        <v-card-title>
            {{ obj.name }}
        </v-card-title>
    </v-card>
</template>

<script>
    export default {
        name: "ToolCard",
        props:{
            obj:Object,
        },
    }
</script>

<style scoped>

</style>