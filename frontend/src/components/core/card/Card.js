import {Card} from "react-bootstrap";

const CardComponent = ({ title, subtitle, text, body}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    {...body}
                </Card.Body>
            </Card>
        </>
    )
}

export default CardComponent;