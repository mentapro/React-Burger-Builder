import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    userName: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };
  render() {
    return (
      <div className={styles.contactData}>
        <h4>Contact Form</h4>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="street" placeholder="Street Address" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;