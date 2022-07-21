import { Module } from '@nestjs/common';

import { MongooseModule } from "@nestjs/mongoose";
import { Collegium, CollegiumSchema } from "./schemas/collegium.schema";
import {CollegiumController} from "./collegium.controller";
import {CollegiumService} from "./collegium.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Collegium.name, schema: CollegiumSchema}
        ])
    ],
    providers: [ CollegiumService ],
    controllers: [ CollegiumController ],
})
export class CollegiumModule {}
