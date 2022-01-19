<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
                <div
                    id="element"
                    class="w-32 h-32 bg-red-300 flex justify-center items-center"
                >
                    OMG
                </div>
                <button
                    type="button"
                    class="mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="requestFullscreen"
                >
                    Request fullscreen
                </button>
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';

const title = 'Fullscreen API';
const docUrl =
    'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API';
const useCases = [];

export default {
    components: {
        ApiTemplateVue,
    },

    setup() {
        function requestFullscreen() {
            document.getElementById('element').requestFullscreen();
        }
        function exitFullscreen() {
            document.exitFullscreen();
        }

        return {
            title,
            docUrl,
            useCases,
            requestFullscreen,
            exitFullscreen,
        };
    },
    mounted() {},
};
</script>

<style lang="scss" scoped></style>
