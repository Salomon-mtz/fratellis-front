// Manage forms in React
// Consume API/Endpoint
// React state
import { useState } from "react";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function handleOnSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const url = "https://formspree.io/f/mlezwzja";

    // The payload is created here
    const data = {
      name: e.target["name"].value,
      surename: e.target["surename"].value,
      email: e.target["email"].value,
      address: e.target["address"].value,
      state: e.target["state"].value,
      comment: e.target["comment"].value,
      contactMe: e.target["contactMe"].checked,
    };

    // The request is performed here
    fetch(url, {
      method: 'POST',
      // The payload is converted to JSON text format
      body: JSON.stringify(data),
      // With this header we explicitly indicate that we are performing an AJAX request
      headers: {
        'Content-Type': 'application/json',
      }
    })
      // Here the response is managed
      .then(response => response.json())
      .then(() => {
        // If the request has a successful response then loading is set back to false and
        // the success message is shown.
        setLoading(false);
        setShowSuccess(true);
      })
      .catch(function() {

      });
  }

  function printForm() {
    return (
      <form className="col-lg-9" id="contacto" onSubmit={handleOnSubmit}>
          <div className="form-row d-flex">
            <div className="form-floating col-sm-6 me-2 mb-3">
              <input type="text" className="form-control" name="name" id="name"
              placeholder="Ingrese su nombre" disabled={loading} required />
              <label htmlFor="nombre">Nombre</label>
            </div>
            <div className="form-floating col-sm-6 mb-3">
              <input type="text" className="form-control" name="surename" id="surename"
              placeholder="Ingrese su apellido" disabled={loading} required />
              <label htmlFor="apellido">Apellido</label>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" name="email" id="email"
            placeholder="Ingrese su email" disabled={loading} required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-row d-flex">
            <div className="form-floating col-sm-9 me-2 mb-3">
              <input type="text" className="form-control" id="address" name="address"
              placeholder="Ingrese su domicilio" disabled={loading} required />
              <label htmlFor="domicilio">Domicilio</label>
            </div>
            <div className="input-group mb-3">
              <select className="form-select" id="state" name="state" disabled={loading} required>
                <option value="">Selecciona un estado</option>
                <option value="1">CDMX</option>
                <option value="2">EdoMex</option>
                <option value="3">Morelos</option>
                <option value="4">Hidalgo</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <textarea id="comment" name="comment" className="form-control" rows="10" placeholder="Escribe tu comentario" required  disabled={loading}></textarea>
            <label form="comentario"></label>
          </div>
          <div className="form-group text-end">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="contactMe">
                Quiero que me contacten
              </label>
              <input className="form-check-input" type="checkbox" id="contactMe" disabled={loading} name="contactMe" />
            </div>
          </div>
          <div className="text-end">
            <button type="submit" disabled={loading} className="btn btn-send btn-outline-dark">
              {loading ? "Enviando datos.." : "Enviar"}
            </button>
          </div>
        </form>
    )
  }

  function printSuccess() {
    return (
      <div>
        <h1>¡Tus datos han sido enviados!</h1>
        <p>Pronto nos comunicaremos contigo</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="header">Contacto</h2>
      <div className="row justify-content-md-center">
        {showSuccess ? printSuccess() : printForm()}
      </div>
    </div>
  );
}

export default Contact;
