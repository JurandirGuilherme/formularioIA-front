import axios from "axios";

const api = axios


const desempenho = {
    async listar(){
        return await api.get('/listar')
    }
}
export default desempenho;