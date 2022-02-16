/* eslint-disable prettier/prettier */
import { Controller, Get, Type, UseGuards, Request, Logger } from '@nestjs/common';
import { AppService } from './app.service';
// import { AuthGuard } from "@nestjs/passport";
import { GetCurrentUserById } from "./utils"
import { JwAuthGuard } from './utils/guards/JwtGuard.guard';

/*
 interface RequestType {
  req: string, 
  user: string,
  userId: number,
  getHello: string,
  Guards: void
}
*/

@Controller()
export class AppController {
  logger: Logger;

  constructor(private readonly appService: AppService) {
    this.logger = new Logger();
  }

  @UseGuards(JwAuthGuard)
  @Get()
  // Replaced with Interface
  getHello(@GetCurrentUserById() userId: number): string {
    this.logger.log("Logged Auth from Localhost")
    this.logger.debug("Fetched Information")
    return this.appService.getHello(userId);
  }
}

// Error Handling
function RequestType(RequestType: Type<Error>) {
  throw new Error('Controller not active or implemented');
}

