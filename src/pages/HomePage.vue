<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import AppPagination from '../components/AppPagination.vue';
export default {
    components: { ProjectCard, AppPagination },
    // Data
    data: () => ({
        projects: {
            data: [],
            links: [],
        }
    }),
    // Methods
    methods: {
        fetchProjects(endpoint = 'http://127.0.0.1:8000/api/projects/') {
            axios.get(endpoint).then(res => {
                this.projects = {
                    data: res.data.data,
                    links: res.data.links
                }
            })
        }
    },
    // Created
    created() {
        this.fetchProjects();
    }
}
</script>


<template>
    <h1>I miei Progetti</h1>
    <!-- Project Card -->
    <ProjectCard v-for="project in projects.data" :key="project.id" :project="project" />

    <!-- pagination -->
    <AppPagination :links="projects.links" @change-page="fetchProjects" />
</template>