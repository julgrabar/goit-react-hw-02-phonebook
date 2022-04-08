import {Component} from "react";
import { ContactForm } from "./Contact form/ContactForm";

export class App extends Component {
  state = {
    contacts: []
  }

  render(){
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        {/* <ContactList /> */}
      </div>
    )}
};
