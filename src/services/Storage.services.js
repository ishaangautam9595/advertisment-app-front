const Storage = {
    setToken: (data) => localStorage.setItem("token", data),
    getToken: () => localStorage.getItem("token"),
    setUserData: (data) => localStorage.setItem("userData", JSON.stringify(data)),
    getUserData: () => JSON.parse(localStorage.getItem("userData")),
    setLocation: (data) => localStorage.setItem("location",  JSON.stringify(data)),
    getLocation: () => JSON.parse(localStorage.getItem("location")),
    setCategory: (data) => localStorage.setItem("category", JSON.stringify(data)),
    getCategory: () => JSON.parse(localStorage.getItem("category")),
    removeData: (key) => localStorage.removeItem(key),
    clearAllData: () => localStorage.clear(),
  
  };
  
  export default Storage;