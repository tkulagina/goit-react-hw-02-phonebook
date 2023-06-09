import s from './ContactList.module.css';
import {ItemContact} from 'components/ItemContact/ItemContact';
import PropTypes from 'prop-types';

export const ContactList = props => {
  const { vizibleContacts, onDeleteContact } = props;

  return (
    <ul className={s.list}>
      {vizibleContacts?.length
        ? vizibleContacts.map(contact => (
            <ItemContact
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          ))
        : ''}
    </ul>
  );
};
ContactList.propTypes = {
  vizibleContacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
