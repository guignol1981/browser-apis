<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
                <button
                    type="button"
                    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="share"
                >
                    Partagez ce texte!
                </button>
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';

const title = 'Web Share API';
const docUrl = 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API';
const useCases = [];

const shareData = {
    title: 'Une super video!',
    text: 'Regarde cette super vidéo',
    url: 'https://www.youtube.com',
};

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
    data: () => ({
        resultPara: '',
    }),
    methods: {
        async share() {
            try {
                navigator.share(shareData);
            } catch (err) {
                console.error('Web Share failed: ', err);
            }
        },
    },
    mounted() {
        // Share must be triggered by "user activation"
    },
};
</script>

<style lang="scss" scoped></style>
