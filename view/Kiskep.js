import { getPictureName } from "../controller/Controller.js";
class KiskepView {
    constructor(kiskepLista, szuloElem, nagyKepView) {
      this.kiskepLista = kiskepLista;
      this.szuloElem = szuloElem;
      this.nagyKepView = nagyKepView;
      
      this.#htmlOsszeRak();
      
    }
    updatePictureName(name) {
      $("#picture-name").text(name);
  }
    #htmlOsszeRak() {
      let txt = '';
      this.kiskepLista.forEach((kiskep, index) => {
        txt += `
          <img
            src="${kiskep}"
            alt="Kiskep"
            class="kiskep"
            data-index="${index}"
          />
        `;
      });
  
      this.szuloElem.html(txt);
  
      this.szuloElem.find('.kiskep').on('click', (event) => {
        const index = $(event.currentTarget).data('index');
        const selectedKep = this.kiskepLista[index];
        this.nagyKepView.nagykepCsere(selectedKep);
      });
      this.szuloElem.find('.kiskep').on('click', (event) => {
        console.log("Image clicked!"); 
        const imgSrc = event.target.getAttribute("src");
        this.updatePictureName(getPictureName(imgSrc));
    });
    }
  }
  
  export default KiskepView;