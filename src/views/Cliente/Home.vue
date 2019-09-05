<template>
    <div>
        <h1>Teste</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
    methods: {
        logout: function() {
            this.$firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace('login')
                })
        }
    }
}
</script>

<style>
</style>