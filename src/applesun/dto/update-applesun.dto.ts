import { PartialType } from '@nestjs/mapped-types';
import { CreateApplesunDto } from './create-applesun.dto';

export class UpdateApplesunDto extends PartialType(CreateApplesunDto) {}
