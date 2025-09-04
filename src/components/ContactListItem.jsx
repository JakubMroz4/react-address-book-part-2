import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../App";

function ContactListItem({ contact }) {
  const deleteContactUrl =
    "https://boolean-uk-api-server.fly.dev/JakubMroz4/contact/";
  const navigate = useNavigate();
  const { refreshData } = useContext(ApiContext);

  const handleClick = () => {
    navigate(`/contact/${contact.id}`);
  };

  const handleRemove = () => {
    fetch(deleteContactUrl + contact.id, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete");
        }
        return res.json(); // or res.text() if no JSON response
      })
      .then((data) => {
        console.log("Deleted successfully:", data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
    navigate("/");
    refreshData();
  };

  return (
    <div className="contactListItem">
      <article className="contactListArticle">
        <h4 onClick={handleClick}>
          {contact.firstName} {contact.lastName}{" "}
        </h4>
        <button className="editButton">Edit</button>
        <button onClick={handleRemove} className="removeButton">
          X
        </button>
      </article>
    </div>
  );
}

export default ContactListItem;
