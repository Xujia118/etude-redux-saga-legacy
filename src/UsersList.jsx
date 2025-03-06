import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser, postUser, filterByGender } from "./actions";

function UsersList() {
  const filteredUsers = useSelector(state => state.myFirstReducer.filteredUsers)
  const dispatch = useDispatch();

  const [localUser, setLocalUser] = useState({
    username: "",
    email: "",
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

  function handleSelect(e) {
    const gender = e.target.value;
    dispatch(filterByGender(gender));
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
              <select name="gender-filter" onChange={handleSelect}>
                <option value="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
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

      {/* <select name="local-user" onChange={handleChange}>
        {users.map((user) => (
          <option key={user.id} value={user.username}>
            {user.username}
          </option>
        ))}
      </select> */}
      {/* <button onClick={handleClick}>Select User</button> */}

      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="username"
          value={localUser.username}
          placeholder="Username..."
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={localUser.email}
          placeholder="Email..."
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default UsersList;
