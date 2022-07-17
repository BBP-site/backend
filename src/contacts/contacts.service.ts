import { Injectable } from '@nestjs/common';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact, TContactDocument } from './schemas/contact.schema';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name) private contactsModel: Model<TContactDocument>,
  ) {}

  async contacts(): Promise<Contact[]> {
    return this.contactsModel.findOne();
  }

  async updateContacts(
    id: string,
    contacts: UpdateContactDto,
  ): Promise<Contact> {
    return this.contactsModel.findByIdAndUpdate(id, contacts, { new: true });
  }
}
