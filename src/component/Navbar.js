import logo from "../logo.svg";
import { useState } from "react";

const ActionButton = (props) => {
  return (
    <div
      className={
        "MyButton " + (props.button === props.buttonId ? "Pressed" : "")
      }
      onClick={() => {
        props.handleClick && props.handleClick(props.buttonId);
      }}
    >
      {props.text}
    </div>
  );
};

const Navbar = (props) => {
  const [button, setButton] = useState(props.defaultTab); //default

  const handleClick = (buttonId) => {
    setButton(buttonId);
    props.setNavigation && props.setNavigation(buttonId);
  };
  return (
    <div className={props.real ? "Navbar" : ""}>
      {props.real && <img src={logo} className="Logo" />}
      <div className="ButtonsContainer">
        {props.buttons &&
          props.buttons.map((btn, i) => (
            <ActionButton
              key={i}
              button={button}
              buttonId={btn.buttonId}
              handleClick={handleClick}
              text={btn.buttonText}
            />
          ))}
      </div>
    </div>
  );
};

export default Navbar;
