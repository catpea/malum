import Malum from "./index.js";

import { describe, it } from "node:test";
import assert from "node:assert";
import { inspect } from 'node:util';

describe("Path operations", () => {


  it("should do basic path processing", (t) => {
    const root = new Malum();
    const expected = ["first", "second", "third", "fourth"];
    const actual = [...root.first.second.third.fourth];
    // const actual = [...root.first.second("Meow").third.fourth];
    assert.deepEqual(expected, actual, "The arrays are not equal");
  });


  it("should do option path processing", (t) => {
    const root = new Malum();
    const expected = ["first", { name: "second", opt: "Meow" }, "third", { name: "fourth", opt: { of: "July" } }, "fifth"];
    const actual =  root.first.second("Meow").third.fourth({ of: "July" }).fifth.toArray() ;
    assert.deepEqual(expected, actual, "The arrays are not equal");
  });


  it("should do commands", (t) => {
    const malum = new Malum({arg:true});
    const expected = `cat 'package.json' | grep 'name' | tr '[:lower:]' '[:upper:]'`;
    const actual =
      malum
        .cat('package.json')
        .grep('name')
        .tr('[:lower:]', '[:upper:]')
        .toObjects().map(command=>`${command.name} ${command.arg.map(s=>`'${s}'`).join(' ')}`)
        .join(' | ');

    // console.log('>>>>>>>>>>>>>>', inspect(actual, { compact: true, depth: 5, breakLength: 80 }));
    assert.equal(expected, actual, "The arrays are not equal");
  });
});
