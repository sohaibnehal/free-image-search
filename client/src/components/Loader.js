
import React  from 'react';
import '../style/index.css';
import spinner from '../images/spinner.gif'; // Tell Webpack this JS file uses this image

const Loader = props => (
    <div className='text-center'>
        <img src={spinner} alt='Loading Spinner'/>
    </div>
);

export default Loader;