<template>
    <div class="cadastroForm">
        <section>
            <b-field label="Nome Completo:" :label-position="labelPosition">
                <b-input icon="account" placeholder="Nome Sobrenome"></b-input>
            </b-field>

            <b-field
                label="Email:"
                :type="objEmail.tipo"
                :message="objEmail.mensagem"
                :label-position="labelPosition"
            >
                <b-input icon="email" type="email" placeholder="nome@email.com" maxlength="30"></b-input>
            </b-field>

            <b-field
                label="Senha"
                :type="objSenha.tipo"
                :message="objSenha.mensagem"
                :label-position="labelPosition"
            >
                <b-input
                    icon="lock"
                    placeholder="Digite uma senha forte!"
                    type="password"
                    maxlength="30"
                ></b-input>
            </b-field>

            <b-field
                label="Senha"
                :type="objSenha.tipo"
                :message="objSenha.mensagem"
                :label-position="labelPosition"
            >
                <b-input
                    icon="lock"
                    placeholder="Digite a sua senha novamente"
                    type="password"
                    maxlength="30"
                ></b-input>
            </b-field>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            labelPosition: "on-border",
            objEmail: {
                email: "",
                mensagem: "",
                tipo: ""
            },
            objSenha: {
                senha: "",
                mensagem: "",
                tipo: ""
            },
            objNome: {
                tipo: ""
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.cadastroForm {
    width: 30%;
    margin: 0 auto;
}
b-field {
    float: left;
}
</style>