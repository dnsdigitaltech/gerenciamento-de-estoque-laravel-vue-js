<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-12 col-md-9">
                <div class="card shadow-sm my-5">
                <div class="card-body p-0">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="login-form">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Login</h1>
                        </div>
                        <form class="user" @submit.prevent="login">
                            <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                placeholder="Enter Email Address" v-model="form.email">
                                <small class="text-danger" v-if="errors.email">{{  errors.email[0]  }}</small>
                            </div>
                            <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password" v-model="form.password">
                            <small class="text-danger" v-if="errors.password">{{  errors.password[0]  }}</small>
                            </div>
                            <div class="form-group">
                            <div class="custom-control custom-checkbox small" style="line-height: 1.5rem;">
                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                <label class="custom-control-label" for="customCheck">Remember
                                Me</label>
                            </div>
                            </div>
                            <div class="form-group">
                            <button @click="login()" class="btn btn-primary btn-block">Login</button>
                            </div>
                        </form>
                        <hr>
                        <div class="text-center">
                            <router-link to="/cadastrar" class="font-weight-bold small">Criar uma conta!</router-link>
                        </div>
                        <div class="text-center">
                            <router-link to="/nova-senha" class="font-weight-bold small">Esqueci a senha!</router-link>
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
import User from '../../Helpers/User';

    export default {
        created() {
            if(User.loggedIn()) {
                this.$router.push({ name: 'dashboard' })
            }
        },
        data(){
            return {
                form: {
                    email: null,
                    password: null
                },
                errors: {
                    
                }
            }
        },
        methods: {
            login(){
                axios.post('/api/auth/login', this.form)
                .then(res => {
                    User.responseAfterLogin(res)
                    Toast.fire({
                        icon: "success",
                        title: "Login efetuando com sucesso!"
                    });
                    this.$router.push({ name: 'dashboard' })
                })
                .catch(error =>this.errors = error.response.data.errors)
                .catch(
                    Toast.fire({
                        icon: "warning",
                        title: "E-mail ou senha inválido"
                    })
                )
            }
        }
    }
</script>

<style>
</style>