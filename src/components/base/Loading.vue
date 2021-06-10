<template>
  <div class="v-spinner" v-show="loading">
    <div
      class="v-pulse v-pulse1"
      v-bind:style="[spinnerStyle, spinnerDelay1]"
    ></div>
    <div
      class="v-pulse v-pulse2"
      v-bind:style="[spinnerStyle, spinnerDelay2]"
    ></div>
    <div
      class="v-pulse v-pulse3"
      v-bind:style="[spinnerStyle, spinnerDelay3]"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
  props: {
    color: String,
    loading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      spinnerStyle: {
        backgroundColor: this.color || "#fff",
        width: "12px",
        height: "12px",
        margin: "2px",
        borderRadius: "100%",
        display: "inline-block",
        animationName: "v-pulseStretchDelay",
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationTimingFunction: "cubic-bezier(.2,.68,.18,1.08)",
        animationFillMode: "both",
      },
      spinnerDelay1: {
        animationDelay: "0.12s",
      },
      spinnerDelay2: {
        animationDelay: "0.24s",
      },
      spinnerDelay3: {
        animationDelay: "0.36s",
      },
    };
  },
});
</script>

<style>
@-webkit-keyframes v-pulseStretchDelay {
  0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
}
@keyframes v-pulseStretchDelay {
  0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
}
</style>
