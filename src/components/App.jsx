import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhoneBookWrapper } from './ContactForm/ContactForm.styled';

export const App = () => {
  return (
    <PhoneBookWrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </PhoneBookWrapper>
  );
};
