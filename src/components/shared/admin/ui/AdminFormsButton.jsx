const AdminFormsButton = ({title, icon}) => {
  return (
    <div className="flex items-center justify-center gap-2 border text-white border-gray-line w-full py-2 p-x2 hover:cursor-pointer bg-dark-gray hover:bg-gray-text transition duration-300 rounded-md">
    {/* <IoIosSave className="text-3xl " /> */}
    {icon}
    <span className="text-lg  ">{title}</span>
  </div>
  )
}

export default AdminFormsButton
