<template>
  <div class="wrapper">
    <slot class="content" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap);
}
</style>
