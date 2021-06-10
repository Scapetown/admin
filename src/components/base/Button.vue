<template>
  <div @click="(e) => $emit('click', e)">
    <button class="button">
      <slot v-if="!isLoading" />
      <Loading :loading="isLoading"></Loading>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.button {
  width: 100%;
  min-height: 50px;
  padding: 8px;

  border-radius: var(--border-radius);
  border: none;

  background-color: var(--primary);
  color: var(--text-secundair);

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: var(--box-shadow);
  }

  &:active {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Loading from "@/components/base/Loading.vue";

export default defineComponent({
  name: "Button",
  components: {
    Loading,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
