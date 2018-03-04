import Muter, {captured} from 'muter';
import {expect} from 'chai';
import ChaipluginDeveloper from '../src/chaiplugin-developer';

describe('Testing ChaipluginDeveloper', function () {
  const muter = Muter(console, 'log'); // eslint-disable-line new-cap

  it(`Class ChaipluginDeveloper says 'Hello world!'`, captured(muter, function () {
    new ChaipluginDeveloper();
    expect(muter.getLogs()).to.equal('Hello world!\n');
  }));
});
