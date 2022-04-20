import { Command, Context, Middleware } from '../interface';

export type RunPipeline = (
  context: Context,
  middlewares: Array<Middleware>,
  command: Command,
) => void;

export const runPipeline: RunPipeline = (
  context,
  _middlewares,
  command,
) => {
    command(context);
};
