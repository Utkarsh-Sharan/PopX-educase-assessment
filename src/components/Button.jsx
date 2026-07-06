const Button = ({children, id, bgColor, color, onClick}) => {
  return (
    <button 
      id={id} 
      className={`${bgColor} ${color ? color : ""} rounded-md w-full py-2`} 
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button