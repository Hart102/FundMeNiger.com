
const Footer = () => {
  return (
    <>
        <footer  style={{background: '#1e1e26', display: 'flex', justifyContent: 'center'}}>
            <div className="container p-4 d-lg-flex justify-content-between text-white">
                <span className='my-5'>
                    <div className="h3" style={{color: '#f3613c'}}>Fund</div>
                    <div className="social-icons">
                        <i className='fab fa-facebook fa-1x'></i>
                        <i className='fab fa-instagram fa-1x mx-4'></i>
                        <i className='fab fa-twitter fa-1x'></i>
                    </div>
                </span>
                <ul className="list-unstyled my-5">
                    <li className='my-2'>Home</li>
                    <li className='my-2'>Contact</li>
                    <li className='my-2'>Transfer fund</li>
                </ul>

                <ul className="list-unstyled my-5">
                    <li>Privacy policy</li>
                    <li>Help</li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer