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
const useCases = [
    'debugger une application',
    'voir la trace du thread',
    `calculer le temps d'execution d'une opération`,
    'visualiser des structure de donnees complexes',
];

const exemples = [
    {
        code: `console.table(['bleu', 'blanc', 'rouge'])`,
        fn: () => console.table(['bleu', 'blanc', 'rouge']),
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
        code: `console.table({name: 'Vincent', age: '40', occupation: 'Dev'})`,
        fn: () =>
            console.table({ name: 'Vincent', age: '40', occupation: 'Dev' }),
    },
    {
        code: `console.count()`,
        fn: () => console.count(),
    },
    {
        code: `console.count('ma fonction')`,
        fn: () => console.count('ma fonction'),
    },
    {
        code: `console.countReset()`,
        fn: () => console.countReset(),
    },
    {
        code: `console.countReset('ma fonction')`,
        fn: () => console.countReset('ma fonction'),
    },
    {
        code: `console.debut('debug')`,
        fn: () => console.debug('debug'),
    },
    {
        code: `console.dir({a: 1, b: 2})`,
        fn: () => console.dir({ a: 1, b: 2 }),
    },
    {
        code: `console.dirxml(document)`,
        fn: () => console.dirxml(document),
    },
    {
        code: `console.error("I'm sorry, Dave. I'm afraid I can't do that.")`,
        fn: () => console.error("I'm sorry, Dave. I'm afraid I can't do that."),
    },
    {
        code: `console.info("Connection lost")`,
        fn: () => console.lost('Connection lost'),
    },
    {
        code: `console.time()`,
        fn: () => console.time(),
    },
    {
        code: `console.timeEnd()`,
        fn: () => console.timeEnd(),
    },
    {
        code: `console.time('action x')`,
        fn: () => console.time('action x'),
    },
    {
        code: `console.timeEnd('action x')`,
        fn: () => console.timeEnd('action x'),
    },
    {
        code: `const first = () => {
            second();
        };
        const second = () => {
            third();
        };
        const third = () => {
            fourth();
        };
        const fourth = () => {
            console.trace();
        };
        first();`,
        fn: () => {
            const first = () => {
                second();
            };
            const second = () => {
                third();
            };
            const third = () => {
                fourth();
            };
            const fourth = () => {
                console.trace();
            };
            first();
        },
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
};
</script>

<style lang="scss" scoped></style>
