<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/contact';
const emptyForm = { email: '', cellNumb: '', message: '' };
export default {
    name: 'ContactMe',
    data: () => ({
        form: emptyForm
    }),
    methods: {
        sendForm() {
            axios.post(endpoint, this.form)
                .then(() => { this.form = emptyForm })
                .catch(err => { console.error(err) })

        }
    }
}
</script>


<template>
    <form @submit.prevent="sendForm">
        <div class="row">
            <div class="mb-3 col-6">
                <label for="e-mail" class="form-label"><strong>Email*</strong></label>
                <input type="email" class="form-control" id="e-mail" aria-describedby="emailHelp" v-model.trim="form.email">
                <div id="emailHelp" class="form-text">Non condivideremo mai la tua email con nessun altro.</div>
            </div>
            <div class="mb-3 col-6">
                <label for="cell-number" class="form-label"><strong>Numero di telefono</strong></label>
                <input type="number" class="form-control" id="cell-number" v-model.trim="form.cellNumb">
            </div>
            <div class="mb-3 col-12">
                <label for="textarea" class="form-label"><strong>Messaggio*</strong></label>
                <textarea class="form-control" id="textarea" rows="5" v-model.trim="form.message"></textarea>
            </div>
            <div class="d-flex justify-content-between mt-3">
                <p><small>* Campo obbligatorio</small></p>
                <button class="btn btn-primary">Invia la richiesta</button>
            </div>
        </div>
    </form>
</template>