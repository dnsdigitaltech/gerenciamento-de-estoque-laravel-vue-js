<template>
    <div>
        
    </div>
</template>

<script>
 export default {
    created() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        Toast.fire({
            icon: "success",
            title: "Logout efetuando com sucesso!"
        });
        this.$router.push({ name: '/' })
    }
 }
</script>

<style>
</style>