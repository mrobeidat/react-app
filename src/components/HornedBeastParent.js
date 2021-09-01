import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
class HornedBeastParent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            votes: 0
        }
    }
    votesOnClickNumber = () => {
        this.setState({
            votes: this.state.votes + 1
        })
        this.props.handleShow();
        this.props.updateSelectedData(this.props.title,this.props.imageUrl,this.props.description)
    }
    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.imageUrl} onClick={this.votesOnClickNumber} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                             😀 : {this.state.votes}
                            </Card.Text>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
};
export default HornedBeastParent;