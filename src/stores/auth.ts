import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { PINIA_PERSIST_OPTIONS } from "@/helpers/constants";
import { useRouter } from "vue-router";
import { useTasksStore } from "@/stores/tasks";
import { useUtilsStore } from "./utils";

const router = useRouter();

export const useAuthStore = defineStore(
  "auth",
  () => {
    const token = ref<string>("");
    // const doubleCount = computed(() => count.value * 2);
    const userData = ref<any>({});

    function setToken(tokenVal: string) {
      token.value = tokenVal;
    }
    function setUserData(data: any) {
      userData.value = data;
    }

    function logout() {
      token.value = "";
      userData.value = {};
      const taskStore = useTasksStore();
      taskStore.$reset();
      useUtilsStore().$reset();

      router.push("/");
    }

    return { token, setToken, userData, setUserData, logout };
  },
  {
    persist: PINIA_PERSIST_OPTIONS,
  }
);
