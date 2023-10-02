import Modell from "../model/Model.js";
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
    });

    $(window).on("bal", () => {
      MODELL.bal();
      let aktKep = MODELL.getAktkep();
      console.log(aktKep);

      NAGYKEPVIEW.nagykepCsere(aktKep);
    });
  }
}

export default Controller;