import {Component} from "react";
import { Formik, Field } from "formik";

import { StyledForm } from "./ContactForm.styled";

export class ContactForm extends Component{

    initialValues = {
        name: "",
        number: ""
    }
    
    handleSubmit = (values, {resetForm}) =>{
        this.props.onSubmit(values)
        resetForm()    
    }

    render(){
     
    return(
        <Formik onSubmit = {this.handleSubmit} initialValues={this.initialValues}>
        <StyledForm >
            <label>
            <p>Name</p>
            <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </label>

            <label>
            <p>Number</p>
            <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </label>
            <button type="submit">Add contact</button>
        </StyledForm>
        </Formik>
    )}
}