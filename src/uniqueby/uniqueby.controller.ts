import { Controller } from '@nestjs/common';
import { UniquebyService } from './uniqueby.service';

@Controller('uniqueby')
export class UniquebyController {
  constructor(private readonly uniquebyService: UniquebyService) {}
}
