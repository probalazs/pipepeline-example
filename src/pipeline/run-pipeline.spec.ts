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
    const middleware: Middleware = (context) => {
      context['new_data'] = 'new_data';
    };
    const middlewares = [middleware] as Middleware[];
    const command = (ctx: Context) => {
      command_ctx = { ...ctx };
    };

    runPipeline(context, middlewares, command);

    expect(command_ctx).toEqual({ data: 'adat', new_data: 'new_data' });
  });
});
