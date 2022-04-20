export type Context = {[_: string]: any};

export type Next = () => void;

export type Middleware = (context: Context, next: Next) => void;
