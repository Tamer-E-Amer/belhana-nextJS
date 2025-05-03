import { AdminFormsButton, AdminInput, ImageUploader } from "@/components";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import Link from "next/link";
import { IoIosSave } from "react-icons/io";

const page = () => {
  return (
    <div className="container h-auto bg-white flex flex-col items-center justify-start py-8 px-4 gap-4">
      {/* title */}
      <div>
        <h1 className="text-gray-600 text-xl font-semibold text-center">
          Make your account
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed text-center">
          You can have your account in Belhana Welshiftishy in one step. If you
          have allready registered, you{" "}
          <Link
            href="/belhana/login"
            className="text-primary-orange  hover:underline"
          >
            can login directly
          </Link>
        </p>
      </div>
      <div className=" py-8 px-4 lg:p-8 border rounded-md border-gray-300 h-auto w-full md:w-[800px] space-y-3 ">
        {/* form */}
        <form action="" className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <AdminInput
            title="First name"
            type="text"
            name="firstName"
            placeholder="sameh"
          />
          <AdminInput
            title="Last name"
            type="text"
            name="lastName"
            placeholder="Sedky"
          />

          <AdminInput
            title="Password"
            type="password"
            name="password"
            placeholder="Your password here.."
          />
          <AdminInput
            title="Confirm password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
          {/* Profile image */}
          <div className="md:col-span-2">
            <ImageUploader
              name="profileImage"
              uploaderTitle="Upload your profile image"
            />
          </div>
          {/* gender */}

          <div class="flex gap-4">
            {/* <!-- Male Option --> */}
            <div>
              <input
                type="radio"
                name="gender"
                id="male"
                class="peer hidden"
                value="male"
              />
              <label
                for="male"
                class="cursor-pointer px-4 py-2 border rounded-lg 
             peer-checked:bg-dark-blue peer-checked:text-white"
              >
                Male
              </label>
            </div>

            {/* <!-- Female Option --> */}
            <div>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                class="peer hidden"
              />
              <label
                for="female"
                class="cursor-pointer px-4 py-2 border rounded-lg 
             peer-checked:bg-dark-blue peer-checked:text-white"
              >
                Female
              </label>
            </div>
          </div>

          {/* save button */}
          <div className="md:col-span-2">
            <AdminFormsButton
              title="Create account"
              icon={<IoIosSave className="text-2xl" />}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
