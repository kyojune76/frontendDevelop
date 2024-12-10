import { useNavigate } from "react-router-dom";
function B() {
  const nav = useNavigate();
  return (
    <div>
      <div>B</div>
      <button onClick={() => nav("/A")}>Apage이동</button>
    </div>
  );
}

export default B;
