<template>
  <div :class="classes" :style="styleObj">
    <div :class="`${CLASS_PREFIX}autocomplete__append`">
      <slot name="icon" v-if="hasSlot('append-icon')" />
      <i v-else class="material-icons">search</i>
    </div>
    <div v-if="props.label" :class="`${CLASS_PREFIX}autocomplete__label`">{{ props.label }}</div>
    <div :class="`${CLASS_PREFIX}autocomplete__form`">
      <input type="text" :placeholder="props.placeholder" :class="`${CLASS_PREFIX}autocomplete__input`" v-model="search"
        @input="handleInput" @focus="isDropdownVisible = true" @blur="onBlur" />

      <ul :class="`${CLASS_PREFIX}autocomplete__dropdown ${isDropdownVisible ? 'open' : ''}`">
        <li :class="`${CLASS_PREFIX}autocomplete__item`" v-for="(item, index) in filteredItems" :key="index"
          @click="selectItem(item)">{{ item.text }}</li>
      </ul>

      <div :class="`${CLASS_PREFIX}autocomplete__clear`" @click="clear">
        <slot name="icon" v-if="hasSlot('clear-icon')" />
        <i v-else class="material-icons">close</i>
      </div>

      <!-- <div :class="`${CLASS_PREFIX}autocomplete__prepend`">
        <slot name="icon" v-if="hasSlot('prepend-icon')" />
        <i v-else class="material-icons">expand_less_icon</i>
      </div> -->
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed, ref, useSlots } from 'vue'
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { accentedToLowercase } from '@/utils/helpers';

defineOptions({ name: `${PREFIX}Autocomplete` })

interface iAutocompleteItem {
  value: String;
  text: String;
}

type variantType = 'outlined' | 'underlined' | 'solo' | 'solo-filled' | 'solo-inverted'

const props = defineProps({
  items: {
    default: Array as () => iAutocompleteItem[]
  },
  label: [String],
  placeholder: [String],
  width: [String, Number],
  rounded: [Boolean],
  chips: [Boolean],
  multiple: [Boolean],
  variant: [String as () => variantType],
})

const slots = useSlots()
const hasSlot = (name: string) => {
  return !!slots[name]
}

const classes = computed(() => ({
  [`${CLASS_PREFIX}autocomplete`]: true,
  'chips': props.chips,
  'multiple': props.multiple,
  [props.variant as string]: props.variant,
}))

const styleObj = computed(() => {
  const style: any = {}

  return style
})

const search = ref('');
const isDropdownVisible = ref(false);
const selectedItem = ref(null);
const filteredItems = ref(props.items);

const handleInput = () => {
  filteredItems.value = props.items.filter((item: any) =>
    accentedToLowercase(item.text).includes(accentedToLowercase(search.value))
  );
  isDropdownVisible.value = true;
};

const selectItem = (item: any) => {
  selectedItem.value = item;
  search.value = item.text;
  isDropdownVisible.value = false;
};

const onBlur = () => {
  // isDropdownVisible.value = false;
};

const clear = () => {
  selectedItem.value = null;
  search.value = '';
  isDropdownVisible.value = false;
};
</script>

<style lang="scss" scoped>
@import './Autocomplete.scss';
</style>
