import axios from "axios";

const request = axios.create({
    baseURL: 'https://viacep.com.br/ws'
})

export const api = {
    getCEP:async (id: string) => {
            const req = await request(`/${id}/json/`);
            return req.data
        
    }
}