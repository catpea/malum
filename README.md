# malum
---

```
npm i malum
```

### Shell

```JavaScript

const malum = new Malum({ arg: true });
const expected = `cat 'package.json' | grep 'name' | tr '[:lower:]' '[:upper:]'`;

const actual = malum
  .sleep(1).echo(1)
  .sleep(2).echo(2)
  .sleep(3).echo(3)
  .toObjects()
  .map(command => `${command.name} ${command.arg.join(' ')}`)
  .join('; ') + ';';
```

```sh

sleep 1; echo 1; sleep 2; echo 2; sleep 3; echo 3

```

```JavaScript

const malum = new Malum({ arg: true });
const expected = `cat 'package.json' | grep 'name' | tr '[:lower:]' '[:upper:]'`;

const actual = malum
  .cat('package.json')
  .grep('name')
  .tr('[:lower:]', '[:upper:]')
  .toObjects()
  .map(command => `${command.name} ${command.arg.map(s => `'${s}'`).join(' ')}`)
  .join(' | ');

console.assert(actual, expected); // Output will match `expected`

```

```sh

cat 'package.json' | grep 'name' | tr '[:lower:]' '[:upper:]'

```

### .toArray()
```JavaScript

    const root = new Malum();
    const actual = root .first .second("Meow") .third .fourth({ of: "July" }) .fifth .toArray();
    console.log(actual);
    // [
    //   "first",
    //   { name: "second", opt: "Meow" },
    //   "third",
    //   { name: "fourth", opt: { of: "July" } },
    //   "fifth"
    // ];

```

### .toObjects()
```JavaScript

    const root = new Malum();
    const actual = root .first .second("Meow") .third .fourth({ of: "July" }) .fifth .toObjects();
    console.log(actual);
    // [
    //   { name: "first", opt:{}}
    //   { name: "second", opt: "Meow" },
    //   { name: "third", opt:{}}
    //   { name: "fourth", opt: { of: "July" } },
    //   { name: "fifth", opt:{}}
    // ];

```
