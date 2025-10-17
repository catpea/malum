# malum

Welcome to **malum**! 🍏✨

malum is a magical, beginner-friendly library for building and manipulating dynamic string chains and command paths with JavaScript. It’s more than just a string builder — it’s a tool for constructing expressive, chainable APIs and pipelines that feel like magic.

---

## 🚀 What is it?

**malum** lets you build up a sequence of strings or command-like objects by simply chaining property accesses and function calls. Under the hood, it uses JavaScript Proxies to let you write code that reads almost like natural language.

---

## 💡 Why is it special?

- **Chain property names** to build sequences (like path segments or command steps)
- **Call as a function** to attach arguments or options to the last step
- **Convert to arrays, objects, or strings** for flexible output
- **Iterate** over your chain using standard JavaScript techniques
- **Beginner-friendly** and fun to experiment with

---

## 🎉 Quick Examples

```js
import Malum from "malum";

// Basic chaining
const path = new Malum();
console.log([...path.home.user.documents]);
// Output: ["home", "user", "documents"]

// Add options/arguments to steps
const chain = new Malum();
console.log(
  chain.git("clone", {depth:1}).cd("my-repo").npm("install").toArray()
);
// Output: [
//   { name: "git", opt: {depth:1}},
//   { name: "cd",  opt: "my-repo"},
//   { name: "npm", opt: "install"}
// ]

// Build shell-like command pipelines
const malum = new Malum({arg:true});
const cmd =
  malum
    .cat('package.json')
    .grep('name')
    .tr('[:lower:]', '[:upper:]')
    .toObjects()
    .map(command => `${command.name} ${command.arg.map(s=>`'${s}'`).join(' ')}`)
    .join(' | ');

console.log(cmd);
// Output: cat 'package.json' | grep 'name' | tr '[:lower:]' '[:upper:]'
```

---

## ✨ Key Features

- **Chain property names** (`.foo.bar.baz`) to create a sequence.
- **Call as a function** (`.foo('option')`) to add options to the last property.
- **Flexible output**:
  - `toArray()` — Get the chain as an array.
  - `toObjects()` — Get as objects with names/options/args.
  - `toString()` — Get as a pretty JSON string.
  - Iteration — `[...malum]` gives you the chain as a simple array.
- **Clear the chain**: `.clear()` resets everything for reuse.
- **Works with async and sync iteration.**
- **Automatic smart conversion**: Use in a string context or as a number (chain length).

---

## 🛠️ API Reference

### Initialization

```js
const malum = new Malum(options);
```
- `options.arg` (default: `false`): If `true`, stores all arguments when calling as a function.

### Chaining

- Access properties: `malum.foo.bar`
- Call as a function to add options/arguments: `malum.foo('option')`

### Methods & Properties

- `toArray()` — Returns the chain as an array.
- `toObjects()` — Returns the chain as array of `{name, opt, arg}` objects.
- `toString()` — JSON string of the chain.
- `clear()` — Empties the chain.
- `length` — Number of steps in the chain.

### Iteration

- `[...malum]` — Spread into an array.
- `for (const step of malum) { ... }` — Iterate steps.
- `for await (const step of malum) { ... }` — Async iteration.

---

## 🧪 Example Tests

malum comes with tests so you can see how it works in practice:

```js
import Malum from "malum";
import assert from "node:assert";

// Basic path
const root = new Malum();
assert.deepEqual([...root.first.second.third], ["first", "second", "third"]);
```

---

## 🤗 Contributing

Contributions, issues, and suggestions are always welcome! Feel free to open an issue or PR.

---

## 📄 License

See [LICENSE](LICENSE) for details.

---

malum — Build your path, your way, with magic. 🍏
