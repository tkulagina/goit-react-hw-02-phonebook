import PropTypes from 'prop-types';
import css from './ItemContact.module.css';

export const ItemContact = props => {
  const { contact, onDeleteContact } = props;
  return (
    <li className={css.item}>
      <p className={css.text}>
        {contact.name}: {contact.number}
      </p>
      <button
        id={contact.id}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
        className={css.btn}
      >
        Delete
      </button>
    </li>
  );
};
ItemContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};