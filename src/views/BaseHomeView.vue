<template>
  <div class="overflow-y-hidden">
    <TaskModal
      :showTaskModal="showTaskModal"
      :setShowTaskModal="setShowTaskModal"
    />
    <div class="flex overflow-hidden">
      <Transition name="slide-fade">
        <Sidebar
          :setIsSidebarHidden="setIsSidebarHidden"
          :isSidebarHidden="isSidebarHidden"
          :setDisplayTaskModal="setShowTaskModal"
          v-if="!isSidebarHidden"
        ></Sidebar>
        <div
          class="ml-5 mr-2 mt-3"
          title="Toggle Sidebar"
          v-else-if="isSidebarHidden"
        >
          <div class="hover:bg-sky-300 hover:text-white rounded-md p-2">
            <v-icon
              @click.prevent="isSidebarHidden = !isSidebarHidden"
              name="bi-box-arrow-right"
              scale="1.5"
            />
          </div>
        </div>
      </Transition>

      <div
        class="main-content w-full mt-3"
        :style="{ marginLeft: sidebarWidth }"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
import TaskModal from "@/components/TaskModal.vue";
// import Sidebar from '../components/Sidebar.vue'
import { onMounted, ref, defineComponent, computed } from "vue";
defineComponent({
  components: {
    Sidebar,
    TaskModal,
  },
});

const sidebarWidth = computed(() => (!isSidebarHidden.value ? "20.5rem" : "0"));

// import
const isSidebarHidden = ref(false);
const setIsSidebarHidden = () => {
  isSidebarHidden.value = !isSidebarHidden.value;
};
const showTaskModal = ref(false);
const setShowTaskModal = () => {
  showTaskModal.value = !showTaskModal.value;
};
onMounted(() => {
  // console.log("mounteds in base home view");
});
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
/* cubic-bezier(1, 0.5, 0.8, 1) */
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.main-content {
  transition: margin-left 0.3s; /* Add a transition for the margin-left property */
}
</style>
