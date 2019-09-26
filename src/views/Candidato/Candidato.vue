<template>
  <div class="candidato-form">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <!--         <router-link to="/">
          <vs-button icon="home" type="flat" color="#b39cd0" size="large">Início</vs-button>
        </router-link>
        <router-link to="/list">
          <vs-button icon="assignment" type="flat" color="#b39cd0" size="large">Listar</vs-button>
        </router-link>-->
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <h2>Candidatar-se à uma Vaga 🖋 🗒</h2>
      </vs-col>
    </vs-row>

    <form>
      <vs-row  vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input v-model="candidato.nome" color="#b39cd0" label="Nome: " placeholder="Nome" />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input v-model="candidato.sobrenome" color="#b39cd0" label="Sobrenome:" placeholder="Sobrenome" />
        </vs-col>
      </vs-row>


      <vs-row>
        <vs-col v-if="alert" vs-type="flex" vs-justify="center" vs-align="center">
          <vs-alert :active.sync="alert" color="success" icon="check_circle" closable>Associado inserido com sucesso!</vs-alert>
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center">
          <vs-button @click="add" icon="send" color="#b39cd0" gradient-color-secondary="#845EC2" type="gradient" size="small">Enviar</vs-button>
        </vs-col>
      </vs-row>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      candidato: {
        nome: '',
        sobrenome: '',
        cpf: '',
        cidade: '',
        uf: '',
        endereco: '',
        complemento: '',
        email: '',
        telefone: '',
        experiências: '',
        foto: {}

      },
      alert: false
    }
  },
  methods: {
    add() { }
  }
}
</script>

<style>
.candidato-form {
  text-align: center;
  margin: 5em auto;
  padding: 2em;
  background: white;
  width: 55%;
  border-radius: 15px;
}

.vs-row {
  text-align: left;
}

.vs-col{
  margin:15px 25px; 
}

</style>