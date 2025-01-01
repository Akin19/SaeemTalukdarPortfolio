const WorksData = ({ item }) => {
  const handleImageClick = () => {
    if (item.link) {
      // যদি লিংক থাকে, তাহলে লিংক নতুন ট্যাবে ওপেন হবে
      window.open(item.link, "_blank");
    } else {
      // লিংক না থাকলে ছবিটি নতুন ট্যাবে ওপেন হবে
      window.open(item.image, "_blank");
    }
  };
  return (
    <div className="work__card">
      <img
        onClick={handleImageClick}
        src={item.image}
        className="work__img"
        alt={item.title}
      />
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
