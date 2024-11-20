import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export function isAuthenticated(req: Request): boolean {
  return Boolean(req?.body);
}

export function refreshJwt(
  token: string,
  secret: string,
  options: jwt.SignOptions
): string {
  const decoded = jwt.verify(token, secret);
  return jwt.sign(decoded as jwt.JwtPayload, secret, options);
}

export function generateOtp(length: number = 6): string {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
}
