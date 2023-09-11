<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects/';
import AppHeader from './components/AppHeader.vue';
export default {
  // Components
  components: { AppHeader },
  // Data
  data: () => ({
    projects: [],
  }),
  // Methods
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => {
        console.log(res.data)
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


  </main>
</template>


<style></style>