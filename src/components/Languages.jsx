import imgNode from './resources/images/logos/node.png'
import imgPython from './resources/images/logos/python.png'
import imgCsharp from './resources/images/logos/csharp.png'
import imgRuby from './resources/images/logos/ruby.png'
import imgPhp from './resources/images/logos/php.png'
import imgScala from './resources/images/logos/scala.png'
import imgClojure from './resources/images/logos/clojure.png'

function Languages() {
    return (
        // Languages
        <div className="languages text-center">
            <h4 className="md">Supported Languages</h4>

            <div className="container flex py-2">
                <div className="card">
                    <h4>Node.js</h4>
                    <img src={imgNode} alt="" className="py-1" />
                </div>
                <div className="card">
                    <h4>Python</h4>
                    <img src={imgPython} alt="" className="py-1" />
                </div>
                <div className="card">
                    <h4>C#</h4>
                    <img src={imgCsharp} alt="" className="py-1" />
                </div>
                <div className="card">
                    <h4>Ruby</h4>
                    <img src={imgRuby} alt="" className="py-1" />
                </div>
                <div className="card">
                    <h4>PHP</h4>
                    <img src={imgPhp} alt="" className="py-1" />
                </div>
                <div className="card">
                    <h4>Scala</h4>
                    <img src={imgScala} alt="" className="py-1" />
                </div>
                <div className="card">
                    <h4>Clojure</h4>
                    <img src={imgClojure} alt="" className="py-1" />
                </div>
            </div>
        </div>
    );
}

export default Languages;