<template>
    <div class="tool">
        <div class="tool__top">
            <h1>{{title}}</h1>
            <button class="btn" @click="convert">{{buttonText}}</button>
        </div>
        <div class="row">
            <div class="col">
                <div class="tool__left slide-left">
                    <h3>{{rootTitle}}</h3>
                    <codemirror :options="cmOptions" v-model:value="irootCode" placeholder="" />
                </div>
            </div>
            <div class="col">
                <div class="tool__right slide-right">
                    <h3>{{convertTitle}}</h3>
                    <codemirror :options="cmOptions" :value="result" placeholder="" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from "vue"
import Codemirror from "codemirror-editor-vue3"
import "codemirror/addon/display/placeholder.js"
import "codemirror/mode/javascript/javascript.js"
import "codemirror/addon/display/placeholder.js"
import "codemirror/theme/dracula.css"

const props = defineProps({
    title: [String],
    buttonText: [String],
    rootTitle: [String],
    convertTitle: [String],
    result: [String],
    mode: [String],
})

const cmOptions = {
  mode: props.mode || 'text/javascript',
  theme: "dracula",
};

const irootCode = ref('')

const emits = defineEmits(['convert'])

const convert = () => {
    emits('convert', irootCode.value)
}
</script>
  
<style lang="scss">
@use '../../../assets/scss/abstracts/_variables.scss';

.tool {
    background-color: variables.$gray-700;
    color: variables.$white;
    min-height: calc(100vh - 148px);
}

.row {
    display: flex;
    width: 100%;

    .col {
        width: 50%;
        padding: 15px;
    }
}

.tool__top {
    padding: 15px;
    text-align: center;

    h1 {
        margin-bottom: 20px;
    }
}

.tool__left,
.tool__right {
    height: 100%;
    position: relative;
    background-color: variables.$dark;

    h3 {
        font-size: variables.$font-size-base;
        font-weight: normal;
        display: inline-block;
        padding: 1px;
        background: variables.$gray-700;
        background: linear-gradient(0deg, variables.$dark 50%, variables.$gray-700 50%);
        position: absolute;
        left: 14px;
        top: 0;
        transform: translateY(-50%);
        text-transform: uppercase;
    }
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 20px;
    background-color: variables.$dark;
    color: variables.$body-color;
    border-radius: 8px;

    &:hover {
        background-color: variables.$primary;
    }
}

.codemirror-container {
    width: 100%;
    padding: 15px 0 0;
    color: variables.$white;
    min-height: calc(100vh - 348px);
}

.CodeMirror-sizer>div {
    z-index: 9;
}
</style>
  