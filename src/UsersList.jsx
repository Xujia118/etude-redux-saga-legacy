import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "./actions";

function UsersList() {
  const users = useSelector((state) => state.myFirstReducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersFetch())
  }, [dispatch])

  return (
    <div>
      <h1>UsersList</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              {user.name} {user.name} {user.email}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
