
function Contact() {
  return (
    <div className="container">
      <h2 className="header">Contacto</h2>
      <div className="row justify-content-md-center">
        <form className="col-lg-9">
          <div className="form-row d-flex">
            <div className="form-floating col-sm-6 me-2 mb-3">
              <input type="text" className="form-control" id="nombre"
              placeholder="Ingrese su nombre" />
              <label htmlFor="nombre">Nombre</label>
            </div>
            <div className="form-floating col-sm-6 mb-3">
              <input type="text" className="form-control" id="apellido"
              placeholder="Ingrese su apellido" />
              <label htmlFor="apellido">Apellido</label>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email"
            placeholder="Ingrese su email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-row d-flex">
            <div className="form-floating col-sm-9 me-2 mb-3">
              <input type="text" className="form-control" id="domicilio"
              placeholder="Ingrese su domicilio" />
              <label htmlFor="domicilio">Domicilio</label>
            </div>
            <div className="input-group mb-3">
              <select className="form-select" id="drowpdownSelect">
                <option value="">Selecciona un estado</option>
                <option value="1">CDMX</option>
                <option value="2">EdoMex</option>
                <option value="3">Morelos</option>
                <option value="4">Hidalgo</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <textarea id="comentario" className="form-control" rows="10" placeholder="Escribe tu comentario"></textarea>
            <label form="comentario"></label>
          </div>
          <div className="form-group text-end">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="gridCheck">
                Quiero que me contacten
              </label>
              <input className="form-check-input" type="checkbox" id="gridCheck" />
            </div>
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-send btn-outline-dark">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
