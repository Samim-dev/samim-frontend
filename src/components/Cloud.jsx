import imgCloud from './resources/images/cloud.png'

function Cloud() {
    return (
        // Cloud 
        <div className="cloud my-2 py-2 primary-color color-white">
            <div className="container grid">
                <div className="text-center text-selection">
                    <h2 className="lg">Extreme Cloud Hosting</h2>
                    <p className="lead my-1">Cloud hosting like you've never seen. Fast, efficient and scalable</p>
                    <a href="#features.html" className="btn btn-outline">Read More</a>
                </div>
                <img src={imgCloud} alt="" />
            </div>
        </div>
    );
}

export default Cloud;