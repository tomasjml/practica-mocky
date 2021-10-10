const Card = ({ title, subtitle, text}) => {
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </>
    )
}

export default Card;