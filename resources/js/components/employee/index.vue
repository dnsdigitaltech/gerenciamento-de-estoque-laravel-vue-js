<template>
    <div>
        <div class="row">
            <router-link to="/add-funcionario" class="btn btn-primary col-md-2">
              Add funcionário
            </router-link>
        </div>
        <div class="row" style="margin-top: 20px;">
            <div class="col-lg-12 mb-4">
            <!-- Simple Tables -->
            <div class="card">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Todos Funcionários</h6>
                <input type="search" v-model="searchTerm" placeholder="Buscar aqui" class="form-control col-md-3" style="float: right;">
                </div>
                <div class="table-responsive">
                <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                        <tr>
                            <th>Nome</th>
                            <th>Foto</th>
                            <th>Telefone</th>
                            <th>Salário</th>
                            <th>Data de ingresso</th>
                            <th colspan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="employee in filtersearch" :key="employee.id">
                            <td>{{ employee.name }}</td>
                            <td><img :src="employee.photo" id="em_photo"></td>
                            <td>{{ employee.phone }}</td>
                            <td>{{ employee.salary }}</td>
                            <td>{{ employee.joining_date }}</td>
                            <td><a href="#" class="btn btn-sm btn-primary">Editar</a></td>
                            <td><a href="#" class="btn btn-sm btn-danger">Remover</a></td>
                        </tr>
                    
                    </tbody>
                </table>
                </div>
                <div class="card-footer"></div>
            </div>
            </div>
        </div>
        <!--Row-->
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
            employees: [],
            searchTerm: ''
        }
    },
    computed: {
        filtersearch(){
            return this.employees.filter(employee => {
                return employee.name.match(this.searchTerm)
            })
        }
    },
    methods: {
        allEmployee() {
            axios.get('/api/employee/')
            .then(({data}) => (this.employees = data))
            .catch()
        }
        
    },
    created() {
        this.allEmployee();
    }
    
}
</script>

<style>
    #em_photo{
        height: 40px;
        width: 40px;
    }
</style>