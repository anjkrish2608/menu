import axios from "axios";

export default {
  //users
  // Gets all posts
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the post with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the post with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a post to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  loginUser:function(loginData){
    return axios.post("/api/user/login",loginData);
  },
  //menus
  //gets all menus w userID
  findMenus:function(userID){
    return axios.get("api/menu/"+userID+"/menu");
  }
};
