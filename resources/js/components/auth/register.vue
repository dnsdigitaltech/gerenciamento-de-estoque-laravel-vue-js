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
                        <form>
                            <div class="form-group">
                                <label>Nome completo</label>
                                <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Nome completo">
                            </div>
                            <div class="form-group">
                                <label>E-mail</label>
                                <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                placeholder="E-mail">
                            </div>
                            <div class="form-group">
                            <label>Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword" placeholder="Senha">
                            </div>
                            <div class="form-group">
                            <label>Confirmar senha</label>
                            <input type="password" class="form-control" id="exampleInputPasswordRepeat"
                                placeholder="Confirmar senha">
                            </div>
                            <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Cadastrar</button>
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
</script>

<style>
</style>