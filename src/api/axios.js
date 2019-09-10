import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios
        Vue.prototype.axios = axios.create({
            baseURL: VUE_APP_DATABASE_URL,
            headers: {
                "Authorization": "abc123"
            }

        })

        Vue.prototype.axios.interceptors.request.use(config => {
            /*             console.log(config.method)
                                    if(config.method == 'post')
                                        config.method = 'put'  */
            return config
        }, error => Promise.reject(error))

        //pegando o ID do usuario (firebase) e colocando dentro do objeto usuario
        Vue.prototype.axios.interceptors.response.use(res => {
            /*             const arr = []
            
                        for(let chave in res.data){
                            arr.push({id: chave, ...res.data[chave]})
                            //forma antiga e depreciada => arr.push({id: chave, nome: res.data[chave].nome, email: res.data[chave].email})
                        }
                        res.data = arr */
            return res
        }, error => Promise.reject(error))
    }
})
