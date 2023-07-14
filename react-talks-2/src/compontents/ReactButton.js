import React from "react";

function NewButton(props) {
  // NewButton accepts the props parameter, which represents the properties passed to the component.
  return <button>{props.title}</button>; // Inside the NewButton component, we use the props.title to display the text on the button.
}
const ReactButton = () => {
  // In the ReactButton component, we render the NewButton component twice, each time passing a different title prop.
  return (
    <div>
      <h1>Welcome to my app</h1>
      <NewButton title="Add to cart" />
      <NewButton title="Find out more" />
    </div>
  );
};

export default ReactButton;
// The difference between props and state is that props are passed into a component from its parent, whereas state is managed within a component and can be updated using the setState function.
