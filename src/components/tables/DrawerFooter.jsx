import {
  CreditCard,
  ArrowRightLeft,
  Combine,
  Printer
} from "lucide-react";

export default function DrawerFooter({

  total,

}) {

  return (

    <div className="border-t border-zinc-800 p-5">

      <div className="text-zinc-500">

        الإجمالي

      </div>

      <div className="text-3xl font-bold text-white mt-2 mb-5">

        {total.toLocaleString()} د.ع

      </div>

      <div className="grid grid-cols-2 gap-3">

        <button
          className="bg-[#8B0029] hover:bg-[#A10032] transition rounded-xl py-3 text-white flex justify-center items-center gap-2"
        >

          <CreditCard size={18}/>

          دفع

        </button>

        <button
          className="bg-[#232731] rounded-xl py-3 text-white flex justify-center items-center gap-2"
        >

          <ArrowRightLeft size={18}/>

          نقل

        </button>

        <button
          className="bg-[#232731] rounded-xl py-3 text-white flex justify-center items-center gap-2"
        >

          <Combine size={18}/>

          دمج

        </button>

        <button
          className="bg-[#232731] rounded-xl py-3 text-white flex justify-center items-center gap-2"
        >

          <Printer size={18}/>

          طباعة

        </button>

      </div>

    </div>

  );

}