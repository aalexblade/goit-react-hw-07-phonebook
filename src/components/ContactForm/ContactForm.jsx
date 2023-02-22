import { useAddContactMutation } from 'redux/contactsSlice';
import {
  NameForm,
  FormLabel,
  FormInput,
  SubmitBtn,
} from './ContactForm.styled';
import React, { useState } from 'react';
import { useGetContactsQuery } from 'redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleNameChange = e => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmitBtn = evt => {
    evt.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      return window.alert(`${name} is already in contacts.`);
    }

    addContact({ name, phone });

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <NameForm onSubmit={handleSubmitBtn}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="phone"
          value={phone}
          onChange={handleNameChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </NameForm>
  );
};
