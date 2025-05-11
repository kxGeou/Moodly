// import { useNavigate } from "react-router-dom";

import Header from "./components/Header";

export default function App() {
  // const navigate = useNavigate();
  // function handleRegister() {
  //   const userName = localStorage.getItem("UserName");
  //   if (!userName) {
  //     navigate("/register");
  //   } else {
  //     navigate("/userTab");
  //   }
  // }

  return (
    <main className="p-3">
      <Header></Header>
    {/* <button onClick={handleRegister}>qwe</button> */}
    </main>
  );
}