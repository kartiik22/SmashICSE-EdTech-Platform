export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) {
  return (
    <button
  disabled={disabled}
  onClick={onclick}
  className={`flex items-center cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 ${customClasses} ${
    outline ? "border border-transparent" : ""
  }`}
  style={outline ? { border: "1px solid #22c55e", backgroundColor: "transparent" } : { backgroundColor: "#22c55e" }}
  type={type}
>

      {children ? (
        <>
          <span className={`${outline && "text-yellow-50"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  )
}
