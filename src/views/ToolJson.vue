<template>
  <Tool 
    title="JSON to Object Converter" 
    buttonText="Convert" 
    rootTitle="JSON code" 
    convertTitle="Converted object"
    :result="convertedObject"
    @convert="convertToJson"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tool from '../components/pages/tool/Tool.vue'

const convertedObject = ref('');

const convertToJson = (val: any) => {
  if (!val) return;
  try {
    const jsonObject = JSON.parse(val);
    convertedObject.value = JSON.stringify(jsonObject, null, 2);
  } catch (error) {
    convertedObject.value = 'Invalid JSON data';
  }
};
</script>
