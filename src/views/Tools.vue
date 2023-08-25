<template>
  <Tool 
    title="Less to CSS converter" 
    buttonText="Compile" 
    rootTitle="Less code" 
    convertTitle="Compiled CSS"
    :result="compiledCss"
    @convert="compileLess"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import less from 'less'
import Tool from '../components/pages/tool/Tool.vue'

const compiledCss = ref('')

const compileLess = (e: any) => {
  less.render(e, (error: any, result: any) => {
    if (!error) {
      compiledCss.value = result.css
    } else {
      compiledCss.value = `Error compiling Less: ${error.message}`
    }
  });
};
</script>
