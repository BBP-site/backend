import { Body, Controller, Get, Param, Put } from '@nestjs/common';

import { UpdateContactDto } from './dto/update-contact.dto';

import { ContactsService } from './contacts.service';
import { Contacts } from "./schemas/contacts.schema";

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  contacts(): Promise<Contacts[]> {
    return this.contactsService.contacts();
  }

  @Put(':id')
  updateContacts(
      @Param('id') id: string,
      @Body() updateContactDto: UpdateContactDto
  ): Promise<Contacts> {
    return this.contactsService.updateContacts(id, updateContactDto);
  }
}
