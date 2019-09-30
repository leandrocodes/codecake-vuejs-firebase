<template>
  <div class="admin">
    <h1>Listagem de Candidatos</h1>

    <vs-row style="margin: 20px 0;">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-xs="12" vs-xs-offset="0">
        <vs-button icon="exit_to_app" @click.prevent="voltar" color="#b39cd0" gradient-color-secondary="#845EC2" type="gradient">
          Voltar
        </vs-button>
      </vs-col>
    </vs-row>

    <vs-list v-for="(usuario, uid) in usuarios" :key="uid">
      <vs-list-header icon="supervisor_account" :title="uid"></vs-list-header>
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
      usuario: {
        nome: '',
      },
      usuarios: [],
      
    }
  },
  methods: {
    voltar() {
        this.$router.replace('homeAdmin')
    }
  },
  created() {
    this.axios.get('candidatos.json').then(res => {
      this.usuarios = res.data
      console.log(this.usuarios)
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
