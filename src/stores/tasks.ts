import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { PINIA_PERSIST_OPTIONS } from "@/helpers/constants";

export type T = {
  id: string;
  title: string;
  desc: string;
};

export const useTasksStore = defineStore(
  "tasks",
  () => {
    const tasks = ref<Array<T>>([]);
    // const doubleCount = computed(() => count.value * 2);
    function setTasks(task: T) {
      tasks.value.push(task);
    }
    function removeTasks(id: string) {
      tasks.value = tasks.value.filter((task) => task.id !== id);
    }

    return { tasks, setTasks, removeTasks };
  },
  {
    persist: PINIA_PERSIST_OPTIONS,
  }
);
