const TextList = (props) => {
    const items = props.gifs.map((itemData) => {
      return <Item url={itemData.url} />;
    });
    return <div className="text-container">{items}</div>;
  };
  const Item = (props) => { //Item: acepta la URL que se encuentra dentro de cada valor devuleto por la API. Utiliza la URL como fuente para el elementeo de imagen
    return (
      <div className="gif-item">
        <img src={props.url} />
      </div>
    );
  };
  export default TextList;