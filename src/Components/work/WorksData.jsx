const WorksData = ({ item }) => {
  return (
    <div className="work__card">
      <img src={item.image} className="work__img" alt="" />
      <h3 className="work__title">{item.title}</h3>

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="work__button"
        >
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      )}
    </div>
  );
};

export default WorksData;
