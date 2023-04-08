import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({namespace:"/alert"})
export class AlertGateway {
  @WebSocketServer()
  server :Server
  sendToAll(message:string): string {console.log(message);
    this.server.emit("alertToClient",{type:"alert" , message})
    
    return 'Hello world!';
  }
}
