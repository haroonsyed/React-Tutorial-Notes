import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  console.log(useParams());
  const { id } = useParams();
  return (
    <div>
      <h2>{data[parseInt(id) - 1].name}</h2>
    </div>
  );
};

export default Person;
