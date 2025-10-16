#!/usr/bin/env node
import Malum from "./index.js";

const malum = new Malum({ arg: true });

const result = malum

  .sleep(1).echo(1)
  .sleep(2).echo(2)
  .sleep(3).echo(3)

  .toObjects()
  .map(command => `${command.name} ${command.arg.join(' ')}`)
  .join('; ') + ';';

console.log(result);
