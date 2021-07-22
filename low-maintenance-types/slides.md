---
marp: true
theme: gaia
---

# Low maintenance Types

TypeScript Netherlands

@ddprrt

fettblog.eu - [oida.dev](https://oida.dev) - typescript-book.com

---

![bg width:100%](./images/01.jpg)

## @ddprrt

---

![bg width:cover](./images/02.jpg)

## <span style="color: white; text-decoration: none;">typescript-book.com</span>

---

# So... TypeScript!

When I started with TypeScript, I actually hated it!

TypeScript came in 3 waves...
1. Java developers told me this wis the way to go!
2. Angular told me this is the way to go!

---

![bg width:70%](images/04.gif)

---

![bg width:100%](./images/06.jpg)

## <span style="color: white; text-decoration: none;">Anders Hejlsberg</span>

---

# The third wave ...

1. TypeScript is closer to JavaScript than I thought!
2. It's a thin, thin layer on top of JavaScript

---

![bg width:100%](./images/06.jpg)

## <span style="color: white; text-decoration: none;"><em>It's not that JavaScript<br/>has no type system.<br/>There was just no way<br/>to formalize it</em></span>

---

### 🤯 TypeScript IS JavaScript

### 🧪 Language innovation through ECMAScript

### 🔬 Innovate in Type System through use cases

### 🔧 Tooling as primary citizen

---

## Formalize JavaScript

We need
- Structural Typing
- Bendable Type System
- Dynamic Static Typing
- Low Maintenance Types


---

## Let's code!

### Example 1: Dynamic Static Typing

```typescript
app.get("/api/user/:userID", (req, res) => {
  if(req.method === "POST") {
    res.status(200).send();
  }
});
```
---

## More code!

### Example 2: Low Maintenance Types

```typescript
type Toy = BoardGame | Puzzle | Doll;

type ToyKind = "boardgame" | "puzzle" | "doll";

type GroupedToys = {
  boardgame: Toy[];
  puzzle: Toy[];
  doll: Toy[];
};
```

---

## A little bit more

### Example 3: No Maintenance Types

```typescript
const defaultOptions = {
  from: "./src",
  to: "./dest",
};

function copy(options) { /* ... */ }
```

---

## Resources

- Book: [TypeScript in 50 Lessons](https://typescript-book.com)
- Article: [Low maintenance types](https://fettblog.eu/low-maintenance-types-typescript/)
- Article: [Dynamic static typing](https://smashingmagazine.com/2021/01/dynamic-static-typing-typescript/)
- Series: [Tidy TypeScript](https://fettblog.eu/archive/tidy-typescript/)
- Guide: [Advanced TypeScript](https://fettblog.eu/advanced-typescript-guide/)

---

_fin_

@ddprrt