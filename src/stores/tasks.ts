import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { PINIA_PERSIST_OPTIONS } from "@/helpers/constants";
import firebaseApp from "@/firebase";
import { useAuthStore } from "@/stores/auth";
import { useToast } from "vue-toastification";

const { db, collection, doc, deleteDoc } = firebaseApp;

const toast = useToast();

type dateT = {
  nanoseconds: number;
  seconds: number;
};

export type T = {
  id: string;
  user: string;
  title: string;
  desc: string;
  timeCreated: any;
  status: string;
};

export const useTasksStore = defineStore(
  "tasks",
  () => {
    const tasks = ref<Array<T>>([]);
    // const doubleCount = computed(() => count.value * 2);
    function setTasks(task: T) {
      tasks.value.push(task);
    }
    async function removeTask(id: string) {
      const { userData } = useAuthStore();
      try {
        const taskDocRef = doc(
          collection(db, "tasks", userData?.localId, "tasks"),
          id
        );
        console.log(taskDocRef);
        const response = await deleteDoc(taskDocRef);
        console.log(response);
        tasks.value = tasks.value.filter((task) => task.id !== id);

        toast.success("Task successfully deleted", {
          timeout: 2000,
        });
      } catch (error) {
        console.log(error);
        toast.error(error as string);
      }
    }

    return { tasks, setTasks, removeTask };
  },
  {
    persist: PINIA_PERSIST_OPTIONS,
  }
);
