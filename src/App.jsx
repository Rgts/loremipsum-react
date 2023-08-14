import "./App.css";
import Content from "./components/Content";
import Title from "./components/Title";
import Description from "./components/Description";

function App() {
  return (
    <>
      <div className="container">
        <h1>Lorem</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          accusamus totam sapiente doloribus libero suscipit modi, cupiditate
          maxime dolores autem numquam id odio repudiandae ex iusto animi
          corporis delectus cumque quaerat optio vel rem veritatis! Dolores eos
          tempore dolorem accusantium veritatis quis amet magni dignissimos,
          velit modi facilis dolor commodi veniam quasi, magnam qui voluptas
          labore delectus esse cupiditate! Ipsum dolores architecto dolorum quae
          quas cumque similique nisi magni velit quam dicta, veritatis quis aut
          modi natus, praesentium possimus error. Veritatis quis amet magni
          dignissimos, velit modi facilis dolor commodi veniam quasi, magnam qui
          voluptas labore delectus esse cupiditate! Ipsum dolores architecto
          dolorum quae quas cumque similique nisi magni velit quam dicta,
          veritatis quis aut modi natus, praesentium possimus error.
        </p>
      </div>
      <br></br>

      <Content content={"Salut tout le monde"} className="container">
        <Title />
      </Content>
    </>
  );
}

export default App;
