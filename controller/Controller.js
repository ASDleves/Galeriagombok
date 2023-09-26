import Modell from "../model/Model.js";
import NagyKepView from "../view/Nagykep.js";

class Controller {
  constructor() {
        const MODELL= new Modell();

        const NAGYKEPVIEW=new NagyKepView(MODELL.getAktkep(), $(".Nagykep"))
        $(window).on("jobb",()=>{
          MODELL.jobb()
          let aktKep=MODELL.getAktkep()
          console.log(aktKep)

          NAGYKEPVIEW.nagykepCsere(aktKep)
        })
        $(window).on("bal",()=>{
          MODELL.jobb()
          let aktKep=MODELL.getAktkep()
          console.log(aktKep)

          NAGYKEPVIEW.nagykepCsere(aktKep)
        })
    };

  }

export default Controller;  