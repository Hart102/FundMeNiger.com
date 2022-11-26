
const Eligibility = ({ title, text }) => {
  // const elementSelector = (element) => document.querySelectorAll(element)

  // let options= {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.5
  // };

  // const callbackFunction = (entries) => { // array of observing elements
  //     entries.forEach(entry =>{
  //       entry.classList.add('apply')
  //         // The logic to apply for each entry
  //     })
  // }

  // // apply

  // elementSelector('#element')
  // let observer= new IntersectionObserver(callbackFunction(elementSelector('#element')),options);
  // observer.observe()



  const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.add('apply');
  
        // if (entry.intersectionRatio >= 0.75) {
        //   intersectionCounter++;
        // }
      }
    });
  }








  return (
      <div className="main-card d-lg-flex shadow-sm border" id="element">
          <div className="text-container d-flex flex-column justify-content-center py-4 px-3">
              <h4 className='text-uppercase'>{title}</h4>
              <p className='text-capitalize'>{text}</p>
          </div>
      </div>

  )
}

export default Eligibility