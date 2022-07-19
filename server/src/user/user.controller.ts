import { Controller, Get, Param } from '@nestjs/common';
import { CurrentUser } from './user.decorator';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  // @Auth()
  @Get('profile')
  async getProfile(@CurrentUser('id') id: number) {
    return this.userService.byId(id)
  }

  // @Auth()
  @Get('by-id/:id')
  async getUser(@Param('id') id: string) {
    return this.userService.byId(+id)
  }
}
