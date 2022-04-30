#!/usr/bin/env node

const { exec } = require('child_process');

const [filters] = process.argv.slice(2);
const timeMap = {
  s: 1 / 3600,
  sec: 1 / 3600,
  m: 1 / 60,
  min: 1 / 60,
  h: 1,
  hour: 1,
};

exec(
  `git log ${filters || ''} --grep="time"`,
  (error, stdout) => {
    const lines = stdout
      .split('\n')
      .filter((it) => it.startsWith('    ') && it.includes('time:'))
      .map((it) => it.match(/time: ?(\w*)/)[1]);

    const sum = lines.reduce((acc, it) => {
      const time = timeMap[it.replace(/[0-9]*/, '')];
      return acc + parseFloat(it, 10) * time;
    }, 0);

    console.log(sum.toFixed(2) + 'h');
  }
);
