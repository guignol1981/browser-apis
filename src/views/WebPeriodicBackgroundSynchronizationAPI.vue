<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples> </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';

const title = 'Web PeriodicBackground Synchronization API';
const docUrl =
    'https://developer.mozilla.org/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API';
const useCases = [];

export default {
    components: {
        ApiTemplateVue,
    },
    methods: {},
    setup() {
        return {
            title,
            docUrl,
            useCases,
        };
    },
    mounted() {},
};
</script>

<style lang="scss" scoped></style>
