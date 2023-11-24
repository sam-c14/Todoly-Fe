<template>
  <div class="py-5 md:pt-10 lg:px-24 md:px-10 px-5">
    <div class="flex">
      <img
        class="w-24 h-24"
        src="@/assets/images/to-do-logo.png"
        alt="To Do Logo"
      />
    </div>
    <div class="flex md:flex-nowrap flex-wrap-reverse justify-between">
      <div class="flex flex-wrap w-full md:w-1/2 items-end"
        ><div>
          <h1 class="font-semibold md:text-4xl text-3xl"
            >Hi, Welcome To ToDo-Ly</h1
          >
          <p class="lg:text-2xl md:text-lg my-4"
            >We love that you chose to use our app, Click the button below to
            get Started</p
          >
          <button
            @click="routeToLogin"
            class="bg-sky-500 text-white py-3 font-semibold border border-sky-500 transition-all hover:text-sky-500 hover:bg-white px-6 rounded-full"
            >Go To App</button
          >
        </div>
      </div>
      <div class="w-full md:w-1/2 flex justify-center">
        <img src="@/assets/images/welcome-logo.jpg" alt="To Do List" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const routeToLogin = () => {
  router.push("/login");
};
</script>
<style lang=""></style>
