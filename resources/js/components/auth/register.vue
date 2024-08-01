<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card shadow-sm my-5">
                <div class="card-body p-0">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="login-form">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Cadastrar</h1>
                        </div>
                        <form class="user">
                            <div class="form-group">
                                <label>Nome completo</label>
                                <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Nome completo" v-model="form.name">
                                <small class="text-danger" v-if="errors.name">{{  errors.name[0]  }}</small>
                            </div>
                            <div class="form-group">
                                <label>E-mail</label>
                                <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                placeholder="E-mail" v-model="form.email">
                                <small class="text-danger" v-if="errors.email">{{  errors.email[0]  }}</small>
                            </div>
                            <div class="form-group">
                            <label>Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword" placeholder="Senha" v-model="form.password">
                            <small class="text-danger" v-if="errors.password">{{  errors.password[0]  }}</small>
                            </div>
                            <div class="form-group">
                            <label>Confirmar senha</label>
                            <input type="password" class="form-control" id="exampleInputPasswordRepeat"
                                placeholder="Confirmar senha" v-model="form.password_confirmation">
                                <small class="text-danger" v-if="errors.password_confirmation">{{  errors.password_confirmation[0]  }}</small>
                            </div>
                            <div class="form-group">
                            <button @click="register()" type="button" class="btn btn-primary btn-block">Cadastrar</button>
                            </div>
                        </form>
                        <hr>
                        <div class="text-center">
                            <router-link to="/" class="font-weight-bold small">Já possuo uma conta</router-link>
                        </div>
                        <div class="text-center">
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
export default {
    created() {
        if(User.loggedIn()) {
            this.$router.push({ name: 'dashboard' })
        }
    },
    data(){
        return {
            form: {
                name: null,
                email: null,
                password: null,
                confirm_password: null
            },
            errors: {}
        }
    },
    methods: {
        register(){
            axios.post('/api/auth/register', this.form)
            .then(res => {
                User.responseAfterLogin(res)
                Toast.fire({
                    icon: "success",
                    title: "Usuário cadastrado com sucesso!"
                });
                this.$router.push({ name: 'dashboard' })
            })
            .catch(error =>this.errors = error.response.data.errors)
        }
    }
}
</script>

<style>
</style>