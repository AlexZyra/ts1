"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
class CurrencyConverter {
    convert(amount, fromCurrency, toCurrency) {
        return Math.random() * amount;
    }
}
class CurrencyAdapter {
    constructor() {
        this.currencyConverter = new CurrencyConverter();
    }
    convert(amount, fromCurrency, toCurrency) {
        return this.currencyConverter.convert(amount, fromCurrency, toCurrency);
    }
}
const financialSystem = new CurrencyAdapter();
const convertedAmount = financialSystem.convert(100, 'USD', 'EUR');
console.log(`Converted Amount: ${convertedAmount}`);
class Mp3PlayerImplementor {
    playFile() {
        console.log('Playing MP3 file');
    }
}
class WavPlayerImplementor {
    playFile() {
        console.log('Playing WAV file');
    }
}
class MusicPlayerAbstraction {
    constructor(implementor) {
        this.implementor = implementor;
    }
}
class Mp3PlayerAbstraction extends MusicPlayerAbstraction {
    constructor(implementor) {
        super(implementor);
    }
    play() {
        console.log('Loading MP3 file');
        this.implementor.playFile();
    }
}
class WavPlayerAbstraction extends MusicPlayerAbstraction {
    constructor(implementor) {
        super(implementor);
    }
    play() {
        console.log('Loading WAV file');
        this.implementor.playFile();
    }
}
const mp3Implementor = new Mp3PlayerImplementor();
const wavImplementor = new WavPlayerImplementor();
const mp3Player = new Mp3PlayerAbstraction(mp3Implementor);
mp3Player.play();
const wavPlayer = new WavPlayerAbstraction(wavImplementor);
wavPlayer.play();
