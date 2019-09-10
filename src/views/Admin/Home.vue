<template>
    <div class="admin">
        <h1>
            Listagem de clientes
        </h1>

        <vs-list v-for="(usuario, id) in usuarios" :key="id">
            <vs-list-header icon="supervisor_account" :title="usuario.nome"></vs-list-header>
            <vs-list-item title="Email: " :subtitle=usuario.email></vs-list-item>
            <vs-list-item title="Telefone: " :subtitle=usuario.telefone></vs-list-item>
            <vs-list-item title="N° de Convidados: " :subtitle=usuario.quantidadeDeConvidados></vs-list-item>
            <vs-list-item title="Data: " :subtitle=usuario.data></vs-list-item>
                    <br>
        <hr>
        <br>
        </vs-list>

        <vs-button @click.prevent="logout" color="#b39cd0"  gradient-color-secondary="#845EC2" type="gradient" >Sair</vs-button>

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
    methods:{
        logout() {
            this.$firebase.auth().signOut().then(() => {
                this.$router.replace('login')
            })
        },
    },
    created() {
        this.axios.get("users.json").then(res => {
            this.usuarios = res.data

        })
    }
}
</script>

<style>

.admin{
    background-color: white;
    width: 75%;
    margin: 0 auto;
    margin-top: 5em;
    border-radius: 1em;
}

.admin h1{
    text-align: center;
}
.v-list{
    background-color: white!important;
}
</style>