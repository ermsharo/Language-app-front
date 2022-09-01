import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

export const CreateUserRequest = (loginInfo) => {
  const [post, setPost] = useState(null);

  const createUserRoute = "http://localhost:5000/auth/singup";
  axios
    .post(createUserRoute, {
      title: "Hello World!",
      body: "This is a new post.",
    })
    .then((response) => {
      setPost(response.data);
    });
};
