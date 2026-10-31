import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const html = read('index.html');
const js = read('assets/js/app.js');
const css = read('assets/css/styles.css');
const schedule = JSON.parse(read('data/exams.json'));
const wishes = JSON.parse(read('data/daily-wishes.json'));

assert.match(html, /assets\/css\/styles\.css/, 'HTML should link the extracted stylesheet');
assert.match(html, /assets\/js\/app\.js/, 'HTML should link the extracted JavaScript');
assert.equal(schedule.exams.length, 11, 'the schedule must preserve all 11 exams');
assert.equal(Object.keys(wishes).length, 11, 'daily-wishes reference should include every course');
assert.equal(schedule.exams.at(-1).course, 'MTH121', 'MTH121 should remain the last scheduled paper');
assert.equal(schedule.exams.at(-1).date, '2026-11-13', 'the final exam date should remain intact');
assert.equal(schedule.exams.at(-1).end, '11:00', 'the scheduled final end time should remain 11:00');
assert.match(js, /TRIGGER;RELATED=END:PT0S/, 'MTH121 calendar end alarm should exist');
assert.match(js, /Your scheduled MTH121 paper time has ended/, 'calendar end alarm should be neutral');
assert.match(js, /CONGRATULATIONS, MY BABE JOYCE AYENAJEH/, 'timed in-app congratulations should remain in source');
assert.match(js, /Numbers 6:24–26 \(KJV\)/, 'the closing KJV blessing should remain in source');
assert.doesNotMatch(html, /A finish-line celebration is waiting|A SPECIAL MOMENT FOR JOYCE|Final paper: MTH121/, 'initial visible HTML should not hint at the final surprise');
assert.match(css, /@media/, 'responsive CSS should exist');
console.log('Project validation passed: assets, 11 exams, 11 daily wishes, final reveal content and no initial visible spoiler hint.');
