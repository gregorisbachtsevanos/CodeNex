import { Request, Response, NextFunction } from 'express';
import NodeCache from 'node-cache';

// Extend the Response interface to include sendResponse
declare global {
  namespace Express {
    interface Response {
      sendResponse?: (body: any) => Response;
    }
  }
}

export function cacheMiddleware(cache: NodeCache) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const key = req.originalUrl;
    const cachedData = cache.get(key);

    if (cachedData) {
      res.json(cachedData);
    } else {
      // Temporarily store the original res.json function and cast res to preserve the full Response type
      res.sendResponse = res.json.bind(res);

      // Override res.json to add caching, while keeping the full Response functionality
      res.json = ((body: any): Response => {
        cache.set(key, body, 60); // Cache for 60 seconds
        return res.status(200).send!(body); // Call the original json method
      }) as Response['json'];

      next();
    }
  };
}

export function errorHandlerMiddleware() {
  return (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  };
}

export function logRequests() {
  return (req: Request, res: Response, next: NextFunction): void => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  };
}
