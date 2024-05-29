<script setup lang="ts">
import { onMounted } from "vue";
import {
  Ripple,
  initTWE,
} from "tw-elements";


onMounted(() => {
  // NOTE: mount後でないと下記は発火できない
  // 参考: https://github.com/mdbootstrap/TW-Elements/issues/1935
  initTWE({ Ripple });
})
</script>
<template>
  <div class="w-full h-screen flex justify-center items-center">
    <button type="button" data-twe-ripple-init data-twe-ripple-color="#ccc"
      class="rounded border px-7 pb-2.5 pt-3">Button</button>
  </div>
</template>
<style scoped></style>
