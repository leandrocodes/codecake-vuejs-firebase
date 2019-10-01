<template>
  <div class="admin">
    <h1>Home Admin</h1>

    <vs-row style="margin: 20px 0;">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-xs="12" vs-xs-offset="0">
        <vs-button icon="exit_to_app" @click.prevent="logout" color="#b39cd0" gradient-color-secondary="#845EC2" type="gradient">Sair</vs-button>
      </vs-col>
    </vs-row>

    <vs-row style="margin: 20px 0;">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-xs="12" vs-xs-offset="0">
        <router-link to="/listClients">
          <vs-button icon="format_list_bulleted" color="#b39cd0" gradient-color-secondary="#845EC2" type="gradient">Listar Clientes</vs-button>
        </router-link>
      </vs-col>
    </vs-row>

        <vs-row style="margin: 20px 0;">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-xs="12" vs-xs-offset="0">
        <router-link to="/listCandidato">
          <vs-button icon="format_list_bulleted" color="#b39cd0" gradient-color-secondary="#845EC2" type="gradient">Listar Candidatos</vs-button>
        </router-link>
      </vs-col>
    </vs-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nome: '',
        email: '',
        telefone: '',
        quantidadeDeConvidados: '',
        data: ''
      },
      usuarios: []
    }
  },
  methods: {
    logout() {
      this.$firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
  created() {
    this.axios.get('users.json').then(res => {
      this.usuarios = res.data
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
