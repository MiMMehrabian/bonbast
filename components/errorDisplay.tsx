import React from "react";
import { PiSmileySadThin } from "react-icons/pi";
type Props = {
  error: string;
};
const ErrorDisplay: React.FC<Props> = ({ error }) => {
  return (
    <div className="text-red-600 font-medium text-center px-5 flex-col gap-y-4 w-full flex justify-center h-[50vh] place-items-center">
      <PiSmileySadThin size={50} />
      {error}
    </div>
  );
};

export default ErrorDisplay;
