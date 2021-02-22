const defaultOptions = {
  from: "./src",
  to: "./dest",
};

function copy(options) {
  // Let's merge default options and options
  const allOptions = { ...defaultOptions, ...options };

  // todo: Implementation of the rest
}

//#region Types
type Options = {
  from: string;
  to: string;
};
//#endregion
