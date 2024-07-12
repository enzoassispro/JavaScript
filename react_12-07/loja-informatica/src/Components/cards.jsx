const Card = () => {
    const cardData = [
        {
            title: "titulo 1",
            subTitle: "Subtitulo 1",
            text: "Este é o meu primeiro card.",
            img: "https://guide-images.cdn.ifixit.com/igi/BCU4AgbFicGvFcZA.standard"
        },
        {
            title: "titulo 2",
            subTitle: "Subtitulo 2",
            text: "Este é o meu segundo card.",
            img: "https://guide-images.cdn.ifixit.com/igi/BCU4AgbFicGvFcZA.standard"
        },
        {
            title: "titulo 3",
            subTitle: "Subtitulo 3",
            text: "Este é o meu terceiro card.",
            img: "https://guide-images.cdn.ifixit.com/igi/BCU4AgbFicGvFcZA.standard"
        },
    ];

    console.log(cardData);

    return(
        <div className="row">

            {cardData.map((card, index) => (
                <section key={index} className="col-md-4" >
                    <article className="card">
                        <div className="card-body" >
                            <img className="card-img-top" src={card.img} alt= "Computers" />
                            <h5 className="card-title pt-3 pb-3 ">{card.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{card.subTitle}</h6>
                            <p className="card-text">{card.text}</p>
                        </div>
                    </article>
                </section>
            ))}

        </div>
    )
}

export default Card;