<template>
  <Transition name="bounce">
    <div v-if="isMounted" style="height: 100dvh">
      <router-link to="/home">
        <div class="flex absolute top-5 xl:px-10 px-5">
          <img
            class="w-10 h-10"
            src="@/assets/images/to-do-logo.png"
            alt="To Do Logo"
          />
        </div>
      </router-link>

      <div class="flex h-full">
        <div class="sm:w-1/2 w-full flex items-center xl:px-10 px-5">
          <div class="w-full">
            <h3 class="text-2xl text-gray-900 font-semibold mb-3"
              >Create Your Account</h3
            >
            <form>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your email</label
                >
                <input
                  type="email"
                  v-model="loginForm.email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your password</label
                >
                <input
                  type="password"
                  v-model="loginForm.password"
                  id="password"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Remember me</label
                >
              </div>
              <div class="my-3">
                <router-link to="/sign-up"
                  >Don't have an account?
                  <span class="text-sky-600 underline">Sign Up </span>
                  Here</router-link
                >
              </div>
              <button
                type="submit"
                class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/4 md:w-1/3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all"
                >Submit</button
              >
            </form>
          </div>
        </div>
        <div
          class="sm:block hidden w-1/2 bggreen-400 h-full py-10 xl:pr-0 pr-5"
        >
          <img
            class="xl:w-10/12 w-full h-full rounded-md"
            src="@/assets/images/login-todo-bg-2.jpg"
            alt="To Do List Bg"
          />
        </div>
        <!-- Blurry Bg for Mobiles -->
        <div class="img-bg"></div>
      </div>
    </div>
  </Transition>
  <button
    @click.prevent="goToHomeView"
    class="border bg-sky-300 text-white py-3 px-2"
  >
    Go to Home</button
  >
</template>
<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
const loginForm = reactive({
  email: "",
  password: "",
});
const router = useRouter();
const { setToken } = useAuthStore();
const isMounted = ref(false);
const goToHomeView = () => {
  setToken("ejzzaslakdslksdlsdksdksldksdsldsdlksdlksd.sasasas-sasassawsfdmdf");
  router.push("/home");
};
onMounted(() => {
  isMounted.value = true;
});
</script>
<style scoped>
@media only screen and (max-width: 576px) {
  .img-bg {
    background: url("../assets/images/login-todo-bg-2.jpg") no-repeat
      center/cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
}
.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-in 0.8s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
