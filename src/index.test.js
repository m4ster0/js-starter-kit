import { describe, it } from 'mocha';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import fs from 'fs';

describe('sample test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have title', () => {
    const indexHtml = fs.readFileSync('./src/index.html', 'utf-8');
    const index = new JSDOM(indexHtml);
    const h1Elem = index.window.document.getElementsByTagName('h1')[0];
    expect(h1Elem.innerHTML).to.equal('Some title');
  });
});
