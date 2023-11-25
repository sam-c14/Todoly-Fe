<template>
  <!-- Main modal -->
  <div
    v-if="showTaskModal"
    @click="handleRemoveTaskModal"
    class="bg-gray-200 bg-opacity-30 flex justify-center z-10 w-full h-screen fixed"
  >
    <div id="crud-modal" class="fixed flex justify-center w-full top-1/35 z-30">
      <div class="relative p-4 w-2/5 max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center flex-wrap justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <input
              type="text"
              v-model="taskPayload.taskName"
              class="w-full border-0 outline-none focus:border-0 focus:outline-white focus:ring-0 text-xl font-semibold"
              placeholder="Task Name"
            />
            <input
              type="text"
              v-model="taskPayload.taskDescription"
              class="w-full py-1 border-0 outline-none focus:border-0 focus:outline-white focus:ring-0 text-lg"
              placeholder="Description"
            />
            <div class="my-3 flex gap-3">
              <button
                type="button"
                class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 jusitify-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 flex gap-2"
              >
                <span><v-icon name="bi-calendar2" scale="1" /></span>
                <span>Due Date</span>
              </button>
              <button
                type="button"
                class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 jusitify-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 flex gap-2"
              >
                <span><v-icon name="bi-flag" scale="1" /></span>
                <span>Priority</span>
              </button>
              <button
                type="button"
                class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 jusitify-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 flex gap-2"
              >
                <span><v-icon name="bi-clock" scale="1" /></span>
                <span>Reminder</span>
              </button>
            </div>
          </div>
          <!-- Modal body -->
          <form class="p-4 md:p-5">
            <div class="flex gap-2 justify-end">
              <button
                type="submit"
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Task
              </button>
              <button
                @click.prevent="removeTaskModal"
                class="text-black inline-flex items-center bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Cancel</button
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Remove Task Modal Prompt -->
  <div
    v-if="showTaskModalRemovalPrompt"
    class="bg-gray-200 bg-opacity-20 fixed z-50 w-full h-screen"
  >
    <div id="popup-modal" tabindex="-1" class="z-50 fixed left-1/3 top-1/35">
      <div class="relative p-4 flex justify-center w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Discard Task</span>
            </button> -->
          <div class="p-4 md:p-5 text-center">
            <svg
              class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3
              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
              >Are you sure you want to discard your current task?</h3
            >
            <button
              data-modal-hide="popup-modal"
              type="button"
              @click="removeTaskModal"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              @click="showTaskModalRemovalPrompt = false"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >No, cancel</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, reactive, ref } from "vue";

const taskPayload = reactive({
  taskName: "",
  taskDescription: "",
});
const props = defineProps({
  showTaskModal: {
    type: Boolean,
  },
  setShowTaskModal: {
    type: Function,
  },
});
const showTaskModalRemovalPrompt = ref(false);
const handleRemoveTaskModal = (e: any) => {
  //   console.log(e.target, e.currentTarget);
  if (e.target === e.currentTarget || e.target.id === "crud-modal") {
    if (taskPayload.taskDescription || taskPayload.taskName) {
      showTaskModalRemovalPrompt.value = true;
    } else {
      props.setShowTaskModal();
    }
  }
};

const removeTaskModal = () => {
  showTaskModalRemovalPrompt.value = false;
  props.setShowTaskModal();
  taskPayload.taskDescription = "";
  taskPayload.taskName = "";
};
</script>
<style scoped>
/* input:focus {
  outline: pink !important;
  border: green !important';
} */
</style>
