import { nanoid } from 'nanoid';
import { ListBtn, ListItem, ListWrapper } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  return (
    <ListWrapper>
      {filterContacts.map(contact => {
        return (
          <ListItem key={nanoid()}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <ListBtn
              type="button"
              onClick={() => {
                handleDeleteContact(contact.id);
              }}
            >
              Delete
            </ListBtn>
          </ListItem>
        );
      })}
    </ListWrapper>
  );
};
