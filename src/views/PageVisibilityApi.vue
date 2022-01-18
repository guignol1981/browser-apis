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
                        id="videoElement"
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
        return {
            title,
            docUrl,
            useCases,
        };
    },
    mounted() {
        // Set the name of the hidden property and the change event for visibility
        var hidden, visibilityChange;
        if (typeof document.hidden !== 'undefined') {
            // Opera 12.10 and Firefox 18 and later support
            hidden = 'hidden';
            visibilityChange = 'visibilitychange';
        } else if (typeof document.msHidden !== 'undefined') {
            hidden = 'msHidden';
            visibilityChange = 'msvisibilitychange';
        } else if (typeof document.webkitHidden !== 'undefined') {
            hidden = 'webkitHidden';
            visibilityChange = 'webkitvisibilitychange';
        }

        var videoElement = document.getElementById('videoElement');

        // If the page is hidden, pause the video;
        // if the page is shown, play the video
        function handleVisibilityChange() {
            if (document[hidden]) {
                videoElement.pause();
            } else {
                videoElement.play();
            }
        }

        // Warn if the browser doesn't support addEventListener or the Page Visibility API
        if (
            typeof document.addEventListener === 'undefined' ||
            hidden === undefined
        ) {
            console.log(
                'This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.'
            );
        } else {
            // Handle page visibility change
            document.addEventListener(
                visibilityChange,
                handleVisibilityChange,
                false
            );

            // When the video pauses, set the title.
            // This shows the paused
            videoElement.addEventListener(
                'pause',
                function () {
                    document.title = 'Paused';
                },
                false
            );

            // When the video plays, set the title.
            videoElement.addEventListener(
                'play',
                function () {
                    document.title = 'Playing';
                },
                false
            );
        }
    },
};
</script>

<style lang="scss" scoped></style>
