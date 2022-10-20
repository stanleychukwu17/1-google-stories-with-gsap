import './app.scss';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';

import MiddlePhone from '../../components/App/MiddlePhone'

// importing of all assets
import phone from '../../assets/svg/p1.svg'

const App = () => {

    return (
        <div className="AppMain">
            <div className="AppTitle">
                <p>Your dream</p>
                <p>Meet the new iPhone 14 pro</p>
            </div>
            <div className='boy'>
                <img src={phone} alt="" />
            </div>
            <div className='boy'>
                <MiddlePhone />
            </div>
        </div>
    )
}
export default App;