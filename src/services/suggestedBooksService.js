import axios from "axios";
const SUGGESTED_BOOKS_API_BASE_URL = "http://localhost:8081/suggestedbooks";
class SuggestedBooksService {
  async getAllSuggestedBooks() {
    return await axios.get(SUGGESTED_BOOKS_API_BASE_URL);
  }
  async addSuggestedBooks(suggestedbooks) {
    return await axios.post(SUGGESTED_BOOKS_API_BASE_URL, suggestedbooks);
  }

  async getSuggestedBooksById(id) {
    return await axios.get(SUGGESTED_BOOKS_API_BASE_URL + "/viewbook/" + id);
  }

  async updateSuggestedBooks(suggestedbooks, id) {
    return await axios.put(SUGGESTED_BOOKS_API_BASE_URL + '/update/' + id, suggestedbooks);
  }

  async deleteSuggestedBooks(id) {
    return await axios.delete(SUGGESTED_BOOKS_API_BASE_URL + "/deletebook/" + id);
  }
}
export default new SuggestedBooksService();