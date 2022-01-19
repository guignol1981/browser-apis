<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
                <div>
                    <h3>
                        La vidéo se met sur pause lorsque l'utilisateur change
                        d'onglet et reprend lorsqu'il revient
                    </h3>
                    <video
                        ref="videoElement"
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        controls
                    >
                        Le navigateur ne supporte pas les tags Video
                    </video>
                </div>
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

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

        onMounted(() => {
            const hidden = 'hidden';
            const visibilityChange = 'visibilitychange';

            function handleVisibilityChange() {
                if (document[hidden]) {
                    videoElement.value.pause();
                } else {
                    videoElement.value.play();
                }
            }

            document.addEventListener(
                visibilityChange,
                handleVisibilityChange,
                false
            );

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
        });

        return {
            title,
            docUrl,
            useCases,
            videoElement,
        };
    },
};
</script>

<style lang="scss" scoped></style>
