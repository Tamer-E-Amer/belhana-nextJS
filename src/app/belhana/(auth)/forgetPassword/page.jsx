import { AdminFormsButton, AdminInput } from "@/components";
import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";

const forgetPasswordPage = () => {
  return (
    <section className="container h-screen bg-white flex items-start justify-center py-8 px-4">
      {/* gray rounded wrapper of the form */}
      <div className=" py-8 px-6 border rounded-md border-gray-300 h-auto w-full space-y-4 md:w-[600px]  ">
        <h1 className="text-gray-600 text-xl font-semibold">
          Forget your password?
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Please submit your email in order to can reset your password or  you can 
          <Link
            href="/belhana/login"
            className="text-primary-orange  hover:underline px-2"
          >
            login here
          </Link>
        </p>
        {/* form */}
        <form action="" className="space-y-8">
          <AdminInput
            title="Email address"
            type="text"
            name="userEmail"
            placeholder="sameh@example.com"
          />

          {/* Buttons */}
          <div className="space-y-4">
            <AdminFormsButton title="Submit" icon={<IoMdLogIn />} />
           
          </div>
        </form>
      </div>
    </section>
  );
};

export default forgetPasswordPage;
