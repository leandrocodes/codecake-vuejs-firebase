<template>
    <div class="loginForm">
        <transition appear name="fade">
            <div class="form">
                <vs-row>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-xs="12" vs-xs-offset="0">
                        <vs-input
                            :danger="danger"
                            :danger-text="dangerText"
                            icon-no-border
                            size="large"
                            icon="account_circle"
                            label-placeholder="E-mail"
                            v-model="email"
                            :color="tipo"
                        />
                    </vs-col>
                </vs-row>
                <vs-row>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                        <vs-input
                            :danger="dangerPass"
                            :danger-text="dangerTextPass"
                            icon-no-border
                            size="large"
                            icon="lock"
                            label-placeholder="Senha"
                            v-model="senha"
                            :color="tipo"
                            type="password"
                        />
                    </vs-col>
                </vs-row>
                <vs-row>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                        <vs-button @click.prevent="login" color="#b39cd0" gradient-color-secondary="#845EC2" type="gradient">Login</vs-button>
                    </vs-col>
                </vs-row>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tipo: '#9C7DC9',
            email: '',
            senha: '',
            danger: false,
            dangerPass: false,
            dangerText: '',
            dangerTextPass: '',
            show: true
        }
    },
    methods: {
        login() {
            let firebase = this.$firebase
            firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(() => {
                let user = firebase.auth().currentUser
                firebase.database().ref(`/admin/${user.uid}/admin`).once('value').then(snapshot => {
                    //console.log(snapshot.val())
                    if (snapshot.val()) {
                        this.$router.replace('/homeAdmin')
                    } else {
                        alert('Você não é admin!')
                        firebase.auth().signOut().then(() => {
                            this.$router.replace('/login')
                        })
                    }
                })
            },
                err => {
                    //console.log(err.message)
                    this.dangerText = ''
                    this.danger = false
                    this.dangerTextPass = ''
                    this.dangerPass = false

                    if (err.message === 'The email address is badly formatted.') {
                        this.danger = true
                        if (this.email === '')
                            this.dangerText = 'É obrigatório preencher este campo'
                        else this.dangerText = 'Email mal formatado'
                    }
                    if (err.message === 'The password is invalid or the user does not have a password.') {
                        this.dangerPass = true
                        if (this.senha === '')
                            this.dangerTextPass = 'É obrigatório preencher este campo'
                        else
                            this.dangerTextPass = 'A senha não está correta'
                    }
                }
            )
        }
    }
}
</script>

<style scoped>
.loginForm {
    padding: 10em 3em;
    height: 550px;
    width: 550px;
    background: #fafafa;
    margin: 1em auto;
    border-radius: 50%;
}
.vs-input {
    margin: 10px;
    width: 65%;
    font-size: 3em;
}
.vs-button {
    margin: 25px 70px;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
}
</style>