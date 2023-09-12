<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
const baseUri = 'http://127.0.0.1:8000/api/projects/';
export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data: () => ({
        project: null,
        showErrorMessage: false,
    }),
    methods: {
        getProject() {
            axios.get(baseUri + this.$route.params.id).then(res => {
                this.project = res.data;
            }).catch(err => {
                console.error(err);
                this.showErrorMessage = true;
            });
        }
    },
    created() {
        this.getProject()
    }
}
</script>


<template>
    <div v-if="showErrorMessage">
        <h1>Il progetto al quale si sta provando ad accedere è inesistente</h1>
        <RouterLink class="btn btn-secondary m-3" :to="{ name: 'home' }">Torna alla lista dei
            Progetti
        </RouterLink>
    </div>
    <ProjectCard v-else :project="project" :isDetail="true" />
</template>