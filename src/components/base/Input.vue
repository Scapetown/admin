<template>
  <div v-if="blur">
    <input
      class="tap-input"
      :value="value"
      :type="type"
      @blur="blur"
      @change="$emit('input', $event.target.value)"
      :placeholder="`${placeholder}`"
    />
  </div>
  <div v-if="!blur">
    <input
      class="tap-input"
      :value="value"
      :type="type"
      @change="$emit('input', $event.target.value)"
      :placeholder="`${placeholder}`"
      @keyup.enter="$emit('enter', $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    placeholder: String,
    type: String,
    blur: Function,
    value: String,
  },
});
</script>

<style lang="scss" scoped>
.tap-input {
  width: 100%;
  padding: 8px 20px;
  min-height: 50px;
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--secundair);
  color: var(--text);
  transition: all 0.2s ease-in-out;

  &:active {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
}
</style>
