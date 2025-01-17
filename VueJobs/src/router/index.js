import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Jobs from "@/views/Jobs.vue";
import Job from "@/views/Job.vue";
import AddJob from "@/views/AddJob.vue";
import EditJob from "@/views/EditJob.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URl),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/jobs",
            name: "jobs",
            component: Jobs,
        },
        {
            path: "/jobs/:id", // dynamic route
            name: "job",
            component: Job,
        },
        {
            path: "/jobs/add",
            name: "add-job",
            component: AddJob,
        },
        {
            path: "/jobs/edit/:id",
            name: "edit-job",
            component: EditJob,
        },
        {
            path: "/:catchAll(. *)",
            name: 'not-found',
            component: NotFound,
        },
    ]
});

export default router;