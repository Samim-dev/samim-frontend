function Stats() {
    return (
        // Stats
        <div className="stats">
            <div id="stats" className="container">
                <h3 className="stats-heading text-center">
                    Welcome to the best platform for building applications of all types with modern architecture and scaling
                </h3>

                <div className="grid grid-3 text-center">
                    <div>
                        <i className="fas fa-server fa-3x"></i>
                        <h3>10,349,405</h3>
                        <p className="text-secondary">Deployments</p>
                    </div>
                    <div>
                        <i className="fas fa-upload fa-3x"></i>
                        <h3>987 TB</h3>
                        <p className="text-secondary">Published</p>
                    </div>
                    <div>
                        <i className="fas fa-project-diagram fa-3x"></i>
                        <h3>2,343,265</h3>
                        <p className="text-secondary">Projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;