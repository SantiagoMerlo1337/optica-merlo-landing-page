import PropTypes from 'prop-types'
import './TextBand.css'

export default function TextBand({text}) {
  return (
    <div className='w-100 bg-secondary'>
        <div className='container d-flex justify-content-center py-2'>
            <h4 className='fs-3 m-0 text-white text-center'>{text}</h4>
        </div>
    </div>
  )
}
TextBand.propTypes = {
  text: PropTypes.string.isRequired
}