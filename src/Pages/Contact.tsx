
type Props = {}

export default function Contact({}: Props) {
  //asme una pagina de contacto
  return (
    <>
    <div>Contacto</div>

    <div>
      <h1>Formulario de contacto</h1>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>

    </div>
    </>
    
  )
}