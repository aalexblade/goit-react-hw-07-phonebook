import { nanoid } from 'nanoid';
import { ListBtn, ListItem, ListWrapper } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const { data } = useGetContactsQuery();

  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(selectFilter);

  const handleDeleteContact = id => {
    deleteContact(id);
  };

  if (!data) {
    return;
  }

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = data.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  return (
    <ListWrapper>
      {filterContacts.map(contact => {
        return (
          <ListItem key={nanoid()}>
            <p>
              {contact.name}: {contact.phone}
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
