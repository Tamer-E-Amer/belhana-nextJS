const AdminCheckbox = ({title, htmlFor, name, onChange}) => {
  return (
    <label htmlFor={htmlFor} className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <span className="font-medium text-dark-gray inline-block w-[85px] lg:text-right">{title}</span>
            <input
              type="checkbox"
              name={name}
              id={name}
              onChange={onChange}
              className="appearance-none border border-gray-500 rounded w-6 h-6 checked:border-white checked:ring-2 checked:ring-gray-500 checked:bg-gray-400 checked:border-[3px] hover:cursor-pointer 
          "
            />
          </label>
  )
}

export default AdminCheckbox
