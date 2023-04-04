import { useEffect } from 'react'
import Form from './Forms/Form';

// contexts
import { useFormContext } from '../../hooks/useFormContext'
import { useProfileContext } from '../../hooks/useProfileContext'

// main showcase component
function Showcase() {
    return (
        // Showcase register form
        <div className="showcase primary-color color-white">
            <div className="container grid">

                {/* showcase text */}
                <div id='showcase-text' className="showcase-text text-selection">
                    <h1>Easier Deployment</h1>
                    <p>Deploy web apps of all kinds, from large scale enterprise APIs to static websites for individuals.
                        Fill out the from to try a demo of our platform</p>
                    <a href="#features.html" className="btn btn-outline">Read more</a>
                </div>

                <Form /> {/* setting the forms depending on the state of form is! */}
            </div>
        </div>
    );
}

export default Showcase;