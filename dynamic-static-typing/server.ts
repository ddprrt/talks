//#region APP
const app = {
  get, post, all
};
//#endregion

// The Function we want to type
function get<P extends string>(path: P, callback: CallbackFn<"GET", ParseRouteParams<P>>) {
  // tbd
}

function post<P extends string>(path: P, callback: CallbackFn<"POST", ParseRouteParams<P>>) {
  // tbd
}

function all<P extends string>(path: P, callback: CallbackFn<Methods, ParseRouteParams<P>>) {
  // tbd
}

type CallbackFn<M extends Methods, P extends string> = (req: ServerRequest<M, P>, res: ServerReply) => void

type Methods = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEADER";

type ServerRequest<M extends Methods = Methods, P extends string = string> = {
  method: M,
  params: Record<P, string>
}

type ServerReply = {
  status(statusCode: StatusCode): ServerReply,
  send(obj?: any): void
}

type ParseRouteParams<P extends string> = 
  P extends `/${string}/:${infer Param}/${infer Rest}` ? Param | ParseRouteParams<`/${Rest}`> : 
  P extends `/${string}/:${infer Param}` ? Param : never


app.get("/api/user/:userID/orders/:orderID", (req, res) => {
  if (req.method === "GET") {
    res.status(201).send(`Hello ${req.params.userID} as well as ${req.params.orderID}`);
  }
});

app.get("/api/user/:userID", (req, res) => {
  if (req.method === "GET") {
    res.status(404).send(`Hello ${req.params.userID}`);
  }
});

app.post("/api/user/:userID", (req, res) => {
  if (req.method === "POST") {
    res.status(200).send(`Hello ${req.params.userID}`);
  }
});

app.all("*", function(req, res) {
  req.method
})


//#region StatusCode
type StatusCode =
  | 100
  | 101
  | 102
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 420
  | 422
  | 423
  | 424
  | 425
  | 426
  | 428
  | 429
  | 431
  | 444
  | 449
  | 450
  | 451
  | 499
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 509
  | 510
  | 511
  | 598
  | 599;
//#endregion






/**
 * 1. Basic Types
 * 2. Sub type!
 * 3. Generic Methods
 * 4. Generic params
 * 5. Extract generic params
 */

//#region Basic Types
/*
type ServerReply = {
  send: (obj?: any) => void;
  status: (statusCode: number) => ServerReply;
};

type ServerRequest = {
  method: string;
  params: Record<string, string>;
};

type CallbackFn = (
  req: ServerRequest,
  reply: ServerReply
) => void;

*/
//#endregion

//#region Methods
// type Methods = "GET" | "POST" | "PUT" | "DELETE";

//#endregion


//#region Cheatsheet
/*
function get<Par extends string = string>(
  path: string,
  callback: CallbackFn<"GET", Par>
) {
  // to be implemented
}

type CallbackFn<Met extends Methods, Par extends string> = (
  req: ServerRequest<Met, Par>,
  reply: ServerReply
) => void;

type IncludesRouteParams<Par extends string> =
  | `${string}/:${Par}`
  | `${string}/:${Par}/${string}`;


function get<Path extends string = string>(
  path: Path,
  callback: CallbackFn<"GET", ParseRouteParams<Path>>
) {
  // to be implemented
}

type ParseRouteParams<Rte> = 
  Rte extends `${string}/:${infer P}`
  ? P
  : never;

type ParseRouteParams<Rte> = Rte extends `${string}/:${infer P}/${infer Rest}`
  ? P | ParseRouteParams<`/${Rest}`>
  : Rte extends `${string}/:${infer P}`
  ? P
  : never;

*/
//#endregion
