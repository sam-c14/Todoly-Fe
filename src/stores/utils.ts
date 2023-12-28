import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { PINIA_PERSIST_OPTIONS } from "@/helpers/constants";

export const useUtilsStore = defineStore(
  "utils",
  () => {
    const selectedMenuOption = ref<string>("");
    // const doubleCount = computed(() => count.value * 2);
    function setSelectedMenuOption(selectedMenuOptionVal: string) {
      selectedMenuOption.value = selectedMenuOptionVal;
    }

    return { selectedMenuOption, setSelectedMenuOption };
  },
  {
    persist: PINIA_PERSIST_OPTIONS,
  }
);
