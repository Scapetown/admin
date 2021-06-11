<template>
  <div class="header">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: calc(50px + 10px);
  padding: var(--gap-small) var(--gap-small) 0 var(--gap-small);
  margin-bottom: var(--gap);
}
</style>
