// const capitalize = require(".")
import capitalize from "."

function stringLength(s){
    if(s.length === 0)
        return "string must at least 1 character long"
    if(s.length > 10)
        return "string must not longer than 10 characters"
    return s.length
}

describe("string length", () => {
    
    it("Test length string is 10", () => {
        res = stringLength("jesdfsfdSD");

        expect(res).toBe(10)
    })

    it("Test length string is 3", () => {
        res = stringLength("jes");

        expect(res).toBe(3)
    })

    it("Test length string is 8", () => {
        res = stringLength("jesSEZRT");

        expect(res).toBe(8)
    })

    it("string is at least 1 character long", () => {

        res = stringLength("");

        expect(res).toBe("string must at least 1 character long")
    })

    it("string is not longer than 10 characters", () => {

        res = stringLength("dsfzbvcdfrt");

        expect(res).toBe("string must not longer than 10 characters")
    })
})

const reverseString = (s) => {
 
    return arrayToString(reverseArray(stringToArray(s)))
}
const stringToArray = (s) => s.split('') 

const reverseArray = (arr) => arr.reverse()

const arrayToString = (arr) => arr.join('') 


describe("reverse string", ()=> {

    it("string to array", () => {
     
        res = stringToArray("abc")

        expect(res).toEqual(['a', 'b', 'c'])
    })

    it("reverse array 1 ", () => {
     
        res = reverseArray(['a', 'b', 'c'])

        expect(res).toEqual(['c', 'b', 'a'])
    })

    it("reverse array 2 ", () => {
     
        res = reverseArray(['a', 'b', 'c', 'd', 'e', 'f'])

        expect(res).toEqual(['f', 'e', 'd', 'c', 'b', 'a'])
    })

    it("Array to string 1", () => {
     
        res = arrayToString(['a', 'b', 'c', 'd', 'e', 'f'])

        expect(res).toEqual("abcdef")
    })

    it("Array to string 1", () => {
     
        res = arrayToString(['a', 'b', 'c'])

        expect(res).toEqual("abc")
    })

    it("reverse string example 1", () => {
     
        res = reverseString("abc")

        expect(res).toBe("cba")
    })

    it("reverse string example 2", () => {
     
        res = reverseString("ab4YHJc")

        expect(res).toBe("cJHY4ba")
    })

    it("reverse string example 3", () => {
     
        res = reverseString("aaa")

        expect(res).toBe("aaa")
    })
})

class Calculator {

    add(a, b){
      return a + b
    }
    substract(a, b){
        return a - b
    }
    divide(a, b){
        return a / b
    }
}

describe("add two numbers", () => {

    calc = new Calculator()

    it("add 1 and 3", () => {

        res = calc.add(1, 3)
        
        expect(res).toBe(4)
    })

    it("add 45 and 11", () => {

        res = calc.add(45, 11)
        
        expect(res).toBe(56)
    })

    it("add 0 and -4", () => {

        res = calc.add(0, -4)
        
        expect(res).toBe(-4)
    })
})

describe("substract two numbers", () => {

    calc = new Calculator()

    it("substract 1 and 3", () => {

        res = calc.substract(1, 3)
        
        expect(res).toBe(-2)
    })

    it("substract 45 and 11", () => {

        res = calc.substract(45, 11)
        
        expect(res).toBe(34)
    })

    it("substract 0 and -4", () => {

        res = calc.substract(0, -4)
        
        expect(res).toBe(4)
    })
    
})

describe("divide two numbers", () => {

    calc = new Calculator()

    it("divide 4 and 2", () => {

        res = calc.divide(4, 2)
        
        expect(res).toBe(2)
    })
    it("divide 12 and 5", () => {

        res = calc.divide(12, 5)
        
        expect(res).toBe(2.4)
    })
    
})

describe("capitalize string", () => {

    it("test 1", () => {
    
        res = capitalize("abc")

        //  console.log(res)

        expect(res).toBe("ABC")

    })


    // it("test abc", () => {
    
    //     res = capitalize('abc')

    //     expect(res).toBe("ABC")

    // })

    // it("test 2", () => {
    
    //     res = capitalize('fhdgh')

    //     expect(res).toBe("FHDGH")

    // })
})