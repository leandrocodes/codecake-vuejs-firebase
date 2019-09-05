<template>
    <div class="loginForm">
        <vs-row>
            <vs-col vs-offset="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-input
                    icon-no-border
                    size="large"
                    icon="account_circle"
                    label-placeholder="E-mail"
                    v-model="value7"
                />
            </vs-col>
        </vs-row>
        <vs-row>
            <vs-col vs-offset="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-input
                    icon-no-border
                    size="large"
                    icon="lock"
                    label-placeholder="Senha"
                    v-model="value7"
                />
            </vs-col>
        </vs-row>
        <vs-row>
            <vs-col vs-offset="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
              <vs-button color="#9490C0" type="flat">Cadastrar</vs-button>
              <vs-button color="#C893AA" gradient-color-secondary="#9490C0" type="gradient">Login</vs-button>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.vs-input {
    margin: 10px;
}
.vs-button{
  margin: 5px 40px
}
</style>