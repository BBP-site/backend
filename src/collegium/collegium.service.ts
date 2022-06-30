import { Injectable } from '@nestjs/common';

import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {Collegium, CollegiumDocument} from "./schemas/collegium.schema";
import {UpdateCollegiumDto} from "./dto/update-collegium.dto";

@Injectable()
export class CollegiumService {
    constructor(@InjectModel(Collegium.name) private collegiumModel: Model<CollegiumDocument>) {};

    async getAll(): Promise<Collegium[]> {
        return this.collegiumModel.find().exec();
    }

    async updateCollegium(id: string, updateCollegiumDto: UpdateCollegiumDto): Promise<Collegium> {
        return this.collegiumModel.findByIdAndUpdate(id, updateCollegiumDto, {new: true});
    }
}
