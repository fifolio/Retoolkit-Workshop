import React from "react";
import { useSelector } from "react-redux";

export const UsersView = () => {
  const users = useSelector((initialState) => initialState.user.users);
  return (
    <div>
      <h2>List of Users</h2>
      {users}
    </div>
  );
};
