import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputText = ({
  fieldName,
  value,
  type,
  onChange,
  placeholder,
  error,
}) => {
  const [focus, setFocus] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(false);
  const [myType, setMyType] = useState(type);

  const toggleEye = () => {
    if (eyeOpen) {
      setMyType("password");
    } else {
      setMyType("text");
    }
    setEyeOpen(!eyeOpen);
  };

  return (
    <>
      <label>{fieldName}</label>
      <div className="flex relative">
        <input
          type={myType}
          placeholder={placeholder}
          className={`${
            error ? "border-red-500" : focus ? "border-blue-500" : ""
          } border-2 border-slate-200 py-2 px-3 outline-none rounded-sm w-full md:w-3/4 my-2`}
          value={value}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          onChange={onChange}
        />
        {type === "password" ? (
          <div className="absolute right-0 md:right-1/4 top-3 mt-2 mr-3">
            {eyeOpen ? (
              <FaEyeSlash
                className="hover:cursor-pointer"
                onClick={toggleEye}
              />
            ) : (
              <FaEye className="hover:cursor-pointer" onClick={toggleEye} />
            )}
          </div>
        ) : null}
      </div>
      <p className="mb-3 text-sm text-red-500">
        {error ? `Please Enter ${fieldName}` : null}
      </p>
    </>
  );
};

export default InputText;
