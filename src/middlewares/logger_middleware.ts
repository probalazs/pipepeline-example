import { Middleware } from '../interface';

export const loggerMiddleware: Middleware = (context, next) => {
  console.log('Start');
  try {
    next();
  } catch (error: Error) {
    console.log('Error');
    throw(error);
  }
  console.log('End');
};
