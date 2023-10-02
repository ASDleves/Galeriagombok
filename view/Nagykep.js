class NagyKepView{
    #kep
    constructor(kep, szuloElem){

        this.#kep=kep
        this.szuloElem=szuloElem

        this.#htmlOsszeRak()
        this.balGombElem=$("#bal")
        this.jobbGombElem=$("#jobb")
        this.nagyKephelye=$("#nagykephelye")
        this.balGombElem.on("click",()=>{
            this.#sajatEsemenykezelo("bal")
        })
        this.jobbGombElem.on("click",()=>{
            this.#sajatEsemenykezelo("jobb")
        })
    }
    nagykepCsere(kep){
        this.nagyKephelye.attr("src",kep)
    }
    #sajatEsemenykezelo(esemenynev){
        const esemenyem = new CustomEvent(esemenynev)
        window.dispatchEvent(esemenyem)
    }

    #htmlOsszeRak() {
        let txt = `
          <div class="button-container">
            <button id='bal'> LEFT </button>
          </div>
          <div class="card">
            <div class="card-body"><img id="nagykephelye" src="${this.#kep}" class="img-thumbnail" alt="virag"></div>
          </div>
          <div class="button-container">
            <button id='jobb'> RIGHT </button>
          </div>
        `;
      
        this.szuloElem.html(txt);
      }
}
export default NagyKepView 