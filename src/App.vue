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
    <button type="button" data-twe-ripple-init data-twe-ripple-color="light"
      class="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">Button</button>
  </div>
</template>
<style scoped></style>
