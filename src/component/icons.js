import React from "react";
import {
  MdOutlineKeyboardBackspace,
  MdOutlineMailOutline,
} from "react-icons/md";
import { ImSpinner8 } from "react-icons/im";

export const EmailIcon = (props) => {
  const { classNames, size } = props;

  return (
    <div className={classNames.join(" ")}>
      <MdOutlineMailOutline size={size} color="#37c559" />
    </div>
  );
};

export const BackIcon = (props) => {
  const { classNames, size, clickHandler } = props;

  return (
    <div className={classNames.join(" ")} onClick={clickHandler}>
      <MdOutlineKeyboardBackspace size={size} color="black" />
    </div>
  );
};

export const Spinner = (props) => {
  const { classNames } = props;

  return <ImSpinner8 className={classNames.join(" ")} />;
};
