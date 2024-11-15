const SettingsFormContainer = ({children}) => {
  return (
    <div className="flex items-center justify-center w-full">

    <div className="w-full   border border-gray-line rounded-md p-8 flex items-start justify-center min-h-[400px]">
      {children}
    </div>
    </div>
  )
}

export default SettingsFormContainer
