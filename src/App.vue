<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects/';
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';
export default {
  // Components
  components: { AppHeader, ProjectCard },
  // Data
  data: () => ({
    projects: [],
  }),
  // Methods
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => {
        this.projects = res.data.data
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

    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />

  </main>
</template>


<style></style>