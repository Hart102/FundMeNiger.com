import design from '../../asserts/images/222.jpg'
import Button from '../Button/Button'



const ContentOne = () => {
  return (
    <>
    <section>
      <div className="container d-flex py-5">
        <div className="col-md-5 px-lg-5">
          <div style={{width: '100%', height: '60vh', position: 'relative'}}>
            <img src={design} className="img-fluid" style={{position: 'absolute', width: '100%', height: "100%", borderRadius: '10px'}}/>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="display-4" style={{color: '#15242b', fontWeight: '700'}}>Raising money have never been easy.</h1>
          <p className='my-lg-5'>We provide you with opportunity to dream and see it come to pass by helping you get the needed funding on any project, plans or other basic needs.</p>

          <Button  btnText={'Get started'}/>
        </div>
      </div>




    </section>
    </>
  )
}



export default ContentOne