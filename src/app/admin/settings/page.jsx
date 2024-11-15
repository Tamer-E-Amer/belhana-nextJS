import { AdminFormsButton, AdminInput, ImageUploader, SettingPageTitle, SettingsFormContainer } from "@/components"
import { IoIosSave } from "react-icons/io"

const settingsPage = () => {
  return (
    <div className="basis-3/5 bg-white p-4 h-full  w-full">
      <SettingPageTitle title="Change your personal data"/>
      <SettingsFormContainer>
        <form action="" className=" w-full grid grid-cols-1 xl:grid-cols-2 gap-8 ">
          <AdminInput type="text" title="Name" name="name" placeholder="Jon Doe" />
          <AdminInput type="text" title="E-Mail" name="email" placeholder="example@domain.com" />
          <div className="xl:col-span-2">
            <ImageUploader name="userImage" uploaderTitle="Upload your image"/>
          </div>
         <div className="xl:col-span-2">
         <AdminFormsButton title="Save" icon={<IoIosSave className="text-3xl " />}/>
         </div>
        </form>
      </SettingsFormContainer>
    </div>
  )
}

export default settingsPage
