import React from "react";
import { useNavigate } from "react-router-dom";

function ContactListItem({ contact }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/contact/${contact.id}`);
  };

  return (
    <div>
      <article className="contactListArticle" onClick={handleClick}>
        <h4>
          {contact.firstName} {contact.lastName}
        </h4>
      </article>
    </div>
  );
}

export default ContactListItem;
