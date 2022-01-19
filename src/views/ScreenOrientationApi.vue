<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
                <button
                    id="lockButton"
                    type="button"
                    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="rotate"
                >
                    Lock
                </button>
                <button
                    type="button"
                    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="unlock"
                >
                    Unlock
                </button>
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';

const title = 'Screen Orientation API';
const docUrl =
    'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API';
const useCases = [];

export default {
    components: {
        ApiTemplateVue,
    },
    setup() {
        function fullScreenCheck() {
            if (document.fullscreenElement) return;
            return document.documentElement.requestFullscreen();
        }

        function updateDetails(lockButton) {
            const buttonOrientation = getOppositeOrientation();
            lockButton.textContent = `Lock to ${buttonOrientation}`;
        }

        function getOppositeOrientation() {
            const { type } = screen.orientation;
            return type.startsWith('portrait') ? 'landscape' : 'portrait';
        }

        async function rotate(lockButton) {
            try {
                await fullScreenCheck();
            } catch (err) {
                console.error(err);
            }

            const newOrientation = getOppositeOrientation();

            await screen.orientation.lock(newOrientation);

            updateDetails(lockButton);
        }

        function show() {
            const { type, angle } = screen.orientation;
            console.log(`Orientation type is ${type} & angle is ${angle}.`);
        }

        function unlock() {
            screen.orientation.unlock();
        }

        screen.orientation.addEventListener('change', () => {
            show();
            updateDetails(document.getElementById('button'));
        });
        return {
            rotate,
            unlock,
            title,
            docUrl,
            useCases,
        };
    },
    data: () => ({}),
    methods: {},
    mounted() {},
};
</script>

<style lang="scss" scoped></style>
