/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwAuthGuard extends AuthGuard('jwt') {
    // Name here has to be the same as in the jwt.strategy (../auth/strategy/jwt.strategy)
}