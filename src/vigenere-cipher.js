const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  constructor(isDirect) {
    this.isDirect = isDirect ?? true;
  }

  encrypt(message, key) {
    if (message === null || message === undefined) throw new Error("Incorrect arguments!");
    if (key === null || key === undefined) throw new Error("Incorrect arguments!");

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let symbol = "";

    function getIndex(index, string) {
      return (index > string.length) ? index % string.length : index;
    }

    if (message.length > key.length) {
      let keyFull = key.split("");
      let diff = message.length - key.length;
      let times = Math.ceil(diff / key.length);
      key = key.repeat(times + 1);
    }

    for (let i = 0; i < message.length; i++) {
      let messageIndex = this.alphabet.indexOf(message[getIndex(i, message)]);
      if (messageIndex === -1) {
        result += message[i];
        key = key.substring(0, i) + " " + key.substring(i);
        continue;
      }
      let keyIndex = this.alphabet.indexOf(key[getIndex(i, key)]);
      symbol = this.alphabet[(this.alphabet.length + messageIndex + keyIndex) % this.alphabet.length];

      result += symbol;
    }
    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (message === null || message === undefined) throw new Error("Incorrect arguments!");
    if (key === null || key === undefined) throw new Error("Incorrect arguments!");

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let symbol = "";

    function getIndex(index, string) {
      return (index > string.length) ? index % string.length : index;
    }

    if (message.length > key.length) {
      let keyFull = key.split("");
      let diff = message.length - key.length;
      let times = Math.ceil(diff / key.length);
      key = key.repeat(times + 1);
    }

    for (let i = 0; i < message.length; i++) {
      let messageIndex = this.alphabet.indexOf(message[getIndex(i, message)]);
      if (messageIndex === -1) {
        result += message[i];
        key = key.substring(0, i) + " " + key.substring(i);
        continue;
      }
      let keyIndex = this.alphabet.indexOf(key[getIndex(i, key)]);
      symbol = this.alphabet[(this.alphabet.length + messageIndex - keyIndex) % this.alphabet.length];

      result += symbol;
    }
    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
