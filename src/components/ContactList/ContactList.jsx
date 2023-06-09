import PropTypes from 'prop-types';
import {ItemContact} from 'components/ItemContact/ItemContact';
import css from './ContactList.module.css';

export const ContactList = props => {
  const { vizibleContacts, onDeleteContact } = props;

  return (
    <ul className={css.list}>
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
