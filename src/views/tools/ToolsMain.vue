<template>
    <v-container fluid>
        <v-row>
            <v-col cols="3" v-for="item in toolsMap" :key="item.name">
                <ToolCard :obj="item"></ToolCard>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ToolCard from "./ToolCard";
    import toolsMap from "../../static/ToolsMap";
    export default {
        name: "ToolsMain",
        components: {ToolCard},
        mounted() {
            this.toolsMap = toolsMap;
        },
        data:()=>({
            toolsMap:[],
        }),
    }
</script>

<style scoped>

</style>