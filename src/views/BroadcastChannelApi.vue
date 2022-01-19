<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
                <p class="p-2">{{ messageData }}</p>
                <button
                    type="button"
                    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="sendMessage"
                >
                    Send message
                </button>
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';
import { ref } from '@vue/reactivity';

const title = 'Console API';
const docUrl = 'https://developer.mozilla.org/en-US/docs/Web/API/Console_API';
const useCases = [];

const bc = new BroadcastChannel('test_channel');

export default {
    components: {
        ApiTemplateVue,
    },

    setup() {
        let messageData = ref('No message received');

        function sendMessage() {
            bc.postMessage('Hello other tab!');
        }

        bc.onmessage = (ev) => {
            console.log(ev);
            messageData.value = ev.data;
        };

        return {
            title,
            docUrl,
            useCases,
            sendMessage,
            messageData,
        };
    },
    mounted() {},
};
</script>

<style lang="scss" scoped></style>
