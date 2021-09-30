import React from "react";

export default function Post({ data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
