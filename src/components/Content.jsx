import Title from "../components/Title";

const Content = (props) => {
  console.log(props);

  // Ici, la className du p return par Paragraph dépend de la props classname reçue par ce dernier
  return <div className={props.className}>{props.content}</div>;
};

export default Content;
