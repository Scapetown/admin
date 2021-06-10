<template>
  <Container>
    <ColumnLayout>
      <Column>
        <Button @click="createGame" :isLoading="isLoading">Create game</Button>
      </Column>
      <Column>
        <Card>
          {{ remaining }}
        </Card>
      </Column>
    </ColumnLayout>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config/config";
import io from "socket.io-client";
import Container from "@/components/layout/Container.vue";
import ColumnLayout from "@/components/layout/ColumnLayout.vue";
import Column from "@/components/layout/Column.vue";
import Button from "@/components/base/Button.vue";
import Card from "@/components/layout/Card.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    Container,
    ColumnLayout,
    Column,
    Button,
    Card,
  },
  data() {
    return {
      isLoading: false,
      remaining: null as unknown,
    };
  },
  methods: {
    async createGame() {
      this.isLoading = true;
      const response = await fetch(`${config.server.url}/admin/game`, {
        method: "POST",
      });

      if (response.ok) {
        this.isLoading = false;
        const json = await response.json();
        console.log(json);
      }
    },
    getRemaining() {
      const socket = io(config.wss.url);
      this.remaining = "Currently there's no gaming running";

      socket.on("connect", () => {
        socket.on("remaining", ({ data }: any) => {
          this.remaining = new Date(data * 1000).toISOString().substr(11, 8); //format seconds to hh:mm:ss string
        });
      });
    },
  },
  created() {
    this.getRemaining();
  },
});
</script>
