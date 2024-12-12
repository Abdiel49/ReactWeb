export function ButtonComponent ({label, onClick}) {
  return (
    <button
      onClick={onClick}
      className="mi-boton"
    >
      {label || 'Esto es un boton' }
    </button>
  )
}