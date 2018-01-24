import {A} from './a'

export class B {
    constructor() {
        // if the following line is present, web/ab.js will contain b_B. If not, the class is only named B (It should only be B I would expect)
        console.log(A.staticVar);
    }
}

console.log(A.staticVar);