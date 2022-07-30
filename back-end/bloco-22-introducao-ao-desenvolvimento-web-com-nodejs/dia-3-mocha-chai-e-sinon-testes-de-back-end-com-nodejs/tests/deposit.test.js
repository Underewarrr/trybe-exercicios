import { deposit } from "../services/trybebank.js";
import { expect } from 'chai';
import sinon from 'sinon';
import readline from 'readline-sync';
import fs from 'fs/promises';

describe('Testes de depósito', () => {
  describe('Ao tentar depositar 100 reais', () => {

    before(() => {
      sinon.stub(readline, 'questionFloat').returns(100);
      sinon.stub(fs, 'writeFile').resolves();
    });

    after(() => {
      readline.questionFloat.restore();
      fs.writeFile.restore();
    });

    it('retorna id numero, valor depositado, tipo da moeda', async () => {
      const result = await deposit();

      expect(result.id).to.be.a('integer');
      expect(result.value).equal(100);
      expect(result.coin).equal('BRL');
    });
  })
})