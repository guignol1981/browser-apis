<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
                <h2 class="text-2xl font-semibold text-gray-900">
                    Exemple Div
                </h2>
                <div
                    ref="square"
                    class="w-32 h-32 bg-red-300 flex justify-center items-center"
                >
                    <p v-if="fullscreenEnabled">extra content</p>
                    contenu
                </div>
                <button
                    type="button"
                    class="mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="requestFullscreen(square)"
                >
                    Request fullscreen
                </button>
                <h2 class="mt-12 text-2xl font-semibold text-gray-900">
                    Exemple Img
                </h2>
                <img
                    ref="img"
                    src="https://images.unsplash.com/photo-1642607806998-6123a2d3065f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <button
                    type="button"
                    class="mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="requestFullscreen(img)"
                >
                    Request fullscreen
                </button>
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

const title = 'Fullscreen API';
const docUrl =
    'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API';
const useCases = [
    `Focusser son attention sur un texte`,
    `Permettre de voir plus clairement une image`,
];

export default {
    components: {
        ApiTemplateVue,
    },
    computed: {},
    setup() {
        const square = ref(null);
        const img = ref(null);

        function requestFullscreen(ref) {
            if (document.fullscreenElement) return;

            ref.requestFullscreen();
        }

        function exitFullscreen() {
            document.exitFullscreen();
        }

        onMounted(() => {
            square.value.onfullscreenchange = (e) => {
                console.log(e);
            };
            img.value.onfullscreenchange = (e) => {
                console.log(e);
            };
        });

        return {
            title,
            docUrl,
            useCases,
            square,
            img,
            requestFullscreen,
            exitFullscreen,
        };
    },
    mounted() {},
};
</script>

<style lang="scss" scoped></style>
