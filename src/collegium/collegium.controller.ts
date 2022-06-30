import {Body, Controller, Put, Get, Param} from '@nestjs/common';
import { UpdateCollegiumDto } from "./dto/update-collegium.dto";
import {Collegium} from "./schemas/collegium.schema";
import {CollegiumService} from "./collegium.service";

@Controller('collegium')
export class CollegiumController {
    constructor(private collegiumService: CollegiumService) {}

    @Get()
    getAll(): Promise<Collegium[]> {
        return this.collegiumService.getAll();
    }

    @Put(':id')
    updateCollegium(@Param('id') id: string, @Body() updateCollegiumDto: UpdateCollegiumDto): Promise<Collegium> {
        return this.collegiumService.updateCollegium(id, updateCollegiumDto);
    }
}
