import axios from "axios";

export default {
   
    fetchAllNotes() {
        return axios.get("/all/items");
    },

    removeNote(noteId) {
        return axios.put(`/delete/item`);
    },

    searchItem(item_to_search) {
        return axios.post(`/search/item`);
    },
   
}
