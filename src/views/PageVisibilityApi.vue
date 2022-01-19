<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
                <div>
                    <h2 class="text-2xl font-semibold text-gray-900">
                        Toggle play pause on video
                    </h2>
                    <video
                        ref="videoElement"
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        controls
                    ></video>
                </div>
                <div class="mt-12">
                    <h2 class="text-2xl font-semibold text-gray-900">
                        Start stop Interval
                    </h2>
                    <div ref="intervalElement">
                        {{ count }}
                    </div>
                </div>
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';
import { ref } from '@vue/reactivity';
import { onMounted, onUnmounted } from '@vue/runtime-core';

const title = 'Page Visibility API';
const docUrl =
    'https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API';
const useCases = [
    `Un site a un carrousel d'images qui ne devrait pas passer à
                    la diapositive suivante à moins que l'utilisateur ne
                    visualise la page`,
    ` Une application affichant un tableau de bord d'informations
                    ne souhaite pas interroger le serveur pour les mises à jour
                    lorsque la page n'est pas visible`,
    `Une page souhaite détecter le moment où elle est pré-rendu
                    afin de pouvoir conserver un nombre précis de pages vues`,
    ` Un site souhaite désactiver les sons lorsqu'un appareil est
                    en mode veille (l'utilisateur appuie sur le bouton
                    d'alimentation pour éteindre l'écran)`,
];

export default {
    components: {
        ApiTemplateVue,
    },
    setup() {
        const videoElement = ref(null);
        const count = ref(0);
        const hidden = 'hidden';
        const visibilityChange = 'visibilitychange';
        let interval;

        const handleVisibilityChange = () => {
            if (document[hidden]) {
                videoElement.value.pause();
                clearInterval(interval);
            } else {
                videoElement.value.play();
                interval = setInterval(() => {
                    count.value++;
                }, 1000);
            }
        };

        onMounted(() => {
            videoElement.value.addEventListener(
                'pause',
                function () {
                    document.title = 'Paused';
                },
                false
            );

            videoElement.value.addEventListener(
                'play',
                function () {
                    document.title = 'Playing';
                },
                false
            );

            document.addEventListener(
                visibilityChange,
                handleVisibilityChange,
                false
            );
        });

        onUnmounted(() => {
            document.removeEventListener(
                visibilityChange,
                handleVisibilityChange
            );
        });

        return {
            title,
            docUrl,
            useCases,
            videoElement,
            count,
        };
    },
};
</script>

<style lang="scss" scoped></style>
