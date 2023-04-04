import imgCli from './resources/images/cli.png'

function Cli() {
    return (
        // Cli
        <div className="cli">
            <div className="contaier grid">
                <img src={imgCli} alt="" />
                <div className="card">
                    <h3>Easy to use, cross platform CLI</h3>
                </div>
                <div className="card">
                    <h3>Deploy in seconds</h3>
                </div>
            </div>
        </div>
    );
}

export default Cli;