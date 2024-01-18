import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { PINIA_PERSIST_OPTIONS } from "@/helpers/constants";

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

    return { token, setToken, userData, setUserData };
  },
  {
    persist: PINIA_PERSIST_OPTIONS,
  }
);
