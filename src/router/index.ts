import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
const LazyHomeView = () => import("@/views/HomeView.vue");
const LazyBaseHomeView = () => import("@/views/BaseHomeView.vue");
const LazyWelcomeView = () => import("@/views/Welcome.vue");
const LazyLoginView = () => import("@/views/Login.vue");
const LazyProjectsView = () => import("@/views/ProjectsView.vue");
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: LazyBaseHomeView,
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "HomeView",
          component: LazyHomeView,
        },
        {
          path: "projects/active",
          name: "ProjectsView",
          component: LazyProjectsView,
        },
      ],
    },
    {
      path: "/welcome",
      name: "Welcome",
      component: LazyWelcomeView,
    },
    {
      path: "/login",
      name: "Login",
      component: LazyLoginView,
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  if (to.fullPath === "/home" && !authStore.token) return "/welcome";
});

export default router;
