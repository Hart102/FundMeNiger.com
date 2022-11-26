import design1 from '../../asserts/images/correct-design.PNG'
import design from '../../asserts/images/222.jpg'



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
          <p>We provide the best banking experience. Implementing regularly recommendations from our customers.</p>

          <p>Unique market insights, deep industry knowledge, creativity, and experience to help grow your business.</p>
          <button className="btn font-weight-bold text-white py-3 px-5">Get started</button>
        </div>
      </div>




    </section>
    </>
  )
}



export default ContentOne