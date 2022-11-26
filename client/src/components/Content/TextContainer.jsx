const TextContainer = ({ number, title, text }) => {
  return (
    <div className="my-5">
        <div className="d-flex align-items-center">
            <div style={{background: '#f3613c', padding: '5px 9px', borderRadius: '30px', color: 'white', fontWeight: 'bold'}}>{number}</div>
            <h4 className="mx-3">{title}</h4>
        </div>
        <p style={{color: '#777', marginTop: '0.5em', lineHeight: '30px'}}>{text}</p>
    </div>
)
}

export default TextContainer

// #f3613c

// #bfdf32