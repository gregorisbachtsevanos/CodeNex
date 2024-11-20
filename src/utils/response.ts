import { Response } from 'express';
import { Readable } from 'stream';

export function redirectTo(
  res: Response,
  url: string,
  statusCode: number = 302
): void {
  res.redirect(statusCode, url);
}

export function streamResponse(res: Response, readableStream: Readable): void {
  readableStream.pipe(res);
}

export function handleConditionalResponse<T>(
  res: Response,
  condition: boolean,
  successData: T,
  errorMessage: string
): void {
  if (condition) {
    res.status(200).json({ success: true, data: successData });
  } else {
    res.status(400).json({ success: false, message: errorMessage });
  }
}
