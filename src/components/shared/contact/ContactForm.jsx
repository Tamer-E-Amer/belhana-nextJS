import { InputField, TextArea, Button } from "@/components";
import { IoIosSend } from "react-icons/io";
const ContactForm = () => {
  return (
    <div className="  py-8 flex items-center justify-center ">
      <form
        action=""
        className=" flex flex-col gap-4 items-start justify-center w-full  xl:px-4"
      >
        <InputField label={"Name"} id={"name"} name="name" />
        <InputField label={"E-Mail"} id={"email"} name="email" />
        <InputField label={"Title"} id={"title"} name="title" />
        <TextArea label={"Subject"} id={"subject"} name={"subject"} rows={10} />
        <Button
          text={"Send"}
          icon={
            <IoIosSend className="text-2xl group-hover:text-dark-blue transition duration-500" />
          }
        />
      </form>
    </div>
  );
};

export default ContactForm;
