import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import TreeList from "./Tree-List";

export default function TreeItem({ item }) {
  const [currentSelected, setCurrentSelected] = useState({});
  console.log(item);

  function handleOnClick(getLabel) {
    setCurrentSelected({
      ...currentSelected,
      [getLabel]: !currentSelected[getLabel],
    });
  }

  return (
    <li>
      <div className="tree-items">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleOnClick(item.label)}>
            {currentSelected[item.label] ? (
              <FaAngleDoubleUp  className="arrow"/>
            ) : (
              <FaAngleDoubleDown  className="arrow"/>
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length &&
      currentSelected[item.label] ? (
        <TreeList list={item.children} />
      ) : null}
    </li>
  );
}
