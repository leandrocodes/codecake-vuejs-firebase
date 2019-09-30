<template>
  <div class="candidato-form">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <h2>Candidatar-se à uma Vaga 🖋 🗒</h2>
      </vs-col>
    </vs-row>

    <form>
      <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input v-model="candidato.nome" color="#b39cd0" label="Nome: " placeholder="ex: João" />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input v-model="candidato.sobrenome" color="#b39cd0" label="Sobrenome:" placeholder="ex: Silva" />
        </vs-col>
      </vs-row>

      <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input v-model="candidato.nome" color="#b39cd0" label="CPF: " placeholder="032.123.766-88" />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input v-model="candidato.nome" color="#b39cd0" label="RG: " placeholder="1.234.567" />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input v-model="candidato.sobrenome" color="#b39cd0" label="Nascimento:" placeholder="31/01/2000" />
        </vs-col>
      </vs-row>

      <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-input v-model="candidato.nome" color="#b39cd0" label="Rua: " placeholder="ex: Av. Brasil" />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-input v-model="candidato.sobrenome" color="#b39cd0" label="Bairro:" placeholder="ex: Jd. Botânico" />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">
          <vs-input v-model="candidato.sobrenome" color="#b39cd0" label="Número:" placeholder="123" />
        </vs-col>
      </vs-row>

      <vs-row vs-type="flex" vs-jusitfy="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <vs-textarea counter="1000" color="#b39cd0" label="Experiências profissionais" v-model="candidato.experiencias" />
        </vs-col>
      </vs-row>

      <vs-row vs-type="flex" vs-jusitfy="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
          <vs-upload style="margin-left: 50%;" text="Escolha uma foto sua para o currículo" action="https://jsonplaceholder.typicode.com/posts/" />
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
        experiencias: '',
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

.vs-col {
  margin: 15px 25px;
}
</style>