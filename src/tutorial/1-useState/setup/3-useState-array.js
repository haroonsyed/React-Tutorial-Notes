import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  return (
    //Alternate way of indicating a react fragment
    <>
      {
        //For each person display them
        people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button
                className="btn"
                onClick={
                  //Remove only the clicked on person
                  () =>
                    setPeople(
                      people.filter((person) => {
                        const toRemove = person.id === id ? false : true;
                        return toRemove;
                      })
                    )
                }
              >
                Remove Item
              </button>
            </div>
          );
        })
      }
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
