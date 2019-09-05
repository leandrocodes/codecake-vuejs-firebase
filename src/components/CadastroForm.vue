<template>
    <div class="cadastroForm">
        <v-app id="inspire">
            <v-form v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                :counter="10"
                                label="Nome"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="lastname"
                                :rules="nameRules"
                                :counter="10"
                                label="Sobrenome"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field
                                v-model="password"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show ? 'text' : 'password'"
                                name="input-10-1"
                                label="Senha"
                                hint="At least 8 characters"
                                counter
                                @click:append="show = !show"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <br />
                    <h3>Indique a data do seu casamento</h3>
                    <br />
                    <v-row justify="center">
                        <v-date-picker color="pink lighten-3" v-model="picker"></v-date-picker>
                    </v-row>
                    <v-row justify="end">
                        <v-col cols="12" md="4">
                            <v-btn @click="register">Cadastrar</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-app>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            show: false,
            valid: false,
            firstname: "",
            lastname: "",
            nameRules: [
                v => !!v || "Name is required",
                v => v.length <= 10 || "Name must be less than 10 characters"
            ],
            email: "",
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+/.test(v) || "E-mail must be valid"
            ],
            password: "",
            rules: {
                required: value => !!value || "Required.",
                min: v => v.length >= 8 || "Min 8 characters",
                emailMatch: () =>
                    "The email and password you entered don't match"
            },
            picker: new Date().toISOString().substr(0, 10)
        }
    },
    methods: {
        register() {
            this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .catch(function(error) {
                })
            console.log(this.picker)
        }
    }
}
</script>


<style scoped>
.cadastroForm {
    width: 30%;
    margin: 0 auto;
}
</style>