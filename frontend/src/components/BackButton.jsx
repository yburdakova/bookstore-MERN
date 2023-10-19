import { Link } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs";
import PropTypes from 'prop-types';


const BackButton = ({ destination = '/'}) => {
    return (
        <div className="flex">
            <Link
                to={destination}
                className='bg-sky-800 text-white px-4 rounded-lg w-fit'
            >
                <BsArrowLeft className="text-2xl"/>
            </Link>
        </div>
    )
}

BackButton.propTypes = {
    destination: PropTypes.string, 
}


export default BackButton