import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [UserController],
  providers: [UserService],
  // imports: [
    // TypeOrmModule.forFeature([
      
    // ])
  // ]
  imports:[
    ConfigModule
  ]
  
})
export class UserModule {}
