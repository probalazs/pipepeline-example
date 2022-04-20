export type Context = {[key:string]:any};

export type Next = () => void;

export type Middleware = (context: Context, next: Next) => void;

export type Command = (context: Context) => void;
