import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import css from './App.module.css';
const { Component } = require('react');

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { number, name } = this.state;
    const repeatName = this.state.contacts.find(item => {
      return item.name === name;
    });
    if (repeatName) {
      alert(`${name} is already in your contacts!`);
      this.reset();
      return;
    } else {
      const newContact = { id: nanoid(), name, number };
      this.setState(() => {
        return { contacts: [...this.state.contacts, newContact] };
      });
    }
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  onBtnDelete = e => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== e.target.id
        ),
      };
    });
  };

  handleFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  render() {
    const { contacts } = this.state;
    const filterContact = contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <div action="" className={css.phonebook}>
          <h1 className={css.phonebookTitle}>Phonebook</h1>
          <ContactForm
            onChange={this.handleChange}
            valueNumber={this.state.number}
            value={this.state.name || ''}
            onSubmit={this.handleSubmit}
          />
          <h1 className={css.contactTitle}>Contacts</h1>
          <Filter onChange={this.handleFilter} value={this.state.filter} />
          <ContactList
            contacts={filterContact}
            onBtnDelete={this.onBtnDelete}
          />
        </div>
      </div>
    );
  }
}
