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
        <section className="flex flex-col justify-between items-center relative w-full px-12"> 
            <div className="w-[35rem] flex flex-col gap-2">
                <h2 className="text-[3rem] font-bold text-brown">Twój Personalny Dziennik Nastroju</h2>
                <p className="text-xl font-light text-light-brown">Moddly pomoże ci podsumować twoje samopoczucie oraz oczyścić głowe z przemyśleń za pomocą codziennej ankiety oraz notatki</p>
                <button onClick={handleRegister} className="bg-brown mt-6 rounded-3xl px-4 py-5 w-[75%] text-white cursor-pointer">Sprawdź Moodly</button>
            </div>

            <div>
                <ul>
                    {hero.map((h, index) => (
                        <li key={index} className="flex justify-start items-center-safe text-brown gap-4 text-xl">
                        <span className="bg-green w-8 h-8 rounded-full flex justify-center items-center my-4">
                            <i className="fa-solid fa-plus text-white"></i>
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