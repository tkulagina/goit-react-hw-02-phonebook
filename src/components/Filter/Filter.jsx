import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChangeFilter }) => (
  <div className={css.wrapper}>
    <label className={css.label}>Find contacts by name</label>
    <input
      type="text"
      name="filter"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      className={css.input}
      value={value}
      onChange={onChangeFilter}
    />
  </div>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
