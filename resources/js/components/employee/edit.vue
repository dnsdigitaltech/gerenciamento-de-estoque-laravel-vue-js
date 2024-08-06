<template>
    <div>
        <div class="row">
            <router-link to="todos-funcionarios" class="btn btn-primary col-md-2">
              Todos funcionários
            </router-link>
        </div>
        <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="card shadow-sm my-5">
                <div class="card-body p-0">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="login-form">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Editar Funcionário</h1>
                            </div>
                            <form class="user" enctype="multipart/form-data">
                                <div class="form-row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="name">Nome completo</label>
                                            <input type="text" class="form-control" id="name" placeholder="Nome completo" v-model="form.name">
                                            <small class="text-danger" v-if="errors.name">{{  errors.name[0]  }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="email">E-mail</label>
                                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                            placeholder="E-mail" v-model="form.email">
                                            <small class="text-danger" v-if="errors.email">{{  errors.email[0]  }}</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="phone">Telefone</label>
                                            <input type="phone" class="form-control" id="phone" 
                                            placeholder="Telefone" v-model="form.phone">
                                            <small class="text-danger" v-if="errors.phone">{{  errors.phone[0]  }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="salary">Salário</label>
                                            <input type="text" class="form-control" id="salary" placeholder="Salário" v-model="form.salary">
                                            <small class="text-danger" v-if="errors.salary">{{  errors.salary[0]  }}</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="joining_date">Data de ingresso</label>
                                            <input type="date" class="form-control" id="joining_date" placeholder="Data de ingresso" v-model="form.joining_date">
                                            <small class="text-danger" v-if="errors.joining_date">{{  errors.joining_date[0]  }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="nid">Nid</label>
                                            <input type="text" class="form-control" id="nid" placeholder="Nid" v-model="form.nid">
                                            <small class="text-danger" v-if="errors.nid">{{  errors.nid[0]  }}</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="joining_date">Endereço</label>
                                            <input type="text" class="form-control" id="address" placeholder="Endereço" v-model="form.address">
                                            <small class="text-danger" v-if="errors.address">{{  errors.address[0]  }}</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="customFile">Foto</label>
                                            <input type="file" class="custom-file-input" id="customFile" @change="onFileSelected">
                                            <label class="custom-file-label" for="customFile">Escolha a foto</label>
                                            <small class="text-danger" v-if="errors.photo">{{  errors.photo[0]  }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <img :src="form.newphoto" style="height: 40px; width: 40px;">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                <button @click="employeeUpdate()" type="button" class="btn btn-primary btn-block">Atualizar</button>
                                </div>
                            </form>
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
        if(!User.loggedIn()) {
            this.$router.push({ name: '/' })
        }
    },
    data(){
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                salary: '',
                joining_date: '',
                nid: '',
                newphoto: '',
                photo: ''
            },
            errors: {}
        }
    },
    created(){
        let id = this.$route.params.id
        axios.get(`/api/employee/${id}`)
        .then(({data}) => (this.form = data))
        .catch(console.log('error'))
    },
    methods: {
        onFileSelected(event){
            let file = event.target.files[0]
            if(file.size > 1048770) {
                Notification.image_validation()
            }else{
                if(file.type == 'image/jpeg' || file.type == 'image/png'){
                    let reader = new FileReader();
                    reader.onload = event =>{
                        this.form.newphoto = event.target.result
                    };
                    reader.readAsDataURL(file)
                }else{
                    Notification.image_format()
                }
            }
        },
        employeeUpdate(){
            let id = this.$route.params.id
            axios.patch(`/api/employee/${id}`, this.form)
            .then(() => {
                this.$router.push({ name: 'employeeIndex' })
                Notification.success()
            })
            .catch(error =>this.errors = error.response.data.errors)
        }
    }
    
}
</script>

<style>
</style>