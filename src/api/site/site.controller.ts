import { Controller, Get } from '@nestjs/common'
import { SiteService } from './site.service'

@Controller('site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Get('/info')
  getSiteInfo() {
    return this.siteService.getSiteInfo()
  }
}
