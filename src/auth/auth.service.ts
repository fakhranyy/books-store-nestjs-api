import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userSrv: UserService,
        private jwtService: JwtService
      ) {}
    
      async signIn(
        email: string,
        password: string,
      ): Promise<{ access_token: string }> {
        const user = await this.userSrv.findOne(email);
        if (user?.password !== password) {
          throw new UnauthorizedException();
        }
        const payload = { sub: user.id , username: user.username };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }}
