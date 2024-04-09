export default function TabButton({ children, onClick }) {
  return (
    <li>
      <button onClick={onClick}>
        {children}
        {/*children prop will fetch item from element wrapped in component
                like : <TabButton>xyz</TabButton> */}
      </button>
    </li>
  );
}
