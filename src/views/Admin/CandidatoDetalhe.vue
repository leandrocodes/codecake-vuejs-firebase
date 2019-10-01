<template>
  <div class="usuario-detalhe">
    <h3>Detalhes do candidato</h3>

    <div v-if="!uid">
      <h4>Nenhum candidato foi selecionado</h4>
      <router-link to="/listCandidato">
        <vs-button>Voltar</vs-button>
      </router-link>
    </div>

    <div v-else>
      <p>
        <strong>Código</strong>
        {{ uid }}
      </p>

        <img :src="candidato.url" >

    </div>
    <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`">Editar</router-link> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      uid: null,
      candidato: {
        nome: '',
        sobrenome: '',
        cidade: '',
        cpf: '',
        endereco: { rua: '', bairro: '', numero: '' },
        email: '',
        telefone: '',
        experiencias: '',
        nascimento: '',
        url: ''
      }
    }
  },
  created() {
    this.uid = this.$route.params.uid
    this.axios.get(`candidatos/${this.uid}.json`).then(res => {
      this.candidato = res.data
     console.log(this.candidato)
    })
  }
}
</script>

<style>
</style>
