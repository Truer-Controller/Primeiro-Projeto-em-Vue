<template>
      <v-container>
    <h1 class="" style="color: black">
        Usuarios da API
    </h1>
          <ListComponent :users="users"/>  
  </v-container>
</template>
<script>
import ListComponent from '../components/ListaComponente.vue'
const axios = require('axios');
export default {
    components: {
        ListComponent
    },
    name:'Api.vue',
    data() {
        return{
            users: []
        }
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        async getUsers(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            if(response.status == 200){
                this.users = response.data;
            }else{
                console.error("Erro ao carregar a API");
            }
            
            
        }
    },
    
}
</script>