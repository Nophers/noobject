/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

//import users from '../users.json'; disabled due to wrong error throw
import { AuthDto } from './dto';
// eslint-disable-next-line
const users = require("../users.json")

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}


  signinLocal(dto: AuthDto) {
    
    const user = users.find(_user => _user.email === dto.email);
    if(!user) 
    throw new UnauthorizedException('Login Data incorrect')

    if (user.password !== dto.password) 
    throw new UnauthorizedException('Data incorrect')

    return this.signUser(user.id, user.email, 'user'); 
  }
  // signupLocal(dto: AuthDto) {}
  


  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({ sub: userId, email, type: type})
  }
}
