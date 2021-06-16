import axios from 'axios'

const FEEDBACK_API_BASE_URL="http://localhost:8082/feedback"

class FeedbackService{
    async getAllFeedback(){
        return await axios.get(FEEDBACK_API_BASE_URL)
    }
    async writeFeedback(feedback){
        return await axios.post(FEEDBACK_API_BASE_URL,feedback)
    }
    async updateFeedback(userId,feedback){
        return await axios.put(FEEDBACK_API_BASE_URL+"/"+userId,feedback)
    }
    async deleteFeedbackById(id){
        return await axios.delete(FEEDBACK_API_BASE_URL+"/"+id)
    }
    async viewFeedbackByRating(rating){
        return await axios.get(FEEDBACK_API_BASE_URL+"/view/rating/"+rating)
    }
    async viewFeedbackById(id){
        return await axios.get(FEEDBACK_API_BASE_URL+"/"+id)
    }

}
export default new FeedbackService();