<template>
  <div style="height: 100dvh" class="z-50 side-menu absolute">
    <div
      style="width: 18.5rem"
      class="flex-shrink-0 h-full z-0 border-r-0 shadow-sm"
    >
      <div class="flex items-center justify-between h-16 user-details px-3">
        <div
          class="flex justify-center gap-3 items-center hover:bg-sky-300 hover:text-white p-2 px-4 rounded-md"
        >
          <div
            class="relative inline-flex items-center justify-center pb-1 w-8 h-8 overflow-hidden bg-green-700 rounded-full dark:bg-sky-600"
          >
            <span class="font-medium text-gray-100 dark:text-gray-300">S</span>
          </div>
          <div class="font-semibold text-xl"><h3>Sam</h3></div>
        </div>
        <div class="flex gap-2">
          <button
            class="hover:bg-sky-300 hover:text-white rounded-md p-2 block"
            title="Open Notifications"
          >
            <v-icon name="bi-bell" scale="1.5" />
          </button>
          <button
            class="hover:bg-sky-300 hover:text-white rounded-md p-2 block"
            title="Toggle Sidebar"
            @click.prevent="props.setIsSidebarHidden"
          >
            <v-icon name="bi-box-arrow-left" scale="1.5" />
          </button>
        </div>
      </div>
      <nav class="flex flex-col mt-4 px-2">
        <a
          href="#"
          @click.prevent="props.setDisplayTaskModal"
          class="px-4 py-2 text-gray-600 hover:bg-sky-300 hover:text-white flex gap-2 items-center rounded-md transition duration-300"
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
          class="px-4 py-2 text-gray-600 hover:bg-sky-300 hover:text-white flex items-center gap-2 rounded-md transition duration-300"
        >
          <span
            ><v-icon name="pr-search" class="text-reset" scale="1.1"
          /></span>
          <span class="text-lg">Search</span>
        </a>
        <router-link
          to="/tasks"
          @click="setActiveLink"
          :class="
            utilsStore.selectedMenuOption == 'tasks' && 'bg-sky-300 text-white'
          "
          class="px-4 py-2 text-gray-600 hover:bg-sky-300 hover:text-white flex items-center gap-2 rounded-md transition duration-300"
        >
          <span>
            <v-icon name="fa-tasks" class="text-reset" scale="1.1" />
          </span>
          <span class="text-lg">Tasks</span>
        </router-link>
        <a
          href="#"
          @click="utilsStore.selectedMenuOption = 'calendar'"
          :class="
            utilsStore.selectedMenuOption == 'calendar' &&
            'bg-sky-300 text-white'
          "
          class="px-4 py-2 text-gray-600 hover:bg-sky-300 hover:text-white flex items-center gap-2 rounded-md transition duration-300"
          ><span>
            <v-icon name="bi-calendar-event" class="text-reset" scale="1.1" />
          </span>
          <span class="text-lg">Calendar</span>
        </a>
        <a
          href="#"
          @click="utilsStore.selectedMenuOption = 'filters'"
          :class="
            utilsStore.selectedMenuOption == 'filters' &&
            'bg-sky-300 text-white'
          "
          class="px-4 py-2 text-gray-600 hover:bg-sky-300 hover:text-white flex items-center gap-2 rounded-md transition duration-300"
        >
          <span>
            <v-icon name="ri-dashboard-fill" class="text-reset" scale="1.1" />
          </span>
          <span class="text-lg"> Filters and Labels </span>
        </a>
      </nav>
      <nav class="mt-10 px-2">
        <div
          @click="routeToProjects"
          :class="
            utilsStore.selectedMenuOption == 'projects' &&
            'bg-sky-300 text-white'
          "
          class="flex px-4 py-2 justify-between rounded-md"
        >
          <h3 class="font-semibold">My Projects</h3>
          <div class="flex gap-2 z-30">
            <span class="cursor-pointer" title="Add Projects">
              <v-icon name="la-plus-solid"></v-icon>
            </span>
            <span class="cursor-pointer" title="Toggle list of Projects">
              <Transition name="fade" mode="out-in">
                <v-icon
                  @click="showProjects = !showProjects"
                  v-if="showProjects"
                  name="la-angle-down-solid"
                ></v-icon>
                <v-icon
                  @click="showProjects = !showProjects"
                  v-else
                  name="la-angle-right-solid"
                ></v-icon>
              </Transition>
            </span>
          </div>
        </div>
        <Transition name="fade" mode="out-in">
          <div v-if="showProjects" class="py-2">
            <a
              href="#"
              class="px-4 py-2 text-gray-600 hover:bg-sky-300 hover:text-white flex items-center gap-2 rounded-md transition duration-300"
            >
              <span>
                <v-icon
                  name="ri-home-wifi-line"
                  class="text-reset"
                  scale="1.1"
                />
              </span>
              <span class="text-lg"> Home </span>
            </a>
          </div>
        </Transition>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
import MenuIcon from "vue-material-design-icons/Menu.vue";
import { useRouter } from "vue-router";
import { FaBars } from "oh-vue-icons/icons";
import { defineProps, ref } from "vue";
import { useUtilsStore } from "@/stores/utils";

const router = useRouter();
const utilsStore = useUtilsStore();
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

const routeToProjects = (e: any) => {
  // console.log();
  if (!e.target.classList.contains("ov-icon")) {
    utilsStore.selectedMenuOption = "projects";
    router.push("/projects/active");
  }
};
const setActiveLink = (e: any) => {
  utilsStore.selectedMenuOption = "tasks";
  // router.push("/tasks");
};

const showProjects = ref(true);
// import SvgIcon from "vue-material-design-icons/Plus-Circle-Outline.vue";
</script>
<style>
.side-menu {
  background: #faf8f7a4;
}
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
@media screen and (max-width: 576px) {
  .side-menu {
    background: white;
    --tw-shadow: 0 10px 20px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
}
</style>
