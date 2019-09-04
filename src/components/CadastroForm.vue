<template>
    <div class="cadastroForm">
        <section>
            <v-form v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="6" md="6">
                            <v-text-field
                                v-model="user.firstname"
                                :rules="userRules.nameRules"
                                :counter="10"
                                label="Nome"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" md="6">
                            <v-text-field
                                v-model="user.lastname"
                                :rules="userRules.nameRules"
                                :counter="10"
                                label="Sobrenome"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="user.email"
                                :rules="userRules.emailRules"
                                label="Email"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                type="password"
                                v-model="user.password"
                                :rules="[userRules.passRules.required, userRules.passRules.min]"
                                label="Senha"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field
                                v-model="user.firstname"
                                :rules="userRules.nameRules"
                                :counter="10"
                                label="Nome"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            user: {
                firstname: "",
                lastname: "",
                email: "",
                password: ""
            },
            userRules: {
                nameRules: [
                    v => !!v || "Name is required",
                    v =>
                        v.length <= 10 || "Name must be less than 10 characters"
                ],
                emailRules: [
                    v => !!v || "E-mail is required",
                    v => /.+@.+\..+/.test(v) || "E-mail must be valid"
                ],
                passRules: {
                    required: value => !!value || "Required.",
                    min: v => v.length >= 8 || "Min 8 characters"
                }
            }
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