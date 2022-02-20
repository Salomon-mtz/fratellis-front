
function Packages() {
  return (
    <div className="container">
    <h2 className="header">Paquetes</h2>
    <div className="row d-flex">
      <div className="col d-flex">
        <img className="package" alt="Acerca de nosotros" src="https://via.placeholder.com/1500" />
      </div>
      <div className="col d-flex">
        <p className="about">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
      <div className="col d-flex">
        <h3 className="price">
          Precio
        </h3>
        <h4 className="amount">
          $0.00 MXN
        </h4>
        <div>
          <button type="button" class="btn btn-dark">Reservar</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Packages;
