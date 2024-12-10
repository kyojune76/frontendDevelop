import { Route, Routes } from "react-router-dom";
import A from "./A";
import B from "./B";
import C from "./C";
import Default from "./Default";
import DynamicPage from "./DynamicPage";
import Home from "./Home";
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <h1>App Component</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/a">A</Link>
      </div>
      <div>
        <Link to="/b">B</Link>
      </div>
      <div>
        <Link to="/c">C</Link>
      </div>
      <div>
        <Link to="/Dyna">DynamicPage</Link>
      </div>
      <hr />
      {/*1. 경로라우팅 */}
      {/**/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
        <Route path="/c" element={<C />} />
        <Route path="/news/:id" element={<DynamicPage />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <div>page end</div>
    </div>
  );
}

export default App;
