import Button from "./Button"
const Card = ({avatar,title,details,children}) => {
    return (
        <div className='child-cont'>
            <div>
                <img style={{width:"100%"}} src={avatar} alt="" />
            </div>
            <div className='text-cont'>
                <div>
                    <a href="">
                        <h2>{title}</h2>
                    </a>
                </div>
                <div>
                    <p>{details}</p>
                </div>
                <Button>{children}&#10140;</Button>
            </div>
            </div>
            )
}

export default Card