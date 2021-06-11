import axios from 'axios';

const AUTHOR_API_BASE_URL = "http://localhost:8082/author";
class AuthorService {
    async getAllAuthors() {
        return await axios.get(AUTHOR_API_BASE_URL);
    }
    async deleteAuthor(authorId) {
        return await axios.delete(AUTHOR_API_BASE_URL + '/' + authorId)
    }
    async getAuthorById(authorId) {
        return await axios.get(AUTHOR_API_BASE_URL + '/' + authorId);
    }
    async addAuthor(author) {
        return await axios.post(AUTHOR_API_BASE_URL, author);
    }
    async updateAuthor(author, authorId) {
        return await axios.put(AUTHOR_API_BASE_URL + '/update/' + authorId, author);
    }
    async getAuthorByName(firstName){
        return await axios.get(AUTHOR_API_BASE_URL + '/name/' + firstName);
    }

}
export default new AuthorService()