const Button = ({children, id, bgColor, onClick}) => {
  return (
    <button id={id} className={`${bgColor} rounded-md w-full py-2`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button