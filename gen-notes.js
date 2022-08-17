#! /usr/bin/env node
'use strict';

const path = require('path');
const fs = require('fs/promises');

const p = (...args) => path.resolve(__dirname, ...args);

const isObj = (a) => (
  typeof a === 'object' &&
  !Array.isArray(a) &&
  a !== null
);

const flatten = (obj, prefix = '') =>
  Object.entries(obj)
    .reduce((acc, [key, val]) => {
      const _pref = `${prefix ? `${prefix}.` : ''}${key}`;
      const res = isObj(val) ? flatten(val, _pref) : { [_pref]: val };
      return { ...acc, ...res };
    }, {});

const compile = (tpl, data) =>
  Object.entries(flatten(data)).reduce(
    (acc, [key, value]) => acc.replace(
      new RegExp(`\\$\\{${key.replace(/\./g, '\.')}\\}`, 'gi'),
      value
    ),
    tpl
  );


(async () => {
  const release = JSON.parse(await fs.readFile(p('./release.json'), 'utf8'));
  const tpl = await fs.readFile(p('./template.tpl'), 'utf8');
  process.stdout.write(compile(tpl, release));
  process.exit(0);
})();