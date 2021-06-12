<template>
  <div class="list">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListLayout",
});
</script>
