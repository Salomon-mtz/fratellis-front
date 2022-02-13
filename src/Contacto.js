
function Contact() {
  return (
    <div className="container">
      <br />
      <div className="row justify-content-md-center">
        <form className="col-lg-6">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" placeholder="Escribe tu correo electr&oacute;nico" />
            <label htmlFor="email">Correo electr&oacute;nico</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="name" placeholder="Escribe tu nombre" />
            <label htmlFor="name">Nombre</label>
          </div>
          <div className="form-floating mb-3">
            <input type="tel" className="form-control" id="phone" placeholder="Escribe tu tel&eacute;fono" />
            <label htmlFor="phone">Tel&eacute;fono</label>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
