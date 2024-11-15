import Link from "next/link";

const AuthButtons = () => {
  return (
    <div className="hidden xl:flex items-center justify-between px-2 gap-4">
      <Link href={"/belhana/login"} className="hover:underline" >
        login
      </Link>
      <Link href={"/belhana/register"} className="w-[120px] border py-2 flex items-center justify-center cursor-pointer hover:bg-primary-orange hover:text-white transitio duration-300">
        Register
      </Link>
    </div>
  );
};

export default AuthButtons;
