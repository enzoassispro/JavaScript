const Banner = () => { // function
    const bannerStyle = {
        backgorundSize: 'Cover',
        color:'white',
        padding:'100px 0',
        textAlign: 'center',
        background:'url("https://fastly.picsum.photos/id/825/1200/400.jpg?grayscale&hmac=nS0s7tk11tD-1F6amTbYNtL3-ImHZ7L1p3LlWEy0BgM") no-repeat center '
    }

    return( 
        <div style={bannerStyle}>
            <div className="container">
                <h1 className="display-4">Bem-vindo ao meu Site</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorem, deleniti minima doloremque officia enim voluptates minus magnam? </p>
            </div>
        </div>
    )
}

export default Banner;