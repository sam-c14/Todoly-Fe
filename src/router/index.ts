import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
const LazyHomeView = () => import("@/views/HomeView.vue");
const LazyBaseHomeView = () => import("@/views/BaseHomeView.vue");
const LazyWelcomeView = () => import("@/views/Welcome.vue");
const LazyLoginView = () => import("@/views/Login.vue");
const LazyProjectsView = () => import("@/views/ProjectsView.vue");
const LazyTasksView = () => import("@/views/Tasks.vue");
const LazyNotFound = () => import("@/views/NotFound.vue");
const LazySignUp = () => import("@/views/SignUpView.vue");

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
          meta: { title: "Home" },
          component: LazyHomeView,
        },
        {
          path: "projects/active",
          name: "ProjectsView",
          meta: { title: "Projects" },
          component: LazyProjectsView,
        },
        {
          path: "tasks",
          name: "TasksView",
          meta: { title: "Tasks" },
          component: LazyTasksView,
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
    {
      path: "/register",
      name: "SignUp",
      component: LazySignUp,
    },
    {
      path: "/:catchAll(.*)",
      component: LazyNotFound,
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
