import { Middleware } from "../interface";
import { runPipeline } from "./run-pipeline"

describe('Run Pipeline', () => {
  it('should call the command', () => {
    const context = {data: "adat"};
    const middlewares = [] as Middleware[];
    const command = jest.fn();

    runPipeline(context, middlewares, command);

    expect(command).toHaveBeenCalledWith(context);
  })

  it('should call first middleware with initial context', () => {
    const context = {data: "adat"};
    const middleware = jest.fn();
    const middlewares = [middleware] as Middleware[];
    const command = () => {};

    runPipeline(context, middlewares, command);

    expect(middleware).toHaveBeenCalledWith(context, expect.anything());
  })

  it('should call command after middleware', () => {
    const context = {data: "adat"};
    const middleware: Middleware = (context) => {context["new_data"] = 'new_data'};
    const middlewares = [middleware] as Middleware[];
    const command = jest.fn();

    runPipeline(context, middlewares, command);

    expect(command).toHaveBeenCalledWith({data: "adat", new_data: 'new_data'});
  })
})
