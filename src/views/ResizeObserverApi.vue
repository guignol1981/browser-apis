<template>
    <api-template-vue
        class="resize-observer"
        :title="title"
        :docUrl="docUrl"
        :useCases="useCases"
    >
        <template v-slot:examples>
            <p>Resize boxes</p>
            <div id="box1" class="box box--main" ref="box1">
                <h3>Box 1</h3>
                <div id="box2" class="box" ref="box2">
                    <h3>Box 2</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolore quos quod nemo error asperiores amet
                        exercitationem molestiae fugit, deleniti voluptate sunt.
                    </p>
                </div>
                <div id="box3" class="box" ref="box3">
                    <h3>Box 3</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolore quos quod nemo error asperiores amet
                        provident exercitationem molestiae fugit, deleniti
                        voluptate sunt repudiandae quas beatae repellendus
                        minima laudantium sequi rem.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolore quos quod nemo error asperiores amet.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>

            <h3>Dimension of Current Resized Items</h3>
            <ul v-for="(dimension, index) in dimensions" :key="index">
                <li>
                    <strong>Target ID: {{ dimension.targetElementId }}</strong>
                </li>
                <li>Width: {{ dimension.width }}</li>
                <li>Height: {{ dimension.height }}</li>
            </ul>
        </template>
    </api-template-vue>
</template>

<script>
import ApiTemplateVue from '@/components/ApiTemplate.vue';

const title = 'Resize Observer API';
const docUrl = 'https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/ResizeObserver';
const useCases = [];

export default {
    components: {
        ApiTemplateVue,
    },
    data: () => ({
        dimensions: [],
    }),
    mounted() {
        const resizeObserver = new ResizeObserver((entries) => {
            this.dimensions = entries.map((entry) => {
                console.log('entry', entry);
                return {
                    targetElementId: entry.target.id,
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                };
            });
        });

        resizeObserver.observe(this.$refs.box1);
        resizeObserver.observe(this.$refs.box2);
        resizeObserver.observe(this.$refs.box3);
    },
    setup() {
        return {
            title,
            docUrl,
            useCases,
        };
    },
};
</script>

<style lang="scss" scoped>
h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 32px;
}

ul {
    margin-top: 16px;
}

p {
    margin-top: 12px;
}

#box1,
#box2 {
    width: 80%;
}

.resize-observer {
    min-height: 1600px;
}

.box {
    width: auto;
    resize: both;
    overflow: auto;
    padding: 32px;
    margin-top: 16px;
    max-width: 100%;
    background: rgb(230, 230, 230);
    color: #000;

    &--main {
        background: rgb(100, 117, 212);
        resize: horizontal;
        color: #fff;
    }

    > :first-child {
        margin-top: 0;
    }
}
</style>
