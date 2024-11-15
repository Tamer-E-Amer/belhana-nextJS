
const AdminInput = ({title,type,name,placeholder}) => {
  return (
    <div className="w-full flex flex-col items-start gap-2">
    <label htmlFor="recipeTitle" className="font-medium text-dark-gray ">
      {title}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full outline-none border border-gray-line rounded-md px-4 py-2 font-medium text-dark-gray"
    />
  </div>
  )
}

export default AdminInput
