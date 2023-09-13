<script></script>


<template>
    <form>
        <div class="row">
            <div class="mb-3 col-6">
                <label for="e-mail" class="form-label"><strong>Email*</strong></label>
                <input type="email" class="form-control" id="e-mail" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">Non condivideremo mai la tua email con nessun altro.</div>
            </div>
            <div class="mb-3 col-6">
                <label for="cell-number" class="form-label"><strong>Numero di telefono</strong></label>
                <input type="number" class="form-control" id="cell-number">
            </div>
            <div class="mb-3 col-12">
                <label for="textarea" class="form-label"><strong>Messaggio*</strong></label>
                <textarea class="form-control" id="textarea" rows="5"></textarea>
            </div>
            <div class="d-flex justify-content-between mt-3">
                <p><small>* Campo obbligatorio</small></p>
                <button class="btn btn-primary">Invia la richiesta</button>
            </div>
        </div>
    </form>
</template>