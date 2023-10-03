import Modell from "../model/model.js";
import NagyKepView from "../view/Nagykep.js";
import KiskepView from "../view/Kiskep.js";
import { KEPLISTA } from "../model/adat.js";

class Controller {
  constructor() {
    const MODELL = new Modell();

    const NAGYKEPVIEW = new NagyKepView(MODELL.getAktkep(), $(".Nagykep"));
    const KISKEPVIEW = new KiskepView(KEPLISTA, $(".Kiskep"), NAGYKEPVIEW); 

    $(window).on("jobb", () => {
      MODELL.jobb();
      let aktKep = MODELL.getAktkep();
      console.log(aktKep);
      NAGYKEPVIEW.nagykepCsere(aktKep);
      NAGYKEPVIEW.updatePictureName(getPictureName(aktKep));
  });

  $(window).on("bal", () => {
      MODELL.jobb();
      let aktKep = MODELL.getAktkep();
      console.log(aktKep);
      NAGYKEPVIEW.nagykepCsere(aktKep);
      NAGYKEPVIEW.updatePictureName(getPictureName(aktKep));
  });



  
  }
  
}
export function getPictureName(path) {
  const parts = path.split("/");
  return parts[parts.length - 1];
    }
export default Controller;
