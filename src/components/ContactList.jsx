import React from "react";
import { useContext } from "react";
import { ApiContext } from "../App";
import ContactListItem from "./ContactListItem";

function ContactList() {
  const { data } = useContext(ApiContext);
  const { isLoading } = useContext(ApiContext);

  if (isLoading) return <div></div>;

  return (
    <div>
      {data.map((contact, index) => (
        <ContactListItem key={index} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
