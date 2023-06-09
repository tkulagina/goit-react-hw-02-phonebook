import { Component } from 'react';

import {ContactList} from 'components/ContactList/ContactList';
import {Form} from 'components/Form/Form';
import {Filter} from 'components/Filter/Filter';
import data from 'data/data';
import shortid from 'shortid';
import s from './PhoneBook.module.css';


export class PhoneBook extends Component {
  state = {
    contacts: data,

    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const normalizedName = data.name.toLocaleLowerCase().split(' ').join('');
    const ableToAddName = contacts.some(
      contact =>
        contact.name.toLocaleLowerCase().split(' ').join('') === normalizedName
    );
    const normalizedNumber = data.number.split('-').join('');
    const ableToAddNumber = contacts.some(
      contact => contact.number.split('-').join('') === normalizedNumber
    );
    if (ableToAddName || ableToAddNumber) {
      alert(
        `${ableToAddName ? data.name : data.number} is already in contacts`
      );
      return;
    }
    this.addContact(data);
  };

  addContact = contactNew => {
    const contactAdd = {
      id: shortid.generate(),
      name: contactNew.name,
      number: contactNew.number,
    };
    this.setState(prevState => ({
      contacts: [contactAdd, ...prevState.contacts],
    }));
  };

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== e.target.id
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const vizibleContacts = this.getVisibleContacts();

    return (
      <div className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h1 className={s.title}>Contacts</h1>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          vizibleContacts={vizibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}