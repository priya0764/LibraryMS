import axios from "axios";
const PUBLISHER_API_BASE_URL = "http://localhost:8081/publisher";
class PublisherService {
    async getAllPublishers(){
        return await axios.get(PUBLISHER_API_BASE_URL);
    }
    async addPublisher(publishers) {
            return await axios.post(PUBLISHER_API_BASE_URL, publishers);
      }
    
      async getPublisherById(publisherId) {
        return await axios.get(PUBLISHER_API_BASE_URL + "/id/" + publisherId);
      }
    
      async updatePublisher(publishers,publisherId) {
        return await axios.put(PUBLISHER_API_BASE_URL+ '/update/' + publisherId,publishers);
      }
    
      async deletePublisher(publisherId) {
        return await axios.delete(PUBLISHER_API_BASE_URL + "/" + publisherId);
      }
} 
export default new PublisherService();