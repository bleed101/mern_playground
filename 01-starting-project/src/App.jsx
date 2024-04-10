import { useState } from "react";

import componentImg from "./assets/components.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

// Header(); //this is js calling but we don't use this way in react.

function App() {
  // let tabContent = "Please click the button!";

  /*selectedTopic is the var name.
  setSelectedTopic is the function which will update the sate or reexecute the component when called.*/
  // const [selectedTopic, setSelectedTopic] = useState(
  //   "Please click the button!"
  // );
  const [selectedTopic, setSelectedTopic] = useState();

  function handledClick(clickedElement) {
    // tabContent = clickedElement;
    // console.log(`${tabContent} was clicked.`);

    //useState function being called.
    setSelectedTopic(clickedElement);
    /*When logging this we will not get the updated value rather it will store the previous state of component.
    selectedTopic will get updated once the App component gets fully executed.*/
    console.log(selectedTopic);
  }

  console.log("APP COMPONENT RENDERING...");

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
            {/* {CORE_CONCEPTS.map((dataItem) => (
              <CoreConcept
                title={dataItem.title}
                description={dataItem.description}
                img={dataItem.image}
              />
            ))} */}

            {/* you further more reduce the code with spread operator */}
            {CORE_CONCEPTS.map((dataItem) => (
              <CoreConcept key={dataItem.title} {...dataItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handledClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handledClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handledClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handledClick("state")}
            >
              State
            </TabButton>
          </menu>
          {/* {tabContent} 
          by using normal var we were not getting dynamic value, hence we used useState*/}
          {/* {selectedTopic} */}

          {/* If you want to use condidtion then you wrap in {true&&RHS gets executed} .
          You can move these thing to var also and use accordingly.*/}
          {!selectedTopic && (
            <p>Pleaase select the topic you wan't to know !!</p>
          )}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
