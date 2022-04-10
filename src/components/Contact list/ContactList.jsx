import {ContactsItem} from 'components/Contact item/ContactsItem';
import { List } from './ContactsList.styled';

export const ContactList = ({ contacts, onDeleteBtn }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem 
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteBtn={onDeleteBtn}
        />
      ))}
    </List>
  );
};
