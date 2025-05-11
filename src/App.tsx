import Qwe from './assets/protopyte_img/Frame 38.png';
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
 

  return (
    <main className="p-3 flex flex-col items-center gap-36">
      <Header></Header>
      <Hero></Hero>
      <img src={Qwe} className='w-full' />
    </main>
  );
}