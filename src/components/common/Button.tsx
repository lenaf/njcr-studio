
export default function Button(
  {
    children,
    className = '',
    ...rest
  }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={`${className} btn `}
    >
      {children}
    </button>
  );
}
