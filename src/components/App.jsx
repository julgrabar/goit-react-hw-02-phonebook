import {Component} from "react";
import { ContactForm } from "./Contact form/ContactForm";
import { ContactList } from "./Contact list/ContactList";
import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ""
  }

  addNewContact = ({name, number}) => {
    const contact = {
      id: nanoid(8),
      name,
      number
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
    
  }

  onFilterInput = (e) => {
    this.setState({
      filter: e.currentTarget.value
    })
  }

  render(){
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact}/>

        <h2>Contacts</h2>
        <Filter
        onChange = {this.onFilterInput}
        text = {this.state.filter}
        />
        <ContactList contacts={this.state.contacts}/>
      </div>
    )}
};
