import { AdminFormsButton, AdminInput, SettingPageTitle, SettingsFormContainer } from "@/components"
import { IoIosSave } from "react-icons/io"

const contactDataPage = () => {
  return (
    <div className="basis-3/5 bg-white p-4 h-full w-full">
      <SettingPageTitle title="Change contact data"/>
      <SettingsFormContainer>
        <form action="" className=" w-full grid grid-cols-1 xl:grid-cols-2 gap-8 ">
          <AdminInput type="text" title="E-Mail" name="email" placeholder="example@domain.com" />
          <AdminInput type="text" title="Phone number" name="Phone" placeholder="Enter your phone number" />
          <AdminInput type="text" title="Facebook url" name="fbURL" placeholder="Link to your Facebook page" />
          <AdminInput type="text" title="Telegram" name="telegram" placeholder="Your group on Telegram" />
         <div className="xl:col-span-2">
         <AdminFormsButton title="Save" icon={<IoIosSave className="text-3xl " />}/>
         </div>
        </form>
      </SettingsFormContainer>
    </div>
  )
}

export default contactDataPage
