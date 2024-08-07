import './BigCard.css'
import avatar from '../../assets/image-jeremy.png'
function BigCard(){
    return(
        <div id='card'>
            <div id='content'>
                <img id='hero' src={avatar} />
                <div id='info'>
                <label>Report for</label>
                <h1 id='avatar'>Jeremy Robson</h1>

                </div>

            </div>
            <div id='period'>
                <label className='blue'> Daily</label>
                <label id='middle'>Weekly</label>
                <label className='blue'>Monthly</label>

            </div>

        </div>
    )
}
export default BigCard