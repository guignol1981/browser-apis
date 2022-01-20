<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
                <div>
                    <GoogleMap
                        api-key="AIzaSyAXDiSlaEOPnfKkPJ3oSwrJDMeh6MV3syk"
                        style="width: 100%; height: 500px"
                        :center="{ lat, lng }"
                        :zoom="15"
                    >
                        <Marker :options="{ position: { lat, lng } }" />
                    </GoogleMap>
                </div>
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';
import { reactive, toRefs } from '@vue/runtime-core';
import { GoogleMap, Marker } from 'vue3-google-map';

const title = 'Geolocation API';
const docUrl =
    'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API';
const useCases = [
    `Afficher les services à proximité d'un utilisateur`,
    `Calculer un trajet depuis la position de l'utilisateur`,
];

export default {
    components: {
        ApiTemplateVue,
        GoogleMap,
        Marker,
    },
    setup() {
        const center = reactive({ lat: 40.689247, lng: -74.044502 });
        const { lat, lng } = toRefs(center);

        navigator.geolocation.getCurrentPosition((res) => {
            center.lat = res.coords.latitude;
            center.lng = res.coords.longitude;
        });

        navigator.geolocation.watchPosition((res) => {
            center.lat = res.coords.latitude;
            center.lng = res.coords.longitude;
        });
        return {
            title,
            docUrl,
            useCases,
            lat,
            lng,
        };
    },
};
</script>

<style lang="scss" scoped></style>
