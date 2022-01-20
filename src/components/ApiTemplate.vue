<template>
    <div>
        <h2 class="text-2xl font-semibold text-gray-900">
            {{ title }}
        </h2>
        <div class="text-blue-800 mt-3 underline">
            <a :href="docUrl" target="_blank">documentation</a>
        </div>
        <div class="mt-12">
            <h2 class="text-xl font-semibold text-gray-900">
                Cas d'utilisation
            </h2>
            <ul role="list" class="divide-y divide-gray-200">
                <li
                    v-for="(useCase, i) in useCases"
                    :key="`${i}-useCase`"
                    class="py-4 flex"
                >
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">
                            {{ useCase }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mt-12">
            <h2 class="text-xl font-semibold text-gray-900">Exemples</h2>
            <div class="mt-3">
                <slot name="examples" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: { type: String },
        docUrl: { type: String },
        useCases: { type: Array },
    },
    setup() {},
};
</script>
