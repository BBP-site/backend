import {Body, Controller, Put, Get, Param, UseGuards} from '@nestjs/common';
import { UpdateCollegiumDto } from "./dto/update-collegium.dto";
import {Collegium} from "./schemas/collegium.schema";
import {CollegiumService} from "./collegium.service";
import {AuthGuard} from "../auth/auth.guard";

@Controller('collegium')
export class CollegiumController {
    constructor(private collegiumService: CollegiumService) {}

    @Get()
    getAll(): Promise<Collegium[]> {
        return this.collegiumService.getAll();
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    updateCollegium(@Param('id') id: string, @Body() updateCollegiumDto: UpdateCollegiumDto): Promise<Collegium> {
        return this.collegiumService.updateCollegium(id, updateCollegiumDto);
    }
}
