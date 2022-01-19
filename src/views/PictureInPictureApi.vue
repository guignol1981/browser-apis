<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
                <h2 class="text-2xl font-semibold text-gray-900">
                    Avec bouton
                </h2>
                <video
                    ref="videoElement1"
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    controls
                />
                <button
                    type="button"
                    class="mt-3 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="togglePictureInPicture"
                >
                    Toggle Picture in picture
                </button>
                <h2 class="mt-12 text-2xl font-semibold text-gray-900">
                    Auto Picture in Picture
                </h2>
                <video
                    ref="videoElement2"
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    controls
                    autopictureinpicture
                />
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';
import { onMounted, ref } from '@vue/runtime-core';

const title = 'Picture in Picture API';
const docUrl =
    'https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API';
const useCases = [
    `Permerttre d'écouter une vidéo tout en continuant de consulter une page web`,
];

export default {
    components: {
        ApiTemplateVue,
    },

    setup() {
        const videoElement1 = ref(null);
        const videoElement2 = ref(null);

        function togglePictureInPicture() {
            if (document.pictureInPictureElement) {
                document.exitPictureInPicture();
            } else {
                if (document.pictureInPictureEnabled) {
                    videoElement1.value.requestPictureInPicture();
                }
            }
        }

        onMounted(() => {
            videoElement1.value.addEventListener(
                'enterpictureinpicture',
                (e) => {
                    console.info('> Video entered Picture-in-Picture', e);
                }
            );

            videoElement1.value.addEventListener(
                'leavepictureinpicture',
                () => {
                    console.info('> Video left Picture-in-Picture');
                }
            );
        });

        return {
            title,
            docUrl,
            useCases,
            togglePictureInPicture,
            videoElement1,
            videoElement2,
        };
    },
};
</script>

<style lang="scss" scoped></style>
