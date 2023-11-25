<template>
  <div style="height: 100dvh" class="bg-red-500">
    <div class="flex-shrink-0 h-full w-72 z-0 bg-white border-r">
      <div class="flex items-center justify-between h-16 user-details px-4">
        <div
          class="flex justify-center gap-1 items-center hover:bg-sky-50 p-2 px-4 rounded-md"
        >
          <div
            class="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
          >
            <span class="font-medium text-gray-600 dark:text-gray-300">S</span>
          </div>
          <div class="font-semibold text-xl"><h3>Sam</h3></div>
        </div>
        <div class="flex gap-2">
          <div
            class="hover:bg-sky-50 rounded-md p-2"
            title="Open Notifications"
          >
            <v-icon name="bi-bell" scale="1.5" />
          </div>
          <div class="hover:bg-sky-50 rounded-md p-2" title="Toggle Sidebar">
            <v-icon
              @click.prevent="props.setIsSidebarHidden"
              name="bi-box-arrow-left"
              scale="1.5"
            />
          </div>
        </div>
      </div>
      <nav class="flex flex-col mt-4 px-2">
        <a
          href="#"
          @click.prevent="props.setDisplayTaskModal"
          class="px-4 py-2 text-gray-600 hover:bg-sky-50 flex gap-2 items-center rounded-md transition duration-300"
        >
          <span
            class="w-6 h-6 flex justify-center items-center rounded-full p-1 bg-sky-500"
          >
            <v-icon name="pr-plus" class="text-white" scale="1" />
          </span>
          <span class="font-semibold text-lg text-sky-500">Add Task</span>
        </a>
        <a
          href="#"
          class="px-4 py-2 text-gray-600 hover:bg-sky-50 flex items-center gap-2 rounded-md transition duration-300"
        >
          <span
            ><v-icon name="pr-search" class="text-black" scale="1.1"
          /></span>
          <span class="text-lg">Search</span>
        </a>
        <a
          href="#"
          class="px-4 py-2 text-gray-600 hover:bg-sky-50 flex items-center gap-2 rounded-md transition duration-300"
        >
          <span>
            <v-icon name="fa-tasks" class="text-black" scale="1.1" />
          </span>
          <span class="text-lg">Tasks</span>
        </a>
        <a
          href="#"
          class="px-4 py-2 text-gray-600 hover:bg-sky-50 flex items-center gap-2 rounded-md transition duration-300"
          ><span>
            <v-icon name="bi-calendar-event" class="text-black" scale="1.1" />
          </span>
          <span class="text-lg">Calendar</span>
        </a>
        <a
          href="#"
          class="px-4 py-2 text-gray-600 hover:bg-sky-50 flex items-center gap-2 rounded-md transition duration-300"
        >
          <span>
            <v-icon name="ri-dashboard-fill" class="text-black" scale="1.1" />
          </span>
          <span class="text-lg"> Filters and Labels </span>
        </a>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
import MenuIcon from "vue-material-design-icons/Menu.vue";
import { FaBars } from "oh-vue-icons/icons";
import { defineProps } from "vue";

const props = defineProps({
  isSidebarHidden: {
    type: Boolean,
  },
  setIsSidebarHidden: {
    type: Function,
  },
  setDisplayTaskModal: {
    type: Function,
  },
});
// import SvgIcon from "vue-material-design-icons/Plus-Circle-Outline.vue";
</script>
<style></style>
