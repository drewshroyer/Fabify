export const login = (userData) => {
  return axios.post("/api/users/login", userData);
};


export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/user",
    data: { user },
})
  }

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session",
    })
  }
