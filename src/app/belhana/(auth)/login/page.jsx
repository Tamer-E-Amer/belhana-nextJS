import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";

import { AdminFormsButton, AdminInput } from "@/components";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="container h-screen bg-white flex items-start justify-center py-8 px-4">
      {/* gray rounded wrapper of the form */}
      <div className=" py-8 px-6 border rounded-md border-gray-300 h-auto w-full space-y-4 md:w-[600px]  ">
        <h1 className="text-gray-600 text-xl font-semibold">Welcome back</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Allows you to have your own favourite recipe and comment on recipes
          you liked.If you do not have an account yet, you <Link href="/belhana/register" className="text-primary-orange  hover:underline">can register here</Link>
        </p>
        {/* form */}
        <form action="" className="space-y-8">
          <AdminInput
            title="User name"
            type="text"
            name="userName"
            placeholder="sameh@example.com"
          />
          <AdminInput
            title="Password"
            type="password"
            name="password"
            placeholder="Your password here.."
          />
          {/* remember me and forget password */}
          <div className="flex items-center justify-between">
            <div className="flex  items-start gap-2  ">
              <Checkbox id="rememberMe" className="h-6 w-6" />
              <label htmlFor="rememberMe" className=" text-dark-gray ">
                Remember me
              </label>
            </div>
            <Link
              href="#"
              className="text-sm text-dark-blue hover:underline"
            >
              Forget password
            </Link>
          </div>
          {/* Buttons */}
          <div className="space-y-4">
          <AdminFormsButton title="Login" icon={<IoMdLogIn />} />
          <span className="text-sm text-dark-gray text-center inline-block w-full font-semibold">Or</span>
          {/* google button */}
          <button className="flex items-center justify-center gap-2 border text-white border-gray-line w-full py-2 p-x2 hover:cursor-pointer bg-gray-200  rounded-md">
            {/* <IoIosSave className="text-3xl " /> */}
            <Image
              src="/assets/icons/google-icon.svg"
              width={20}
              height={20}
              alt="Google icon"
            />
            <span className="text-sm text-dark-gray  ">Sign in with your Google account</span>
          </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
