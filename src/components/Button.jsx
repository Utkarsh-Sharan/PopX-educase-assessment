const Button = ({children, bgColor}) => {
  return (
    <button className={`${bgColor} rounded-md w-full py-2`}>
      {children}
    </button>
  )
}

export default Button