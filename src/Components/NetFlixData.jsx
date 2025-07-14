import Api from "../Api/Api.json";
import ListCard from "./ListCard"; 

const NetFlixData = () => {
  return (
    <ul className="grid grid-three-cols">
      {Api.map((props) => (
        <ListCard key={props.id} props={props} />
      ))}
    </ul>
  );
};

export default NetFlixData;
