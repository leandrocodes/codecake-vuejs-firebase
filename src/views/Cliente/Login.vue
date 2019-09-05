<template>
    <div class="loginForm">
        <vs-row>
            <vs-col
                vs-offset="2"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="8"
                vs-xs="12"
                vs-xs-offset="0"
            >
                <vs-input
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
            <vs-col
                vs-offset="2"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="8"
                vs-xs="12"
                vs-xs-offset="0"
            >
                <vs-input
                    icon-no-border
                    size="large"
                    icon="lock"
                    label-placeholder="Senha"
                    v-model="senha"
                    :color="tipo"
                />
            </vs-col>
        </vs-row>
        <vs-row>
            <vs-col vs-offset="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <router-link to="/cadastro">
                    <vs-button color="#9490C0" type="flat">Cadastrar</vs-button>
                </router-link>
                <vs-button
                    @click="login"
                    color="#C893AA"
                    gradient-color-secondary="#9490C0"
                    type="gradient"
                >Login</vs-button>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tipo: '#E79EBD',
            email: '',
            senha: ''
        }
    },
    methods: {
        login() {
            this.$firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.senha)
                .then(() => {
                    this.$router.replace('home')
                })
        }
    }
}
</script>

<style scoped>
.login-form {
    padding: 10em;
}
.vs-input {
    margin: 10px;
    width: 70%;
}
.vs-button {
    margin: 25px 70px;
}
</style>