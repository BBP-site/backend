import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';

import { UpdateContactDto } from './dto/update-contact.dto';

import { ContactsService } from './contacts.service';
import { Contact } from './schemas/contact.schema';

import { AuthGuard } from 'src/auth/auth.guard';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  contacts(): Promise<Contact[]> {
    return this.contactsService.contacts();
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  updateContacts(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ): Promise<Contact> {
    return this.contactsService.updateContacts(id, updateContactDto);
  }
}
