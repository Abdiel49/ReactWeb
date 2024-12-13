export function ButtonComponent ({label, onClick, children}) {
  return (
    <button
      onClick={onClick}
      className="mi-boton"
    >
      {label || 'Esto es un boton' }
      {children}
    </button>
  )
}