---
marp: true
theme: gaia
---

# Dynamic Static Typing

Laravel Meetup - Feburary 2021

@ddprrt

fettblog.eu - [oida.dev](https://oida.dev) - typescript-book.com

---

![bg width:100%](./images/01.jpg)

## @ddprrt

---

# So... TypeScript!

When I started with TypeScript, I actually hated it!

TypeScript came in 3 waves...
1. Java developers told me this wis the way to go!
2. Angular told me this is the way to go!

---

<!-- _color: white -->


![bg width:100%](./images/06.jpg)

## Anders Hejlsberg

---

# The third wave ...

1. TypeScript is closer to JavaScript than I thought!
2. It's a thin, thin layer on top of JavaScript

---

<!-- _color: white -->

![bg width:cover](./images/02.jpg)

## typescript-book​ .com

---

<!-- _color: white -->


![bg width:100%](./images/06.jpg)

## *It's not that JavaScript<br/>has no type system.<br/>There was just no way<br/>to formalize it*

---

### 🤯 TypeScript IS JavaScript

### 🧪 Language innovation through ECMAScript

### 🔬 Innovate in Type System through use cases

### 🔧 Tooling as primary citizen

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

## Resources

- Book: [TypeScript in 50 Lessons](https://typescript-book.com)
- Article: [Low maintenance types](https://fettblog.eu/low-maintenance-types-typescript/)
- Article: [Dynamic static typing](https://smashingmagazine.com/2021/01/dynamic-static-typing-typescript/)
- Series: [Tidy TypeScript](https://fettblog.eu/archive/tidy-typescript/)
- Guide: [Advanced TypeScript](https://fettblog.eu/advanced-typescript-guide/)

---

_fin_

@ddprrt
