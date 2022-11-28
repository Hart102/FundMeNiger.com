const Searchbar = () => {
  return (
    <form className='d-flex align-items-center'>
        <input type="text" className="form-control py-1 px-3" 
        style={{
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px'
        }} placeholder='Search'/>

        <i className="fa fa-search text-white p-2 dark-hove" 
            style={{
                background: '#63baba',
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px'
        }}></i>
    </form> 
  )
}

export default Searchbar