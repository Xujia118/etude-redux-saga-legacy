import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser, postUser } from "./actions";

function UsersList() {
  const users = useSelector((state) => state.myFirstReducer.users);
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

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>UsersList</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <span>
                {user.username} {user.email}
              </span>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          );
        })}
      </ul>

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
