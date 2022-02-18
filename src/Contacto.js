
function Contact() {
  return (
    <div className="container container-form">
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
            <div className="input-group mb-1">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="drowpdownSelect">Estado</label>
              </div>
              <select className="custom-select" id="drowpdownSelect">
                <option selected>CDMX</option>
                <option value="1">EdoMex</option>
                <option value="2">Morelos</option>
                <option value="3">Hidalgo</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <textarea id="comentario" className="form-control" rows="10" placeholder="Escribe tu comentario"></textarea>
            <label form="comentario"></label>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Quiero que me contacten
              </label>
            </div>
          </div>
          <button type="submit" className="btn-send btn-outline-dark text-right">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
