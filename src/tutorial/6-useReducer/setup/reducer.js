// reducer function
export const reducer = (state, action) => {
  if (action.type === "ADD_PERSON") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Person Added",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please enter value" };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_PERSON") {
    return {
      ...state,
      people: state.people.filter((person) => {
        return person.id !== action.id;
      }),
      isModalOpen: true,
      modalContent: "person removed",
    };
  }
  throw new Error("No matching action type!");
};
