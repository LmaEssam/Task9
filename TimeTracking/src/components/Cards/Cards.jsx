import './Cards.css'
function Cards(props){
    return(
        <div className='cards' style={{ backgroundColor: props.outercolor }}>
            <img src={props. CardImg} className='img'/>
            
            <div className='innerdiv'>
                <div className='rowdiv'>
                    <label className='label'>{props.cardlabel}</label>
                    <span>
                        <img className='dots' src={props.carddots} />
                        </span> 
                </div>
                <div className='columndiv'>
                    <h1 className='name'>{props.cardheader}</h1>
                    <p>{props.cardparagraph}</p>
                </div>
            </div>
        </div>
    )
}
export default Cards