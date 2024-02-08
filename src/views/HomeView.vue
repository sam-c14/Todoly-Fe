<template>
  <div> Home View</div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
// import firebaseApp from "@/firebase";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
onMounted(() => {
  // console.log(firebaseApp.db, "d");
  if (route.fullPath === "/home" && !authStore.token) router.push("welcome");
});
</script>
<style lang=""></style>
