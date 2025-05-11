import { useNavigate } from "react-router-dom";

export default function App() {
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
    <>
    main
    <button onClick={handleRegister}>qwe</button>
    </>
  );
}