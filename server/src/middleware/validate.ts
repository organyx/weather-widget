import { ZodError, ZodSchema } from 'zod';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

const validate = (schema: ZodSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const input = {
        params: req.params,
        query: req.query,
        body: req.body
      };
      schema.parse(input);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.errors[0].message, status: 'fail' });
      }
    }
  };
};

export default validate;
