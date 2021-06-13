<template>
  <Header></Header>
  <Container>
    <ColumnLayout>
      <Column>
        <ListLayout>
          <Button @click="createGame" :isLoading="isLoading"
            >Create game</Button
          >
          <Card>
            <h1 class="countdown">{{ remaining }}</h1>
          </Card>
        </ListLayout>
      </Column>
      <Column>
        <ListLayout>
          <Input placeholder="Give a hint" @input="submitHint"></Input>
          <Button @click="openDoor" :isLoading="isLoading">Open door</Button>
        </ListLayout>
      </Column>
    </ColumnLayout>
    <Card class="mt-gap log-card">
      <div class="logs">
        <code class="code" v-for="(log, index) in logs" :key="index"
          ><span class="timestamp">[{{ log.timestamp }}]</span>
          {{ log.message }}</code
        >
      </div>
    </Card>
  </Container>
</template>

<style lang="scss" scoped>
.countdown {
  text-align: center;
}

.log-card {
  .logs {
    display: flex;
    flex-direction: column;

    .timestamp {
      color: #0096ff;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config/config";
import io from "socket.io-client";
import Header from "@/components/layout/Header.vue";
import Container from "@/components/layout/Container.vue";
import ColumnLayout from "@/components/layout/ColumnLayout.vue";
import ListLayout from "@/components/layout/ListLayout.vue";
import Column from "@/components/layout/Column.vue";
import Button from "@/components/base/Button.vue";
import Card from "@/components/layout/Card.vue";
import Input from "@/components/base/Input.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    Header,
    Container,
    ColumnLayout,
    ListLayout,
    Column,
    Button,
    Card,
    Input,
  },
  data() {
    return {
      isLoading: false,
      remaining: null as unknown,
      logs: [] as Array<any>,
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
    getSocket() {
      const socket = io(config.wss.url);
      this.remaining = "Currently there's no gaming running";

      socket.on("connect", () => {
        socket.on("remaining", ({ data }: any) => {
          this.remaining = new Date(data * 1000).toISOString().substr(11, 8); //format seconds to hh:mm:ss string
        });

        socket.on("logs", ({ data }: any) => {
          this.logs.push(data);
          this.logs.reverse();
        });
      });
    },
    async submitHint(message: string) {
      this.isLoading = true;

      const response = await fetch(`${config.server.url}/admin/hint`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: message,
        }),
      });

      if (response.ok) {
        this.isLoading = false;
        const json = await response.json();
        console.log(json);
      }
    },
    async openDoor() {
      console.log("eyy");
      await fetch(`${config.server.url}/admin/open`, {
        method: "POST",
      });
    },
  },
  created() {
    this.getSocket();
  },
});
</script>
