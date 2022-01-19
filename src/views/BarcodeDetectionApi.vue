<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
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
                        <p class="text-xs text-gray-500">PNG, JPG</p>
                    </div>
                </div>
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';

const title = 'Barcode Detection API';
const docUrl =
    'https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API';
const useCases = [];
// eslint-disable-next-line no-undef
var barcodeDetector = new BarcodeDetector({
    formats: ['code_39', 'codabar', 'ean_13'],
});

export default {
    components: {
        ApiTemplateVue,
    },
    setup() {
        function onFileChange(event) {
            barcodeDetector
                .detect(event.target.files[0])
                .then((barcodes) => {
                    barcodes.forEach((barcode) => console.log(barcode.rawData));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        return {
            title,
            docUrl,
            useCases,
            onFileChange,
        };
    },
};
</script>

<style lang="scss" scoped></style>
