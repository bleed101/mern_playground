import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

// Header(); //this is js calling but we don't use this way in react.

function App() {
  let tabContent = "Please click the button!";
  function handledClick(clickedElement) {
    tabContent = clickedElement;
    console.log(`${tabContent} was clicked.`);
  }

  return (
    <div>
      <Header />
      {/*We call this way, can close the tag with /> no need to write closing tag sepearatly. */}
      <main>
        <section id="core-concepts">
          <ul>
            {/* Accessing entites this way from data.js for large data become tedious */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            /> */}

            {/* This is the more shorter way then the upper one here we are using spread 
            operator to speard the entites, to access the key in the CoreConcept component
            you have use exact same key used in data.js*/}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} /> */}

            {/* Therefore we use array property map which iterate each element one by one, 
            this helps in reducing the code.*/}
            {CORE_CONCEPTS.map((dataItem) => (
              <CoreConcept
                title={dataItem.title}
                description={dataItem.description}
                img={dataItem.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handledClick("Components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handledClick("JSX")}>JSX</TabButton>
            <TabButton onClick={() => handledClick("Props")}>Props</TabButton>
            <TabButton onClick={() => handledClick("State")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
