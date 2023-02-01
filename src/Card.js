
const Card = ({image, title, description, url}) => {

    return (
        <>
            <section className="card__outer_container">
                <h1 className="title"> {title} </h1>
                    <div className='image_container'>
                        <img className='image' src={require(`./assets/img${image}.png`)} />
                    </div>
                    <div className="card_inner_container"> 
                        <p className="description"> {description} </p>
                        
                        <div className="button_container">
                            <a className="button_a" href={url}> Click</a>
                        </div>
                        
                    </div>
            </section>
        </>
    )
}

export default Card