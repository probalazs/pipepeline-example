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
    command(context);
    if (middlewares.length > 0){
        middlewares[0]!(context, () => {});
    }
};
