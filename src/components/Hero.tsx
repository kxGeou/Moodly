import { useNavigate } from "react-router-dom";
import HeroBgc from '../assets/patterns/pattern.png';
export default function Hero() {

  const hero = ["Osobisty panel ze statystykami", "Codzienna ankieta do przemyśleń", "Prywatność danych"] 
  const navigate = useNavigate();
  function handleRegister() {
    const userName = localStorage.getItem("UserName");
    if (!userName) {
      navigate("/register");
    } else {
      navigate("/userTab");
    }
  }
    return (
        <section className="flex flex-col items-center justify-between relative w-full px-2 gap-8 lg:flex-row lg:items-center lg:justify-around lg:h-[70vh] lg:gap-0"> 
            <div className="flex flex-col gap-4 items-center text-center lg:max-w-[40%] lg:items-start">
                <h2 className="text-[2rem] font-bold text-brown leading-[120%] lg:text-[3rem] lg:text-left">Twój Personalny Dziennik Nastroju</h2>
                <p className="text-lg font-light text-light-brown leading-[130%] lg:text-xl lg:text-left lg:leading-[140%]">Moddly pomoże ci podsumować twoje samopoczucie oraz oczyścić głowe z przemyśleń za pomocą codziennej ankiety oraz notatki</p>
                <button onClick={handleRegister} className="bg-brown mt-12 rounded-xl px-2 py-3 w-full text-white cursor-pointer lg:mt-8 lg:w-[75%]">Sprawdź Moodly</button>
            </div>

            <div>
                <ul>
                    {hero.map((h, index) => (
                        <li key={index} className="flex flex-col justify-start items-center text-brown gap-6 text-lg lg:flex-row lg:mt-6">
                        <span className="bg-green w-6 h-6 rounded-full flex justify-center items-center mt-8 lg:mt-0">
                            <i className="fa-solid fa-plus text-white text-lg"></i>
                        </span>
                            {h}
                        </li>
                    ))}
                </ul>
            </div>


            <img src={HeroBgc} alt="circle pattern" className="absolute z-[-1] right-0 w-[50rem]"/>
        </section>
    )
}