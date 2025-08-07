import { Controller, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //Para generar un controlador en CLI
  /* 
    nest generate controller nombre_controlador
    nest g co nombre_controlador
  */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getPost() {
    return "Desde @Post"
  }

  //reto
  @Put()
  getPut() {
    return "Desde @Put"
  }

  @Patch()
  getPatch() {
    return "Desde @Patch"
  }
}