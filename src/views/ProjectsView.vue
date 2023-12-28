<template>
  <div class="w-full xl:px-32 pb-28">
    <div class="flex w-full mt-10 items-center pr-14 justify-between">
      <div>
        <h3 class="font-semibold text-2xl">My Projects</h3>
        <p class="text-gray-500">Free plan</p>
      </div>
      <div
        class="flex gap-2 items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white p-2 rounded-sm"
      >
        <v-icon
          name="ri-settings-3-line"
          class="text-gray-500"
          scale="1.3"
        ></v-icon>
        <p>Settings</p>
      </div>
    </div>
    <div class="pr-14">
      <div class="border py-0.5 rounded-lg pl-2 mt-3">
        <v-icon name="pr-search" class="text-gray-500" scale="1.3"></v-icon>
        <input
          type="text"
          class="border-0 w-10/12 outline-none focus:ring-0 focus:border-0"
          placeholder="Search Projects"
        />
      </div>
    </div>
    <!-- dropdown -->
    <div class="mt-3 relative overflow-y-visible">
      <button
        @click="isDropDownShowing = !isDropDownShowing"
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-gray-500 bg-white hover:bg-gray-100 border border-gray-200 rounded-lg px-3 text-base py-2.5 justify-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 flex gap-2"
        type="button"
        >Active Projects
        <svg
          class="w-2.5 h-2.5 ms-3 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <Transition name="fade" class="z-40" mode="out-in">
        <div
          id="dropdown"
          v-if="isDropDownShowing"
          class="mt-1 bg-white divide-y divide-gray-100 absolute rounded-lg w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm w-72 shadow-lg bg-white text-gray-700 dark:text-gray-200 border rounded-md px-3"
            aria-labelledby="dropdownDefaultButton"
          >
            <li class="pl-2"
              ><span class="text-lg font-semibold mb-3">Project type</span></li
            >
            <li
              class="flex px-2 mt-3 rounded-sm gap-3 items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <span>
                <v-icon name="fa-tasks" class="text-reset" scale="1.1" />
              </span>
              <a href="#" class="block text-gray-500 text-lg px-4 py-2"
                >Active Projects</a
              >
            </li>
            <li
              class="flex px-2 rounded-sm gap-3 items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <span>
                <v-icon name="pr-inbox" class="text-reset" scale="1.1" />
              </span>
              <a href="#" class="block text-gray-500 text-lg px-4 py-2"
                >Archived Projects</a
              >
            </li>
          </ul>
        </div>
      </Transition>
    </div>
    <!-- Project List -->
    <div class="pr-14 mt-7">
      <div class="border-b border-gray-200 pb-2">
        <h5 class="text-lg font-semibold">1 project</h5>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { Dropdown } from 'flowbite';
import { ref } from "vue";

const isDropDownShowing = ref<boolean>(false);
</script>
<style scoped>
.fade-enter-active {
  transition: all 0.1s ease-in;
}

.fade-leave-active {
  transition: all 0.1s ease-out;
}
/* cubic-bezier(1, 0.5, 0.8, 1) */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
