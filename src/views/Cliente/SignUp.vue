<template>
    <div class="loginForm">
        <transition appear name="fade">
           <div class="form">
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
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
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
                    <vs-input
                        :danger="dangerPass"
                        :danger-text="dangerTextPass"
                        icon-no-border
                        size="large"
                        icon="lock"
                        label-placeholder="Confirmar senha"
                        v-model="confirmarSenha"
                        :color="tipo"
                        type="password"
                    />
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <router-link to="/login">
                        <vs-button color="#9490C0" type="flat">Login</vs-button>
                    </router-link>
                    <vs-button
                        @click.prevent="cadastrar"
                        color="#b39cd0"
                        gradient-color-secondary="#845EC2"
                        type="gradient"
                    >Cadastrar</vs-button>
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
            tipo: '#E79EBD',
            email: '',
            senha: '',
            confirmarSenha: '',
            danger: false,
            dangerPass: false,
            dangerText: '',
            dangerTextPass: ''
        }
    },
    methods: {
        cadastrar() {
            this.$firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.senha)
        }
    },
    watch: {
        confirmarSenha: function() {
            if (this.senha !== this.confirmarSenha) this.dangerPass = true
            this.dangerTextPass = 'Senhas diferentes'
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
}
.vs-button {
    margin: 25px 70px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
  transform: rotate(10em)
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>