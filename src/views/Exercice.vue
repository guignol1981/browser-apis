<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples> votre example ici </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';

const title = 'API de mon choix';
const docUrl = '';
const useCases = ['use case 1', 'use case 2'];

export default {
    components: {
        ApiTemplateVue,
    },
    setup() {
        return {
            title,
            docUrl,
            useCases,
        };
    },
};
</script>

<style lang="scss" scoped></style>
