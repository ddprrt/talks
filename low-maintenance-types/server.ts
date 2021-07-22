//#region APP
const app = {
  get,
};
//#endregion

// The Function we want to type
function get(path, callback) {
  // tbd
}

app.get("/api/user/:userID", (req, res) => {
  if (req.method === 30) {
    res.status("20").send(`Hello ${req.params.userId}`);
  }
});

app.get("/api/user/:userID", (req, res) => {
  if (req.method === "POS") {
    res.status(20).send(`Hello ${req.params.userId}`);
  }
});

app.get("/api/user/:userID", (req, res) => {
  if (req.method === "POST") {
    res.status(200).send(`Hello ${req.params.userId}`);
  }
});

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

//#region Idenity
function identity<T>(inp: T): T {
  return inp;
}
//#endregion

//#region Cheatsheet
/*
function get<Par extends string = string>(
  path: string,
  callback: CallbackFn<"GET", Par>
) {
  // to be implemented
}

type CallbackFn<Met extends Methods, Params> = (
  req: ServerRequest<Met, Params>,
  reply: ServerReply
) => void;

type ServerRequest<Met extends Methods, Params> = {
  method: Met;
  params: Record<Params, string>;
};

function get(
  path: string,
  callback: CallbackFn<"GET">
) {
  // to be implemented
}

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

function get<Path extends string = string>(
  path: Path,
  callback: CallbackFn<"GET", ParseRouteParams<Path>>
) {
  // to be implemented
}

type ParseRouteParams<Rte> = Rte extends `${string}/:${infer P}/${infer Rest}`
  ? P | ParseRouteParams<`/${Rest}`>
  : Rte extends `${string}/:${infer P}`
  ? P
  : never;

type CallbackFn<Met extends Methods, Params> = (
  req: ServerRequest<Met, Params>,
  reply: ServerReply
) => void;

type ServerRequest<Met extends Methods, Params> = {
  method: Met;
  params: Record<Params, string>;
};
*/
//#endregion
