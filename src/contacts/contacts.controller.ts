import { Body, Controller, Get, Put } from '@nestjs/common';

import { ContactDto } from './dto/contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  contacts(): ContactDto {
    return this.contactsService.contacts();
  }

  @Put()
  updateContacts(@Body() updateContactDto: UpdateContactDto): ContactDto {
    return this.contactsService.updateContacts(updateContactDto);
  }
}
