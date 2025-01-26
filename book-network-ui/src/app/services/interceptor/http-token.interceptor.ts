import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../token/token.service';
import {inject} from '@angular/core';

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.token; // Access token from TokenService
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token,
      },
    });
    return next(authReq); // Proceed with the modified request
  }

  return next(req); // Proceed with the original request if no token
};
