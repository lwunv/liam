<template>
    <div class="storyblock">
        <div>
            <slot />
        </div>
        <button v-if="props.template" @click="toggleCodeVisibility">Show Code</button>
        <pre v-if="showCode">
            <code>{{ props.template }}</code>
        </pre>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showCode = ref(false);

const toggleCodeVisibility = () => {
    showCode.value = !showCode.value;
};

const props = defineProps({
    template: [String]
})
</script>

<style lang="scss" scoped>
button {
    color: white;
    background-color: #1ea7fd;
    font-size: 14px;
    padding: 9px 20px;
    border-radius: 42px;
    font-weight: bold;
    border: 1px solid #1ea7fd;
    cursor: pointer;
    margin-top: 10px;
}
.storyblock {
    padding: 15px;
    border: 1px solid #ddd;
    margin-bottom: 15px;
    border-radius: 4px;
    overflow: hidden;
    background: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.10) 0 1px 3px 0;
}
pre {
    margin: 15px -15px -15px;
    background: rgba(0, 0, 0, 0.85);
    color: #A8FF60;
    font-family: monospace;
    font-size: 13px;
    font-family: ui-monospace,Menlo,Monaco,"Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Droid Sans Mono","Courier New",monospace;
    -webkit-font-smoothing: antialiased;
}
</style>
  