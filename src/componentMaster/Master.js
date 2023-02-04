import FirstPage from "../components/FirstPage";
import ForthPage from "../components/ForthPage";
import SecondPage from "../components/SecondPage";
import ThirdPage from "../components/ThirdPage";
export const Master = (onNext,component)=>{ 
  let components  = {
        "one":<FirstPage onNext={onNext}/>,
        "two":<SecondPage onNext={onNext} />,
        "three":<ThirdPage onNext={onNext}/>,
        "four":<ForthPage onNext={onNext}/>
        }
        return components[component];
}





