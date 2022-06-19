import { Injectable } from '@nestjs/common';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
  private contactsObj = {
    address: '119121, г. Москва, Ружейный пер., д. 3',
    phones: [
      {
        number: '+ 7 (495) 755-93-63',
        desc: 'пн-пт 10:00-19:00',
      },
      {
        number: '+ 7 (495) 755-93-63',
        desc: 'круглосуточно',
      },
    ],
    email: 'info1@bbp.ru',
  };

  contacts() {
    return this.contactsObj;
  }

  updateContacts(contacts: UpdateContactDto) {
    return Object.entries(contacts).reduce((res, [key, value]) => {
      if (res[key]) {
        res[key] = value;
      }
      return res;
    }, this.contactsObj);
  }
}
