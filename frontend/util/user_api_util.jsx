export const fetchUsers = () => {
  return $.ajax({
    url: "/api/users",
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    url: `/api/users/${id}`,
  });
};
