"use client"
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
const options = [
    { value: 'Meat', label: 'Meat' },
    { value: 'Pultry', label: 'Pultry' },
    { value: 'Sweets', label: 'Sweets' }
  ]
  const animatedComponents = makeAnimated();
  const AdminSelect = () => {
  return (
    <Select
    closeMenuOnSelect={false}
    components={animatedComponents}
    isMulti
    defaultValue={[options[1]]}
    options={options} className='w-full'/>
  )
}

export default AdminSelect
