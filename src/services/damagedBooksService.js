import axios from 'axios'

const LOCAL_HOST_URL = "http://localhost:8082/damagedbooks"

class DamagedBooksService {
    async getAllDamagedBooks(){
       return await axios.get(LOCAL_HOST_URL);
    }
    
    async addDamagedBook(damagedBook){
        return await axios.post(LOCAL_HOST_URL, damagedBook);
    }

    async getDamagedBookById(id){
        return await axios.get(LOCAL_HOST_URL + "/" + id);
    }

    async getDamagedBookByQuantity(quantity){
        return await axios.get(LOCAL_HOST_URL + "/quantity/" + quantity)
    }

    async updateDamagedBook(id, damagedBook){
        return await axios.put(LOCAL_HOST_URL + "/" + id, damagedBook);
    }

    async deleteDamagedBook(id){
        return await axios.delete(LOCAL_HOST_URL + "/" + id);
    }
}

export default new DamagedBooksService();