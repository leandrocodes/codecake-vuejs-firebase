<template>
    <div class="form">
        <h1>Solicitação de Orçamento</h1>
        <div class="inputForm" v-if="formInput">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-xs="12" vs-xs-offset="0">
                    <vs-input
                        class="name-lastname"
                        icon-no-border
                        size="large"
                        icon="edit"
                        label="Nome completo:"
                        placeholder="Nome Sobrenome"
                        :color="tipo"
                        v-model="nome"
                    />
                    <vs-input class="phone" icon-no-border size="large" icon="phone_android" label="Telefone:" :color="tipo" v-model="telefone" />
                </vs-col>
            </vs-row>

            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-xs="12" vs-xs-offset="0">
                    <vs-input
                        class="datePick"
                        placeholder="00/00/0000"
                        icon-no-border
                        icon="date_range"
                        size="large"
                        label="Data: "
                        :color="tipo"
                        v-model="data"
                    />
                    <div class="centery">
                        <vs-input-number :color="tipo" min="10" max="200" v-model="qtdConvidados" label="Convidados:" />
                    </div>
                </vs-col>
            </vs-row>

            <vs-row>
                <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" vs-w="12" vs-xs="12" vs-xs-offset="0">
                    <vs-button class="sendButton" @click.prevent="send" color="#b39cd0" gradient-color-secondary="#845EC2" type="gradient">Enviar</vs-button>
                </vs-col>
            </vs-row>
        </div>
        <div v-else>
            <br />
            <h3>O seu pedido já foi enviado!</h3>

            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-xs="12" vs-xs-offset="0">
                    <vs-button
                        icon="exit_to_app"
                        class="logout"
                        @click.prevent="logout"
                        color="#b39cd0"
                        gradient-color-secondary="#845EC2"
                        type="gradient"
                    >Sair</vs-button>
                    <router-link to="/editForm">
                        <vs-button icon="edit" color="#b39cd0" gradient-color-secondary="#845EC2" type="gradient">Editar Orçamento</vs-button>
                    </router-link>
                </vs-col>
            </vs-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tipo: '#9C7DC9',
            qtdConvidados: 10,
            nome: '',
            telefone: '',
            data: '',
            formInput: true,
        }
    },
    methods: {
        logout() {
            this.$firebase.auth().signOut().then(() => {
                this.$router.replace('login')
            })
        },
        send() {
            let firebase = this.$firebase
            let { qtdConvidados, nome, telefone, data } = this

            if ((qtdConvidados && nome && telefone && data) !== '') {
                let user = firebase.auth().currentUser
                //console.log(user)
                firebase.database().ref('/users/' + user.uid).set({
                    quantidadeDeConvidados: qtdConvidados,
                    nome: nome,
                    data: data,
                    telefone: telefone,
                    email: user.email,
                    formInput: 'preenchido'
                }, err => {
                    //console.log(err)
                })
                this.qtdConvidados = ''
                this.nome = ''
                this.telefone = ''
                this.data = ''
                this.formInput = false
            } else {
                alert('Nenhum dado foi preenchido!')
            }
        }

    },
    created() {
        let firebase = this.$firebase
        let user = firebase.auth().currentUser
        firebase.database().ref(`/users/${user.uid}/formInput`).once('value').then(snapshot => {
            if (snapshot.val())
                this.formInput = false
        })
    }
}
</script>
<style scoped>
.form {
    text-align: center;
    margin: 5em auto;
    padding: 2em;
    background: white;
    width: 55%;
    border-radius: 15px;
}

.inputForm {
    text-align: left;
}
.logout {
    margin-right: 100px;
}

.name-lastname {
    width: 250px;
}

.phone {
    width: 155px;
    margin-left: 2em;
}

.datePick {
    width: 130px;
    margin: 0 2.65em;
}
.vs-row {
    margin: 2em 1em;
}
.vs-input-number {
    margin-left: 2em;
    margin-top: 1.25em;
}
.sendButton {
    margin-right: 9.25em;
}
</style>