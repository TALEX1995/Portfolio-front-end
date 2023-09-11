<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';
import AppPagination from './components/AppPagination.vue';
export default {
  // Components
  components: { AppHeader, ProjectCard, AppPagination },
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
};
</script>


<template>
  <AppHeader />
  <main class="container my-3">
    <!-- Project Card -->
    <ProjectCard v-for="project in projects.data" :key="project.id" :project="project" />

    <!-- pagination -->
    <AppPagination :links="projects.links" @change-page="fetchProjects" />
  </main>
</template>


<style></style>