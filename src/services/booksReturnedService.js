import axios from 'axios';

const BOOKSRETURNED_API_BASE_URL = "http://localhost:8080/booksReturned";
class BooksReturnedService {
    async getAllReturnedBooks() {
        return await axios.get(BOOKSRETURNED_API_BASE_URL);
    }

    async deleteReturnedBooks(id) {
        return await axios.delete(BOOKSRETURNED_API_BASE_URL + '/returned/' + id)
    }

    async getById(id) {
        return await axios.get(BOOKSRETURNED_API_BASE_URL + '/returned/' + id);
    }

    async getByDelayedDaysGreaterThanEqual(delayedDays) {
        return await axios.get(BOOKSRETURNED_API_BASE_URL + '/booksDelayed/' + delayedDays);
    }

    async addReturnedBooks(returned) {
        return await axios.post(BOOKSRETURNED_API_BASE_URL, returned);
    }
    async updateReturnedBooks( returned, id) {
        return await axios.put(BOOKSRETURNED_API_BASE_URL + '/update/' + id, returned);
    }

}
export default new BooksReturnedService()