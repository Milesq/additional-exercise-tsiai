const { readFileSync, writeFileSync } = require('fs');
const { parse } = require('@babel/parser')
const { default: generate } = require('@babel/generator')

const brokenFilePath = './node_modules/parcel-plugin-svelte/lib/svelte-asset.js';

const code = readFileSync(brokenFilePath, { encoding: 'utf-8' })
const ast = parse(code)

ast
  .program
  .body[1]
  .declarations[0]
  .init
  .arguments[0]
  .value = 'svelte/compiler'

writeFileSync(brokenFilePath, generate(ast).code);
