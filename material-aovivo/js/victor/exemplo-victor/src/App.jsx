import Title from "./Title";

export default function App() {

  const lista = ["Alberto", "Victor", "Carlos"]


  return (
    <div>
      <Title texto="Victor"/>
      <Title texto="Alberto"/>
      <Title texto="Carlos"/>
      
      {
        lista.map((element) => (
          <h2>{element}</h2>
        ))
      }
    </div>
  );
}
