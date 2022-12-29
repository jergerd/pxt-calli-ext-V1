/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#14de46" weight=100
namespace hello {
    //% block
    export function helloWorld() {
        basic.showString("Hello World")
        basic.pause(2000)
    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function number42(): number {
        let answer = 38+4
        return answer 
    }
}
