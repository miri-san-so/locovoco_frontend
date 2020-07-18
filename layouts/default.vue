<template>
    <div>
        <Navbar v-if="currentPage !== 'index' && currentPage !== 'testing'" />
        <nuxt />
        <Tabs v-if="tabStatus == true" />
    </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Tabs from "~/components/Tabs.vue";

export default {
    components: {
        Navbar,
        Tabs
    },

    computed: {
        tabStatus() {
            return this.$store.getters["tabStatus"];
        },
        currentPage() {
            return this.$store.getters["getCurrentPage"];
        }
    }
};
</script>

<style>
html,
body {
    font-size: 16px;
    word-spacing: 1px;
    box-sizing: border-box;
    overflow-x: hidden;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
</style>
