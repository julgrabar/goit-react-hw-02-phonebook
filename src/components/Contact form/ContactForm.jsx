import {Component} from "react";
import { Form } from "./ContactForm.styled";

export class ContactForm extends Component{
    state = {
        name: ""
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        const {name} = e.currentTarget;
        console.log(e.currentTarget.value)
        this.setState({
            name: e.currentTarget.value
        })
        // return name.value;
    }

    render(){
        const {name} = this.state;
    return(
        <Form onSubmit = {this.handleSubmit}>
            <label>
            <p>Name</p>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value = {name}
                onChange = {this.handleSubmit}
                />
            </label>
            <button type="submit">Add contact</button>
        </Form>
    )}
}