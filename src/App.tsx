import Qwe from './assets/protopyte_img/Frame 38.png';
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
 

  return (
    <main className="flex flex-col items-center gap-8 p-2">
      <Header></Header>
      <Hero></Hero>
      {/* <img src={Qwe} className='w-full' /> */}
    </main>
  );
}