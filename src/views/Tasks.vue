<template>
  <div class="pr-24 task-container">
    <div
      class="flex w-full mt-10 items-center xl:pr-14 lg:pr-14 md:pr-14 pr-2 justify-between xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap"
    >
      <div class="xl:w-auto lg:w-auto md:w-auto w-full">
        <h3 class="font-semibold text-2xl">My Tasks</h3>
        <p class="text-gray-500 pt-2 flex items-center"
          ><v-icon
            name="bi-check2-circle"
            class="text-gray-500"
            scale="1"
          ></v-icon>
          <span class="ml-2 -mt-1"
            >{{ tasksStore.tasks.length + items.length }} task</span
          ></p
        >
      </div>
      <!-- <div
        class="flex gap-x-2 pl-0 sm:mt-0 mt-2 items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white p-2 rounded-sm xl:w-auto lg:w-auto md:w-auto w-full"
      >
        <v-icon
          name="ri-settings-3-line"
          class="text-gray-500"
          scale="1.3"
        ></v-icon>
        <p>Settings</p>
      </div> -->
    </div>
    <!-- Board Component -->
    <div class="mt-4">
      <div class="mt-2 flex xl:w-3/4 lg:3/4 md:3/4 justify-between">
        <p class="font-semibold text-end mr-5 xl:w-1/3 lg:w-1/3 md:w-1/3 w-full"
          >Overdue</p
        >
        <p class="font-semibold text-end xl:w-1/3 lg:w-1/3 md:w-1/3 w-full"
          >Today</p
        >
        <p
          class="font-semibold opacity-0 text-end xl:w-1/3 lg:w-1/3 md:w-1/3 md:block hidden w-full"
          >Overdue</p
        >
      </div>
      <!-- Draggable -->
      <div
        ref="tasksDiv"
        class="flex max-h-screen lg:w-auto md:w-full lg:overflow-hidden min-w-custom gap-2"
      >
        <div class="draggable-list xl:w-1/4 lg:w-1/2 md:w-full w-1/2">
          <VueDraggableNext
            :group="{ name: 'overdue', put: false }"
            v-model="items"
          >
            <transition-group>
              <div
                v-for="item in items"
                :key="item.id"
                class="list-items shadow-lg flex items-center gap-x-4 border"
              >
                <span><input type="radio" :name="item.title" /></span>
                <span>{{ item.title }}</span>
              </div>
            </transition-group>
          </VueDraggableNext>
        </div>
        <div
          v-if="tasksStore.tasks.length >= 1"
          class="draggable-list xl:w-1/4 lg:w-1/2 md:w-full w-1/2"
        >
          <VueDraggableNext
            :sort="true"
            @change="log"
            :group="{ put: true }"
            v-model="tasksStore.tasks"
          >
            <transition-group>
              <div
                v-for="item in tasksStore.tasks"
                :key="item.id"
                class="list-items shadow-lg flex items-center gap-x-4 border"
              >
                <p class="text-xl relative flex gap-2 items-center">
                  <span class="inline-block -mt-2"
                    ><input type="radio" :name="item.title" /></span
                  ><span>{{ item.title }}</span>
                  <span
                    @click="tasksStore.removeTasks(item.id)"
                    class="absolute -right-2 -top-2"
                    ><v-icon name="oi-kebab-horizontal" scale="1.5" /></span
                ></p>
                <p>{{ item.desc?.slice(0, 30) }}...</p>
                <p class="mt-1"
                  ><span class="inline-block mt-1"
                    ><v-icon name="bi-list-task" scale="1" /></span
                  ><span class="ml-2 text-sm">Task</span></p
                >
              </div>
            </transition-group>
          </VueDraggableNext>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
// import Draggable from "vue3-draggable";
import { VueDraggableNext } from "vue-draggable-next";
import { useTasksStore } from "@/stores/tasks";
import firebaseApp from "@/firebase";

const log = (event: any) => {
  // console.log(event);
};

const items = ref([
  {
    id: 1,
    title: "item 1",
  },
  {
    id: 2,
    title: "item 2",
  },
  {
    id: 3,
    title: "item 3",
  },
  {
    id: 4,
    title: "item 4",
  },
]);

// const tasksDiv = ref();
const currentTask = ref([]);
const tasksStore = useTasksStore();

watchEffect(() => {
  console.log(tasksStore.tasks);
});

onMounted(async () => {
  // Use nextTick to ensure the DOM is updated
  // await nextTick();
  // tasksDiv.value.scrollLeft = 120;
  // console.log(tasksDiv.value.scrollLeft, "a");
  console.log(firebaseApp.auth);
});
</script>

<style scoped>
.draggable-list {
  max-height: 80vh;
  /* overflow-y: scroll !important; */
  /* width: 25%; */
  padding: 10px;
}
.draggable-list::-webkit-scrollbar {
  display: none;
}
.list-items {
  margin-block: 5px;
  padding: 20px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  width: 100%;
  height: 25%;
  display: inline-block;
}

.task-container::-webkit-scrollbar {
  display: none !important;
  /* background: green; */
}

@media screen and (max-width: 992px) {
  .min-w-custom {
    min-width: 600px;
  }
}
</style>
