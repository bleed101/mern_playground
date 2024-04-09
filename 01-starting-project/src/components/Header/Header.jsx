import reactImg from "../../assets/react-core-concepts.png"; //importing this way will render the entites properly.
import "./Header.css";

const reactDescription = ["Fundamental", "Crucial", "Core"];
const randomDesc = (reactDescription) =>
  reactDescription[Math.floor(Math.random() * (reactDescription.length + 1))];

export default function Header() {
  // const a = randomDesc();
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      {/* when app is deployed import path get lost when building and image don't render. you see at top we import 
      different way. */}
      <h1>React Essentials</h1>
      <p>
        {randomDesc(reactDescription)} React concepts you will need for almost
        any app you are going to build!
      </p>
    </header>
  );
}
