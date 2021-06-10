import axios from 'axios'

const LOCAL_HOST_URL = "http://localhost:8080/booksorder"

class BooksOrderService {
    async getAllOrders(){
       return await axios.get(LOCAL_HOST_URL);
    }

    async addBooksOrder(booksOrder){
        return await axios.post(LOCAL_HOST_URL, booksOrder);
    }

    async getBooksOrderById(orderId){
        return await axios.get(LOCAL_HOST_URL + "/" + orderId);
    }

    async updateBooksOrder(orderId, booksOrder){
        return await axios.put(LOCAL_HOST_URL + "/" + orderId, booksOrder);
    }

    async deleteOrder(orderId){
        return await axios.delete(LOCAL_HOST_URL + "/" + orderId);
    }
}

export default new BooksOrderService();