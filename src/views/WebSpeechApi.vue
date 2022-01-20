<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
                <div>
                    <h2 class="text-2xl font-semibold text-gray-700">
                        Changer de couleur
                    </h2>
                    <div ref="square" class="h-32 w-32 bg-red-300"></div>
                    <h3 ref="hints" class="text-gray-700 text-xl"></h3>
                    <p
                        ref="diagnostic"
                        class="mt-2 text-blue-600 font-semibold"
                    ></p>
                    <button
                        type="button"
                        class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        @click="recognize"
                    >
                        Donner une commande
                    </button>
                </div>
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

const title = 'Web Speech API';
const docUrl =
    'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API';
const useCases = [
    `Naviguer dans un site avec la voix`,
    `Interagir avec un site avec la voix`,
];

export default {
    components: {
        ApiTemplateVue,
    },
    setup() {
        const square = ref(null);
        const hints = ref(null);
        const diagnostic = ref(null);

        const colors = [
            'aqua',
            'azure',
            'beige',
            'bisque',
            'black',
            'blue',
            'brown',
            'chocolate',
            'coral',
            'crimson',
            'cyan',
            'fuchsia',
            'ghostwhite',
            'gold',
            'goldenrod',
            'gray',
            'green',
            'indigo',
            'ivory',
            'khaki',
            'lavender',
            'lime',
            'linen',
            'magenta',
            'maroon',
            'moccasin',
            'navy',
            'olive',
            'orange',
            'orchid',
            'peru',
            'pink',
            'plum',
            'purple',
            'red',
            'salmon',
            'sienna',
            'silver',
            'snow',
            'tan',
            'teal',
            'thistle',
            'tomato',
            'turquoise',
            'violet',
            'white',
            'yellow',
        ];

        const grammar =
            '#JSGF V1.0; grammar colors; public <color> = ' +
            colors.join(' | ') +
            ' ;';

        let colorHTML = '';
        colors.forEach(function (v, i) {
            console.log(v, i);
            colorHTML +=
                '<span style="background-color:' + v + ';"> ' + v + ' </span>';
        });

        const SpeechRecognition =
            SpeechRecognition || window.webkitSpeechRecognition;
        const SpeechGrammarList =
            SpeechGrammarList || window.webkitSpeechGrammarList;
        const SpeechRecognitionEvent =
            SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

        const recognition = new SpeechRecognition();
        const speechRecognitionList = new SpeechGrammarList();

        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        const recognize = () => {
            recognition.start();
            console.log('Ready to receive a color command.');
        };

        recognition.onresult = function (event) {
            // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
            // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
            // It has a getter so it can be accessed like an array
            // The first [0] returns the SpeechRecognitionResult at the last position.
            // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
            // These also have getters so they can be accessed like arrays.
            // The second [0] returns the SpeechRecognitionAlternative at position 0.
            // We then return the transcript property of the SpeechRecognitionAlternative object
            const color = event.results[0][0].transcript;

            diagnostic.textContent = 'Result received: ' + color + '.';
            square.value.style.backgroundColor = color;

            console.log('Confidence: ' + event.results[0][0].confidence);
        };

        recognition.onspeechend = function () {
            console.debug('end');
            recognition.stop();
        };

        recognition.onnomatch = function () {
            console.debug('match');
            diagnostic.value.textContent = "I didn't recognise that color.";
        };

        recognition.onerror = function (event) {
            console.debug('error');
            diagnostic.textContent =
                'Error occurred in recognition: ' + event.error;
        };

        onMounted(() => {
            hints.value.innerHTML =
                'Tap/click then say a color to change the background color of the app. Try ' +
                colorHTML +
                '.';
        });
        return {
            title,
            docUrl,
            useCases,
            square,
            hints,
            diagnostic,
            recognize,
        };
    },
};
</script>

<style lang="scss" scoped></style>
