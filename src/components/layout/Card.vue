<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  min-height: 50px;
  border-radius: var(--border-radius);
  background-color: var(--secundair);
  padding: 25px;
}
</style>
