export default function TabButton({ children, onClick, isSelected }) {
  console.log("TABBUTTON COMPONENT EXECUTING...");
  return (
    <li>
      <button className={isSelected ? "active" : null} onClick={onClick}>
        {children}
        {/*children prop will fetch item from element wrapped in component
                like : <TabButton>xyz</TabButton> */}
      </button>
    </li>
  );
}
