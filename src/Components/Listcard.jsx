const ListCard = ({ props }) => {
  return (
    <li className="card">
      <img src={props.img_url} alt={props.name} />
      <div className="card-content">
        <h2 className="card-heading">{props.name}</h2>
        <p className="card-description">
          <strong>Description:</strong> {props.description}
        </p>
        <p>
          <strong>Cast:</strong> {props.cast}
        </p>
        <p>
          <strong>Genre:</strong> {props.genre}
        </p>

        <div className="card-footer">
          <span className={parseFloat(props.rating) > 8.5 ? "gold" : "green"}>
            ⭐ {props.rating}
          </span>
          <a href={props.watch_url} target="_blank" rel="noreferrer">
            <button className="btn">Watch Now</button>
          </a>
        </div>
      </div>
    </li>
  );
};

export default ListCard;
