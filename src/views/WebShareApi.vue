<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
                <div>
                    <h2 class="text-2xl font-semibold text-gray-900">
                        Partager une vidéo
                    </h2>
                    <video
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        controls
                    ></video>
                    <button
                        type="button"
                        class="mt-2 inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        @click="shareVideo"
                    >
                        <ShareIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-12">
                    <h2 class="text-2xl font-semibold text-gray-900">
                        Partager des fichiers
                    </h2>
                    <div
                        class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                    >
                        <div class="space-y-1 text-center">
                            <svg
                                class="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                                <label
                                    for="file-upload"
                                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        class="sr-only"
                                        @change="onFileChange"
                                    />
                                </label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                            </p>
                        </div>
                    </div>
                    {{ file }}
                    <button
                        type="button"
                        class="mt-2 inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        @click="shareFile"
                    >
                        <ShareIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';

const title = 'Web Share API';
const docUrl = 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API';
const useCases = [
    'partager des documents par courriel',
    'partager une vidéo avec des gens a proximité',
    'partager un lien avec un texte qui accompagne',
];

import { ShareIcon } from '@heroicons/vue/outline/';
import { ref } from '@vue/reactivity';

export default {
    components: {
        ApiTemplateVue,
        ShareIcon,
    },
    setup() {
        const file = ref(null);

        const shareVideo = () => {
            try {
                navigator.share({
                    title: 'Une vidéo vraiment pas le fun!',
                    text: 'Regarde cette vidéo vraiment platte',
                    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                });
            } catch (err) {
                console.error('Web Share failed: ', err);
            }
        };

        const shareFile = () => {
            try {
                navigator.share({
                    files: [file.value],
                    title: 'Le fichier que tu voulais!',
                    text: 'voila le fichier',
                });
            } catch (err) {
                console.error('Web Share failed: ', err);
            }
        };

        const onFileChange = (event) => {
            file.value = event.target.files[0];
        };

        return {
            title,
            docUrl,
            useCases,
            file,
            shareVideo,
            shareFile,
            onFileChange,
        };
    },
};
</script>

<style lang="scss" scoped></style>
