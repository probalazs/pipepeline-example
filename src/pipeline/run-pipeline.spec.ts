import { Context, Middleware } from '../interface';
import { runPipeline } from './run-pipeline';

describe('Run Pipeline', () => {
  it('should call the command', () => {
    const context = { data: 'adat' };
    const middlewares = [] as Middleware[];
    const command = jest.fn();

    runPipeline(context, middlewares, command);

    expect(command).toHaveBeenCalledWith(context);
  });

  it('should call first middleware with initial context', () => {
    const context = { data: 'adat' };
    const middleware = jest.fn();
    const middlewares = [middleware] as Middleware[];
    const command = () => {};

    runPipeline(context, middlewares, command);

    expect(middleware).toHaveBeenCalledWith(context, expect.anything());
  });

  it('should call command after middleware', () => {
    let command_ctx;
    const context = { data: 'adat' };
    const middleware: Middleware = (context, next) => {
      context['new_data'] = 'new_data';
      next()
    };
    const middlewares = [middleware] as Middleware[];
    const command = (ctx: Context) => {
      command_ctx = { ...ctx };
    };

    runPipeline(context, middlewares, command);

    expect(command_ctx).toEqual({ data: 'adat', new_data: 'new_data' });
  });

  it('should call 2 middlewares', () => {
    let command_ctx;
    const context = { data: 'adat' };
    const middleware: Middleware = (context, next) => {
      context['new_data'] = 'new_data';
      next()
    };
    const middleware2: Middleware = (context, next) => {
      context['other_data'] = 'other_data';
      next()
    };
    const middlewares = [middleware, middleware2] as Middleware[];
    const command = (ctx: Context) => {
      command_ctx = { ...ctx };
    };

    runPipeline(context, middlewares, command);

    expect(command_ctx).toEqual({ data: 'adat', new_data: 'new_data' , other_data: 'other_data'});
  });

  it('should call 2 middlewares in correct order', () => {
    let command_ctx;
    const context = { data: 'adat', order_data: [] };
    const middleware: Middleware = (context, next) => {
      context['order_data'].push(1);
      next()
    };
    const middleware2: Middleware = (context, next) => {
      context['order_data'].push(2);
      next()
    };
    const middlewares = [middleware, middleware2] as Middleware[];
    const command = (ctx: Context) => {
      command_ctx = { ...ctx };
    };

    runPipeline(context, middlewares, command);

    expect(command_ctx).toEqual({ data: 'adat', order_data: [1, 2]});
  });
});
