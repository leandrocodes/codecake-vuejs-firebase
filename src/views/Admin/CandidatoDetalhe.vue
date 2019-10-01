<template>
  <div class="usuario-detalhe">
    <img src="../../assets/logo.png" width="300" />
    <h2>Detalhes do candidato</h2>

    <vs-row style="margin: 20px 0;">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-xs="12" vs-xs-offset="0">
        <router-link to="/listCandidato">
          <vs-button icon="arrow_back" color="#b39cd0" gradient-color-secondary="#845EC2" type="gradient">Voltar</vs-button>
        </router-link>
      </vs-col>
    </vs-row>

    <div v-if="!uid">
      <h3>Nenhum candidato foi selecionado</h3>
      <p>Volte a lista e selecione um candidato!</p>
    </div>

    <div class="detalhes" v-else>
      <img :src="candidato.url" width="200" style="margin-bottom: 20px;" />
      <h4>
        <span>{{candidato.nome}} {{candidato.sobrenome}}</span>
      </h4>
      <p>Rua: {{candidato.endereco.rua}}, Bairro: {{candidato.endereco.bairro}}, Nº: {{candidato.endereco.numero}}</p>
      <p>CPF: {{candidato.cpf}}</p>
      <P>Email: {{candidato.email}}</P>
      <p>Telefone: {{candidato.telefone}}</p>
      <p>Nascimento: {{candidato.nascimento}}</p>
      <p>Experiências: {{candidato.experiencias}}</p>
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

<style scoped>
.usuario-detalhe {
  text-align: center;
  background-color: white;
  width: 75%;
  margin: 0 auto;
  margin-top: 5em;
  border-radius: 1em;
  padding: 5em;
}
.detalhes p {
  margin: 1em;
}
</style>
