import { AdminFormsButton, AdminInput, SettingPageTitle, SettingsFormContainer } from "@/components"
import { IoIosSave } from "react-icons/io"

const securityPage = () => {
  return (
    <div className="basis-3/5 bg-white p-4 h-full w-full">
      <SettingPageTitle title="Change your password"/>
      <SettingsFormContainer>
        <form action="" className="space-y-6 w-full">
          <AdminInput type="password" title="Current password" name="currentPassword" placeholder="Current password" />
          <AdminInput type="password" title="New password" name="newPassword" placeholder="New password" />
          <AdminInput type="password" title="Confirm password" name="confirmPassword" placeholder="Confirm your password password" />
          <AdminFormsButton title="Change password" icon={<IoIosSave className="text-3xl " />}/>
        </form>
      </SettingsFormContainer>
    </div>
  )
}

export default securityPage
