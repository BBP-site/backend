import { Injectable } from '@nestjs/common';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Contacts, ContactsDocument } from "./schemas/contacts.schema";

@Injectable()
export class ContactsService {
  constructor(@InjectModel(Contacts.name) private contactsModel: Model<ContactsDocument>) {}

  async contacts(): Promise<Contacts[]> {
    return this.contactsModel.find().exec();
  }

  async updateContacts(id: string, contacts: UpdateContactDto): Promise<Contacts> {
    return this.contactsModel.findByIdAndUpdate(id, contacts, {new: true})
  }
}
