import React from "react";

const Avatar = () => {
  const user = {
    // In the Avatar component, we define the user object with properties like name, imageUrl, and imageSize.
    name: "Christopher Robin",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6YMQLTJQKHu_ptClOW3VNFTP1KRLYSuTAmCe8JN1bKRL42b2AemxD_jp-b8s7cl3r_o&usqp=CAU",
    imageSize: 90,
  };
  return (
    // we use curly braces {} to access the values of the user object and display them. For example, {user.name} displays the user's name, and {user.imageUrl} displays the user's image.
    <div>
      <h2>{user.name}</h2>
      <img src={user.imageUrl} alt={user.name} width={user.imageSize} />
    </div>
  );
};

export default Avatar;

// Curly braces in JSX are used to embed JavaScript expressions. They allow you to insert dynamic values or evaluate expressions within the JSX markup.
