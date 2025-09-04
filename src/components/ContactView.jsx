import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { ApiContext } from "../App";
import { useParams } from "react-router-dom";

function ContactView() {
  const fetchUserUrl =
    "https://boolean-uk-api-server.fly.dev/JakubMroz4/contact/";
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(fetchUserUrl + id)
      .then((res) => res.json())
      .then((result) => {
        setContact(result);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("CONTACT", contact);
  }, [contact]);

  if (isLoading) return <div></div>;

  return (
    <div>
      <h3>
        {contact.firstName} {contact.lastName}
      </h3>
      <h5>{contact.jobTitle}</h5>
      <p>
        {contact.street}, {contact.city}
      </p>
    </div>
  );
}

export default ContactView;
