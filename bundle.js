(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){


const frequencies = new Set([0]);

const fs = require('fs');

function question1() {
	fs.readFile('./input.txt', (err, data) => {
        const changes = data
        .toString().split("\n")
        .map((x) => parseInt(x));


        let frequency = 0;
        let i = 0;

        while (true) {
            if (changes.length === i) {
                i = 0;
                continue
            }
            
            frequency += changes[i];

        if (frequencies.has(frequency)) {
            break
        }

        frequencies.add(frequency)

        i++
}
    console.log(frequency)
    return frequency;
})}

question1()
},{"fs":1}]},{},[2]);
