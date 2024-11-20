import { Request } from 'express';

export function getQueryParam<T>(
  req: Request,
  paramName: string,
  defaultValue?: T
): T | undefined {
  return (req.query[paramName] as T) || defaultValue;
}

export function parseHeaders(req: Request): Record<string, string> {
  return {
    'User-Agent': req.headers['user-agent'] || '',
    Authorization: req.headers.authorization || '',
  };
}
