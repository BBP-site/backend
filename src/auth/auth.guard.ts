import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('canActivate');
    const request = context.switchToHttp().getRequest();
    const bearer = request.headers.authorization;
    if (!bearer || !bearer.length) return false;
    const token = bearer.substr(bearer.indexOf(' ') + 1);
    return this.authService.verifyToken(token);
  }
}
