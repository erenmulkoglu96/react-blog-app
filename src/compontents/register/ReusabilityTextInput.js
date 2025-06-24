
import React from 'react'

const ReusabilityTextInput=({label,type,className,name,value,onChange,error}) => {
  return (
    <div className='form-group mb-4'>
    <label>{label}</label>
    <input
        type={type}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
    />
    {error && <p style={{ color: 'red' }}>{error}</p>}
</div>
  )
}

//Export
export default ReusabilityTextInput