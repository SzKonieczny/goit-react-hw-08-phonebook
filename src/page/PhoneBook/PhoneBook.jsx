import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';

import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { PhonebookForm } from '..//..//components/PhonebookFrom/PhonebookFrom';
import { PhonebookContainer, Title, TitleCont } from 'components/app.styled';

export default function PhoneBook() {
  return (
    <>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      <Title>PhoneBook</Title>

      <PhonebookContainer>
        <PhonebookForm />
      </PhonebookContainer>
      <TitleCont>Contacts</TitleCont>
      <Filter />
      <ContactList />
      <Toaster />
    </>
  );
}
