import { Logger } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({ cors: true , namespace:"/chat"} ) //  if you want to change the default port for  the node app
export class ChatGateway implements OnGatewayInit  , OnGatewayConnection , OnGatewayDisconnect{
    @WebSocketServer()
    server :Server;
    private logger:Logger = new Logger("chatGateway")
    afterInit() {
        console.log("WebSocket gateway initialized");
        this.logger.verbose("WebSocket gateway initialized");
    }
    handleConnection(client: Socket, ...args: any[]) {
      console.log("connected",client.id);
    }
    handleDisconnect(client: Socket) {
        console.log("disconnected",client.id);

    }

  @SubscribeMessage("chatToServer")
  handleMessage(client:Socket,message:{sender:string,room:string,message:String}) {
     this.server.to(message.room).emit("chatToClient", message)
    // this.server.emit("chatToClient", payload); // to send the message to everyone 
  }

  @SubscribeMessage("joinRoom")
  handleJoinRoom(client:Socket,message:{sender:string,room:string,message:String}) {

   client.join(message.room)
  }
}