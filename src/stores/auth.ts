import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { PINIA_PERSIST_OPTIONS } from "@/helpers/constants";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const token = ref<string>("");
    // const doubleCount = computed(() => count.value * 2);
    function setToken(tokenVal: string) {
      token.value = tokenVal;
    }

    return { token, setToken };
  },
  {
    persist: PINIA_PERSIST_OPTIONS,
  }
);
