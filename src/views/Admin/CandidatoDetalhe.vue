<template>
<div class="usuario-detalhe">
    <h3>Detalhes do candidato</h3>
    <p>
        <strong>Código</strong> {{ uid }}
    </p>
    <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`">Editar</router-link> -->

</div>
</template>

<script>
export default {
    data() {
        return {
            uid: '',
            usuario: {

            }
        }
    },
    created() {
        this.uid = this.$route.params.uid
    }
}
</script>

<style>
</style>
