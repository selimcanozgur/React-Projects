import { TbLoader3 } from "react-icons/tb";

function Loading() {
  return (
    <div className="flex justify-center mt-12">
      <TbLoader3 className="text-slate-200 text-[60px] animate-spin" />
    </div>
  );
}

export default Loading;
