<template>
  <Container></Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/layout/Container.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    Container,
  },
});
</script>
