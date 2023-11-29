"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
class CurrencyConverterV1 {
    convertCurrency(amount, fromCurrency, toCurrency) {
        // "conversion logic"
        return Math.random() * amount;
    }
}
class CurrencyConverterV2 {
    performConversion(amount, fromCurrency, toCurrency) {
        // "different conversion logic"
        return Math.random() * amount;
    }
}
class CurrencyAdapter {
    constructor(converter) {
        this.currencyConverter = converter;
    }
    convert(amount, fromCurrency, toCurrency) {
        return this.currencyConverter.convert(amount, fromCurrency, toCurrency);
    }
}
// Demonstrate with CurrencyConverterV1
const converterV1 = new CurrencyConverterV1();
const adapterV1 = new CurrencyAdapter(converterV1);
const convertedAmountV1 = adapterV1.convert(100, 'USD', 'EUR');
console.log(`Converted Amount (V1): ${convertedAmountV1}`);
// Demonstrate with CurrencyConverterV2
const converterV2 = new CurrencyConverterV2();
const adapterV2 = new CurrencyAdapter(converterV2);
const convertedAmountV2 = adapterV2.convert(100, 'USD', 'EUR');
console.log(`Converted Amount (V2): ${convertedAmountV2}`);
// interface MusicPlayerImplementor {
//     playFile(): void;
// }
// class Mp3PlayerImplementor implements MusicPlayerImplementor {
//     playFile(): void {
//         console.log('Playing MP3 file');
//     }
// }
// class WavPlayerImplementor implements MusicPlayerImplementor {
//     playFile(): void {
//         console.log('Playing WAV file');
//     }
// }
// abstract class MusicPlayerAbstraction {
//     protected implementor: MusicPlayerImplementor;
//     constructor(implementor: MusicPlayerImplementor) {
//         this.implementor = implementor;
//     }
//     abstract play(): void;
// }
// class Mp3PlayerAbstraction extends MusicPlayerAbstraction {
//     constructor(implementor: MusicPlayerImplementor) {
//         super(implementor);
//     }
//     play(): void {
//         console.log('Loading MP3 file');
//         this.implementor.playFile();
//     }
// }
// class WavPlayerAbstraction extends MusicPlayerAbstraction {
//     constructor(implementor: MusicPlayerImplementor) {
//         super(implementor);
//     }
//     play(): void {
//         console.log('Loading WAV file');
//         this.implementor.playFile();
//     }
// }
// const mp3Implementor: MusicPlayerImplementor = new Mp3PlayerImplementor();
// const wavImplementor: MusicPlayerImplementor = new WavPlayerImplementor();
// const mp3Player: MusicPlayerAbstraction = new Mp3PlayerAbstraction(mp3Implementor);
// mp3Player.play();
// const wavPlayer: MusicPlayerAbstraction = new WavPlayerAbstraction(wavImplementor);
// wavPlayer.play();
