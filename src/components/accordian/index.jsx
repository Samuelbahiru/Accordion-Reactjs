import { React, useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMulitpleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSelection = (getCurrentId) => {
    if (enableMulitpleSelection) {
      if (multiple.includes(getCurrentId)) {
        setMultiple(multiple.filter((id) => id !== getCurrentId));
      } else {
        setMultiple([...multiple, getCurrentId]);
      }
    } else {
      setSelected(selected === getCurrentId ? null : getCurrentId);
    }
  };

  return (
    <div className="wrapper">
      <h1 className="header">REACT ACCORDIAN</h1>
      <button
        className="btn"
        onClick={() => setEnableMultipleSelection((prevState) => !prevState)}
      >
        {" "}
        Enable Multiple Selection
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item">
                <div
                  onClick={() => handleSelection(dataItem.id)}
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMulitpleSelection === true ? (
                  <div className="content">
                    {multiple.map((id) => {
                      if (id === dataItem.id) {
                        return dataItem.answer;
                      }
                    })}
                  </div>
                ) : selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : (
                  ""
                )}
              </div>
            );
          })
        ) : (
          <div>No data !</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
