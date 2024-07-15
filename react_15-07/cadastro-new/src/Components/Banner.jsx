export default function Banner ({ titulo, subTitulo }){

    return(
        <div className="jumbotrom mt-4 container">
            <h1 className="display-4">{titulo}</h1>
            <p className="lead">
                {subTitulo}
            </p>
            <hr className="my-4"/>
        </div>
    )
}