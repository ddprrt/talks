type ToyBase = {
  name: string;
  price: number;
  quantity: number;
  minimumAge: number;
};

type BoardGame = ToyBase & {
  kind: "boardgame";
  players: number;
};

type Puzzle = ToyBase & {
  kind: "puzzle";
  pieces: number;
};

type Doll = ToyBase & {
  kind: "doll";
  material: "plastic" | "plush";
};

type Toy = BoardGame | Puzzle | Doll;

function printToy(toy: Toy) {
  switch (toy.kind) {
    case "boardgame":
      // todo
      break;
    case "puzzle":
      // todo
      break;
    case "doll":
      // todo
      break;
    default:
      console.log(toy);
  }
}

type ToyKind = "boardgame" | "puzzle" | "doll";

type GroupedToys = {
  boardgame: Toy[];
  puzzle: Toy[];
  doll: Toy[];
};

//#region VideoGame
type VideoGame = ToyBase & {
  kind: "videogame";
  system: "NES" | "SNES" | "Mega Drive" | "There are no more consoles";
};
//#endregion

//#region CheatSheet
/*

type ToyKind = Toy["kind"]

type GroupedToys = {
  [Kind in ToyKind]: Toy[]
}

type GroupedToys = {
  [Kind in ToyKind]: GetKind<Toy, Kind>[]
};

type GetKind<Group, Kind> = Extract<Group, { kind: Kind }>

*/
//#endregion
