<script>
export default {
    props: { project: Object, isDetail: Boolean },
    methods: {
        projectDate(date) {
            const newDate = new Date(date);
            const day = newDate.getDate();
            const month = newDate.getMonth() + 1;
            const year = newDate.getFullYear();
            const hours = newDate.getHours();
            const minutes = newDate.getMinutes();
            const seconds = newDate.getSeconds();

            const finalDate = `${day}/${month}/${year} alle ore ${hours}:${minutes}:${seconds}`;

            return finalDate
        }

    }
}
</script>


<template>
    <div class="card my-5">
        <div class="row g-0">
            <div class="col-md-4">
                <img v-if="project.image" src="project.image" class="img-fluid rounded-start" alt="project.title">
                <img v-else class="img-fluid rounded-start"
                    src="https://www.innerintegratori.it/wp-content/uploads/2021/06/placeholder-image.png" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <p class="card-text"><small class="text-body-secondary">Creato il: {{ projectDate(project.created_at)
                    }}</small></p>
                    <p class="card-text"><small class="text-body-secondary">Ultima modifica il: {{
                        projectDate(project.updated_at)
                    }}</small></p>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-end">
                <RouterLink v-if="isDetail" class="btn btn-secondary m-3" :to="{ name: 'home' }">Torna alla lista dei
                    Progetti
                </RouterLink>
                <RouterLink v-else class="btn btn-primary m-3" :to="{ name: 'project-detail', params: { id: project.id } }">
                    Dettagli progetto
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 250;

}
</style>