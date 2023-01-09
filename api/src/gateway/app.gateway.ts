import { ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { OnModuleInit, UnauthorizedException } from '@nestjs/common';
import { PixelService } from 'src/pixel/pixel.service';

@WebSocketGateway({ cors: { origin: "*" } })
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit {
  @WebSocketServer()
  public server: Server;

  constructor(
    private pixelService: PixelService,
  ) { }

  async onModuleInit() {
    console.log('ChatGateway initialized');
  }

  async handleConnection(@ConnectedSocket() socket: Socket){
    console.log('Client connected');
    const pixels = await this.pixelService.findAll();
    this.server.emit('newPixel', pixels);
  }

  async handleDisconnect(socket: Socket) {
    console.log('Client disconnected');
  }

  private disconnect(socket: Socket) {
    console.log('Client disconnected');
  }

  @SubscribeMessage('newPixel')
  async handleNewPixel(socket: Socket, payload: any) {
    console.log('newPixel', payload);
    const { x, y, color } = payload;
    const pixel = await this.pixelService.create(payload);
    console.log('handleNewPixel create', pixel);

    const pixels = await this.pixelService.findAll();
    this.server.emit('newPixel', pixels);

  }
}
