
const Eligibility = ({ title, text }) => {
    
  return (
    <div className="main-card d-lg-flex shadow-sm" id="element">
        <div className="text-container d-flex flex-column justify-content-center py-5 px-5">
            <h4 className='text-uppercase'>{title}</h4>
            <p className='text-capitalize'>{text}</p>
        </div>
    </div>

  )
}

export default Eligibility