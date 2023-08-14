// Mon composant Sentence est plus dynamique que Title :  je peux choisir le nom et l'age affiché.

const Description = (props) => {
  // Les composants peuvent être appelés avec des arguments (qu'on appelle props), sou forme d'attributs.
  // L'argument reçu est un objet contenant des paires clef-valeur correspondant aux props données lors de l'appel.
  console.log(props); // {age: 27, name: "Tom"}
  return <p>Je m'appelle {props.text}</p>;
};

export default Description;
