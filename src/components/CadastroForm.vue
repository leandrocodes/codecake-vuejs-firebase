<template>
    <div class="cadastroForm">
        <section>
            <v-form v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                :counter="10"
                                label="First name"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="lastname"
                                :rules="nameRules"
                                :counter="10"
                                label="Last name"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
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
                    v => v.length <= 10 || "Name must be less than 10 characters"
                ],
                emailRules: [
                    v => !!v || "Name is required",
                    v => v.length <= 10 || "Name must be less than 10 characters"
                ]
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