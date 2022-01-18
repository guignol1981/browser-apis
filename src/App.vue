<template>
    <dashboard-vue>
        <router-view />
    </dashboard-vue>
</template>

<script>
import DashboardVue from './components/Dashboard.vue';
export default {
    components: {
        DashboardVue,
    },
};
</script>

<style lang="scss"></style>
