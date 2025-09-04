import React from "react";
import ContactList from "./ContactList";

function Dashboard() {
  return (
    <div className="contactList">
      <ContactList />

      <div>
        <h3>Create a new contact</h3>
      </div>
    </div>
  );
}

export default Dashboard;
