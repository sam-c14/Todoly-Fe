<template>
  <div style="height: 100dvh" class="bg-red-500">
    <div class="flex-shrink-0 h-full w-64 bg-white border-r">
      <div class="flex items-center justify-between h-16 user-details px-4">
        <div class="flex justify-center gap-1 items-center">
          <div
            class="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
          >
            <span class="font-medium text-gray-600 dark:text-gray-300">S</span>
          </div>
          <div class="font-semibold text-xl"><h3>Sam</h3></div>
        </div>
        <div>
          <v-icon
            @click.prevent="props.setIsSidebarHidden"
            name="fa-bars"
            scale="1"
          />
        </div>
      </div>
      <nav class="flex flex-col mt-4">
        <a
          href="#"
          class="px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-800 rounded-md transition duration-300"
        >
          <menu-icon />
          Dashboard
        </a>
        <a
          href="#"
          class="px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-800 rounded-md transition duration-300"
        >
          Projects
        </a>
        <a
          href="#"
          class="px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-800 rounded-md transition duration-300"
        >
          Tasks
        </a>
        <a
          href="#"
          class="px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-800 rounded-md transition duration-300"
        >
          Calendar
        </a>
        <a
          href="#"
          class="px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-800 rounded-md transition duration-300"
        >
          <i class="mdi mdi-plus-circle-outline"></i>
          Settings
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
});
// import SvgIcon from "vue-material-design-icons/Plus-Circle-Outline.vue";
</script>
<style></style>
