import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export function ContactForm({ valueNumber, value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={css.phonebook}>
      <label className={css.name} htmlFor="">
        Name
        <input
          onChange={onChange}
          type="text"
          className={css.userName}
          name="name"
          value={value}
          required
        />
      </label>
      <label className={css.number} htmlFor="">
        Number
        <input
          onChange={onChange}
          type="tel"
          className={css.userNumber}
          name="number"
          value={valueNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.addContact}>Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  valueNumber: PropTypes.string,
  value: PropTypes.string.isRequired,
};
