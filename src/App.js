import "./styles/App.css";
import OnHead from "./Header";
import MainZone from "./Main";
import Content from "./Content";
import { useState } from "react";

function App() {
  const [darkButon, setdarkButon] = useState(true);
  const [search, setsearch] = useState("");
  const [dataStore, setdata] = useState([]);
  const [tranding, setranding] = useState([]);
  const [contact, setContact] = useState(false);

  /* console.log("imprimo desde app", dataStore); */
  console.log(dataStore);

  return (
    <div className="App">
      <div className="B">
        <OnHead darkButon={darkButon} setdarkButon={setdarkButon} />
        <MainZone
          dataStore={dataStore}
          setdata={setdata}
          search={search}
          setsearch={setsearch}
          darkButon={darkButon}
          setdarkButon={setdarkButon}
          setranding={setranding}
          setContact={setContact}
        />
        <Content
          dataStore={dataStore}
          setdata={setdata}
          search={search}
          setsearch={setsearch}
          darkButon={darkButon}
          setdarkButon={setdarkButon}
          tranding={tranding}
          contact={contact}
        />
      </div>
    </div>
  );
}

export default App;
