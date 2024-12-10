import { useNavigate } from "react-router-dom";
function C() {
  const nav = useNavigate();
  return (
    <div>
      <div>C</div>
      <button onClick={() => nav(-1)}>Back</button>
    </div>
  );
}

export default C;
