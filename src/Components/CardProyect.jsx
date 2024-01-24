import { Link } from "react-router-dom"

const CardProyect = ({project}) => {

  const { id, name, description, tags, alias, propietario, date, duedate } = project

  return (
    <>
      <article className="max-w-sm rounded overflow-hidden shadow-xl mt-10">
        <Link to={`/projects/${id}`}>
          <header>
            <h3></h3>
          </header>

          <main>
            <div className="text-gray-700 text-base px-6 py-4">
              <div className="font-bold text-xl mb-2">{name}</div>
              <p className=" mb-2">
                <span className="font-bold">Descripción: </span>
                {description}
              </p>

              <p className="border-t-2 pt-2">
                <span className="font-bold">Fecha Inicio: </span>
                {date}
              </p>

              <p className="border-t-2 pt-2">
                <span className="font-bold">Fecha Fin: </span>
                {duedate}
              </p>

              <p>
                <span className="font-bold">Alias: </span>
                {alias}
              </p>

              <p>
                <span className="font-bold">Propietario: </span>
                {propietario}
              </p>
            </div>
          </main>

          <footer>
            <div className="px-6 pt-4 pb-5 grid grid-cols-2">
              {tags.map((tag, index) => (
                <div key={index} className="my-1">
                  <span className="bg-orange-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded-lg">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
          </footer>
        </Link>
      </article>
    </>
  )
}

export default CardProyect
