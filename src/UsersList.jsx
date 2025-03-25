import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser, postUser, getFilteredUsers } from "./actions";
import { filterUsers } from "./utils";

function UsersList() {
  const { originalUsers, filteredUsers, isLoading, error } = useSelector((state) => state.myFirstReducer);
  const dispatch = useDispatch();

  const [localUser, setLocalUser] = useState({
    username: "",
    email: "",
  });

  const [filters, setFilters] = useState({
    gender: "",
    age: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLocalUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleDelete(userId) {
    dispatch(deleteUser(userId));
  }

  function handleSumbit(e) {
    e.preventDefault();
    dispatch(postUser(localUser));
    setLocalUser({
      username: "",
      email: "",
    });
  }

  function handleFilterChange(e) {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function applyFilters() {
    const filteredUsers = filterUsers(originalUsers, filters);
    dispatch(getFilteredUsers(filteredUsers));
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  if (isLoading) {
    return <div className="loading-spinner">Loading users...</div>;
  }

  return (
    <div>
      <h1>UsersList</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>
              Gender
              <select name="gender" value={filters.gender} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </th>
            <th>
              Age
              <select name="age" value={filters.age} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36+">36+</option>
              </select>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Render with filtered users */}
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="username"
          value={localUser.username}
          placeholder="Username..."
          onChange={handleChange}
        />
        <input type="text" name="email" value={localUser.email} placeholder="Email..." onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default UsersList;
