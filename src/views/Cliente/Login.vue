<template>
    <div class="loginForm">
        <vs-row>
            <vs-col
                 vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
                vs-xs="12"
                vs-xs-offset="0"
            >
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
            <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
            >
                <vs-input
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
                <router-link to="/cadastro">
                    <vs-button color="#9490C0" type="flat">Cadastrar</vs-button>
                </router-link>
                <vs-button
                    @click.prevent="login"
                    color="#b39cd0"
                    gradient-color-secondary="#845EC2"
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
            senha: '',
            danger: false,
            dangerText: ''
        }
    },
    methods: {
        login() {
            this.$firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.senha)
                .then(
                    () => {
                        this.$router.replace({ name: 'home' })
                    },
                    err => {
                        if(err.message == 'Email is baddly formatted'){
                            this.danger = true
                            this.dangerText = 'Email mal formatado'
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
    height: 30%;
    width: 40%;
    background: #fafafa;
    margin: 0 auto;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
}
.vs-input {
    margin: 10px;
    width: 65%;
}
.vs-button {
    margin: 25px 70px;
}
</style>