import {KEPLISTA } from "./adat.js"

class Modell{
    #lista=[]
    #id
    constructor(){
        this.#lista=KEPLISTA
        this.#id=0;
    }
    
    getList(){
        return this.#lista
    }
    getAktkep(){
        return this.#lista[this.#id]
    }
    jobb(){
        this.#id++
        if (this.#id>=this.#lista.length){
            this.#id = 0
            
        }
    }
    bal(){
        this.#id--
        if (this.#id<0){
            this.#id = this.#lista.length-1
            
        }
    }
}
export default Modell