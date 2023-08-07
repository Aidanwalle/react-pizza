import React from "react";

function Categories() {
  const [active, setActive] = React.useState(0);

  const setButtonActive = (index) => {
    setActive(index);
  };

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li key={index}
            onClick={() => setButtonActive(index)}
            className={active === index ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
