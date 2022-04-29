import { Command, Context, Middleware } from '../interface';

export type RunPipeline = (
  context: Context,
  middlewares: Array<Middleware>,
  command: Command,
) => void;

export const runPipeline: RunPipeline = (
  context,
  middlewares,
  command,
) => {
  if (middlewares.length === 0){
    command(context);
    return;
  }
  const [middleware, ...rest_middlewares] = middlewares;
  middleware!(context, () => runPipeline(context, rest_middlewares, command));
};
