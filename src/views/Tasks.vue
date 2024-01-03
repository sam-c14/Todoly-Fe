<template>
  <div class="pr-24">
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
          <span class="ml-2 -mt-1">1 task</span></p
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
      <div class="mt-2 flex justify-between">
        <p class="font-semibold">Today</p>
        <p class="font-semibold">Past Due</p>
        <p class="font-semibold">Overdue</p>
      </div>
      <!-- Draggable -->
      <Draggable v-model="items">
        <template #item="{ item }">
          <div class="py-2 px-3 rounded-lg my-3 bg-red-500 text-white w-2/6">
            {{ item.title }}
          </div>
        </template>
      </Draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import Draggable from "vue3-draggable";

const items = [
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
  {
    id: 5,
    title: "item 5",
  },
];
</script>

<style scoped></style>
