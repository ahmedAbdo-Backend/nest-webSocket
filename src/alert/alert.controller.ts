import { Body, Controller, Post } from '@nestjs/common';
import { AlertGateway } from './alert.gateway';

@Controller('alert')
export class AlertController {
  constructor(private alertDateWay: AlertGateway) {}
  @Post()
  sendToAlertToAll(@Body() dto: { message: string }) {
    console.log(dto);
    this.alertDateWay.sendToAll(dto.message);
    return dto;
  }
}
