"use strict"

async function getDogs() {
  const response = await fetch("http://localhost:5001/dogs");
  const data = await response.json();
  return data;
}

export {getDogs};