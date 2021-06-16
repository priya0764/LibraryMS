import axios from 'axios'

const LOCAL_HOST_URL = 'http://localhost:8082/books'

class BookService {
    async getAllBooks(){
        return await axios.get(LOCAL_HOST_URL);
    }

    async addBook(book){
        return await axios.post(LOCAL_HOST_URL, book);
    }

    async getBookById(bookId){
        return await axios.get(LOCAL_HOST_URL + "/" + bookId);
    }

    async getBookByTitle(title){
        return await axios.get(LOCAL_HOST_URL + "/title/" + title)
    }

    async getBookBySubject(subject){
        return await axios.get(LOCAL_HOST_URL + "/subject/" + subject)
    }

    async updateBook(bookId, book){
        return await axios.put(LOCAL_HOST_URL + "/" + bookId, book);
    }

    async deleteBook(bookId){
        return await axios.delete(LOCAL_HOST_URL + "/" + bookId);
    }
}

export default new BookService();