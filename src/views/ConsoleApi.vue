<template>
    <div>
        <api-template-vue :title="title" :docUrl="docUrl" :useCases="useCases">
            <template v-slot:examples>
                <ul role="list" class="divide-y divide-gray-200">
                    <li
                        class="py-4 flex"
                        v-for="(exemple, i) in exemples"
                        :key="`${i}-exemple`"
                    >
                        <div class="ml-3">
                            <pre class="text-sm font-medium text-gray-900">{{
                                exemple.code
                            }}</pre>
                            <button
                                type="button"
                                class="mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                @click="exemple.fn"
                            >
                                Executer
                            </button>
                        </div>
                    </li>
                </ul>
            </template>
        </api-template-vue>
    </div>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';

const title = 'Console API';
const docUrl = 'https://developer.mozilla.org/en-US/docs/Web/API/Console_API';
const useCases = [];

const exemples = [
    { code: `console.table([1, 2, 3])`, fn: () => console.table([1, 2, 3]) },
    {
        code: `console.table([
            {name: 'Vincent', age: '40', occupation: 'Dev'},
            { name: 'David', age: '37', occupation: 'Cuisinier' }
        ])`,
        fn: () =>
            console.table([
                { name: 'Vincent', age: '40', occupation: 'Dev' },
                { name: 'David', age: '37', occupation: 'Cuisinier' },
            ]),
    },
    {
        code: `console.table([
            {name: 'Vincent', age: '40', occupation: 'Dev'},
            { name: 'David', age: '37', occupation: 'Cuisinier' }
        ])`,
        fn: () =>
            console.table([
                { name: 'Vincent', age: '40', occupation: 'Dev' },
                { name: 'David', age: '37', occupation: 'Cuisinier' },
            ]),
    },
    {
        code: `console.count()`,
        fn: () => console.count(),
    },
    {
        code: `console.count('ma fonction')`,
        fn: () => console.count('ma fonction'),
    },
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
            exemples,
        };
    },
    mounted() {},
};
</script>

<style lang="scss" scoped></style>
