import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.getWay';
import { AlertGateway } from './alert/alert.gateway';
import { AlertController } from './alert/alert.controller';



@Module({
  imports: [],
  controllers: [AppController, AlertController],
  providers: [AppService,ChatGateway, AlertGateway],
})
export class AppModule {}

