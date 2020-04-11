<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col xl="6" lg="6" md="8">
                <v-card class="pa-5">
                    <v-card-title>
                        <tool-header></tool-header>
                        <v-spacer></v-spacer>
                        <slot></slot>
                    </v-card-title>
                    <slot name="content"></slot>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ToolHeader from "./ToolHeader";
    export default {
        name: "ToolStructure",
        components: {ToolHeader}
    }
</script>

<style scoped>

</style>