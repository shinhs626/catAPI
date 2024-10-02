import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

function Button() {

    

  return (
    <div className=" w-[200px] h-[50px] flex items-center justify-center gap-x-9">
      <AiOutlineLike className="w-[40px] h-[40px] hover:brightness-80 active:brightness-50 transition" />
      <AiOutlineDislike className=" w-[40px] h-[40px] hover:brightness-80 active:brightness-50 transition" />
    </div>
  );
}

export default Button;
