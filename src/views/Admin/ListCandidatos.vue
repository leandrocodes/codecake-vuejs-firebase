<template>
  <div class="admin">
    <h1>Listagem de Candidatos</h1>

    <vs-row style="margin: 20px 0;">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-xs="12" vs-xs-offset="0">
        <vs-button
          icon="exit_to_app"
          @click.prevent="voltar"
          color="#b39cd0"
          gradient-color-secondary="#845EC2"
          type="gradient"
        >Voltar</vs-button>
      </vs-col>
    </vs-row>

    <vs-list v-for="(candidato, uid) in candidatos" :key="uid">
      <vs-list-header icon="supervisor_account" :title="candidato.nome"></vs-list-header>
      <vs-list-item title="CPF: " :subtitle="candidato.cpf"></vs-list-item>
      <vs-list-item title="Email: " :subtitle="candidato.cpf"></vs-list-item>
      <vs-list-item title="Telefone: " :subtitle="candidato.endereco.rua"></vs-list-item>
      <vs-list-item>
        <vs-button
          icon="exit_to_app"
          @click.prevent="detalhes(uid)"
          color="#b39cd0"
          gradient-color-secondary="#845EC2"
          type="gradient"
        >Detalhes</vs-button>
      </vs-list-item>
      <br />
      <hr />
      <br />
    </vs-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      candidato: {
        nome: '',
        sobrenome: '',
        cidade: '',
        uf: '',
        endereco: { rua: '', bairro: '', numero: '' },
        email: '',
        telefone: '',
        experiencias: '',
        nascimento: ''
      },
      candidatos: [],

    }
  },
  methods: {
    voltar() {
      this.$router.replace('homeAdmin')
    },
    detalhes(uid) {
      this.$router.push({ name: 'candidatoDetalhe', params: { uid } })
    }
  },
  created() {
    this.axios.get('candidatos.json').then(res => {
      this.candidatos = res.data
    })
  }
}
</script>

<style>
.admin {
  background-color: white;
  width: 75%;
  margin: 0 auto;
  margin-top: 5em;
  border-radius: 1em;
  padding: 5em;
}

.admin h1 {
  text-align: center;
}
.v-list {
  background-color: white !important;
}
</style>
