import { withdraw } from "../services/trybebank.js";
import { expect } from 'chai';
import sinon from 'sinon';
import readline from 'readline-sync';
import fs from 'fs/promises';


describe('Testes de saque', () => {
  describe('Ao tentar sacar 25 reais', () => {
    const fakeAccount = {
      "id": 1659043003907,
      "value": 100,
      "coin": "BRL",
      "createdAt": "2022-07-28T21:16:43.907Z"
    };

    before(() => {
      sinon.stub(readline, 'questionFloat').returns(25);
      sinon.stub(fs, 'writeFile').resolves();
      sinon.stub(fs, 'readFile').resolves(JSON.stringify(fakeAccount));
    });

    after(() => {
      readline.questionFloat.restore();
      fs.writeFile.restore();
      fs.readFile.restore();
    });


    it('retorna id numero, valor depositado, tipo da moeda', async () => {
      const result = await withdraw();

      expect(result.id).a('number');
      expect(result.value).equal(75);
      expect(result.coin).equal('BRL');
    });
  })
})