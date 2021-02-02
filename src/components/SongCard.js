import React, { Component } from 'react'
import { Card, ListGroupItem, ListGroup,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'


export default class SongCard extends Component {
    render() {
        return (
            <div style={{margin: "10px"}}>
                <Card className="mb-3" style={{ width: '18rem'}}>
                    <Card.Img variant="top" style={{ height: "200px", width: "287px" }} src={this.props.song.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.song.title}</Card.Title>
                        <Card.Text>
                            {this.props.song.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem> {this.props.song.artist}</ListGroupItem>
                        <ListGroupItem>{this.props.song.genre}</ListGroupItem>
                        <ListGroupItem>{this.props.song.format}</ListGroupItem>
                        <ListGroupItem>{this.props.song.price}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>                         
                        <Link className="btn btn-success"  to={`/edit/songs/${this.props.song.id}`}>Edit</Link>
                        <Button onClick={()=> this.props.deleteSong(this.props.song.id)} className="btn btn-danger">Delete</Button>
                    </Card.Body>
                </Card>


            </div>
        )
    }
}