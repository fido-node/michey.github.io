import * as React from 'react';
import { Contact, ContactType } from '../../../src/contacts/contacts';

import ContactsButtons from './ContactsButtons';

type Props = {};
const contactMe: Contact[] = [
  { id: 'fido_node', type: 'tg' },
  { id: 'iam@fidonode.me', type: 'mail' },
];

const socialButtons: Contact[] = [
  { id: '@fido_node', type: 'mastodon' },
  { id: 'alex-mihailov-870448187', type: 'linkedin' },
  { id: 'michey', type: 'github' },
  { id: 'fido_node', type: 'twitter' },
];

export default ({}: Props) => (
  <>
    <div className={'flex flex-col flex-row-2 '}>
      <span className={'text-2xl text-center py-4'}>Contact me via: </span>
      <ContactsButtons contacts={contactMe} />
    </div>
    <div className={'flex flex-col flex-row-2'}>
      <span className={'text-2xl text-center py-4'}>Social buttons: </span>
      <ContactsButtons contacts={socialButtons} />
    </div>
  </>
);
