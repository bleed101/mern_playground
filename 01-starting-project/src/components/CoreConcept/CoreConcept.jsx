import "./CoreConcept.css";

export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

//If you want to reduce unnecessary props reuse you can opt below destructuring.

// function CoreConcept({ img, title, description }) {
//   return (
//     <li>
//       <img src={img} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }
