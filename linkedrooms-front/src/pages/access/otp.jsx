import React, { useEffect, useRef, useState } from "react";
import * as S from "./style"

export default function OTPField() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(new Array(6).fill(""));
  const inputRef = useRef(null);

  const handleOnChange = ({ target }, index) => {
    const { value } = target;
    const newOTP = [...otp];
    newOTP[index] = value.substring(value.length - 1);
    if (!value) setActiveOTPIndex(index - 1);
    else setActiveOTPIndex(index + 1);
    setOtp(newOTP);
  }

  const handleOnKeyDown = ({ key }, index) => {
    if (key === "Backspace") setActiveOTPIndex(index - 1);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <S.Box>
      {otp.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <input
              ref={index === activeOTPIndex ? inputRef : null}
              id="OTPInput"
              type="number"
              className="w-12 h-12 border-2 rounded outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
              onChange={e => handleOnChange(e, index)}
              onKeyDown={e => handleOnKeyDown(e, index)}
              value={otp[index]}
            />
            {index === otp.length - 1 ? null : (
              <span className="w-2 py-0.5 bg-gray-400" />
            )}
          </React.Fragment>
        );
      })}
    </S.Box>
  );
};

