import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Card, ListGroupItem, ListGroup,Button } from 'react-bootstrap';


export default class SongCard extends Component {
    render() {
        return (
            <div style={{margin: "10px"}}>
                <Card className="song_card" style={{ width: '18rem'}}>
                    <Card.Img variant="top" style={{ height: "200px", width: "280px" }} src={this.props.song.imageUrl} />
                    <Card.Body>
                        <Card.Title><span style={{fontWeight: "bold"}}>Title:  </span>{this.props.song.title}</Card.Title>
                        <Card.Text>
                        <span style={{fontWeight: "bold"}}>Description:</span>{this.props.song.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><span style={{fontWeight: "bold"}}>Artist:</span> {this.props.song.artist}</ListGroupItem>
                        <ListGroupItem><span style={{fontWeight: "bold"}}>Genre:</span>{this.props.song.genre}</ListGroupItem>
                        <ListGroupItem><span style={{fontWeight: "bold"}}>Format:</span>{this.props.song.format}</ListGroupItem>
                        <ListGroupItem><span style={{fontWeight: "bold"}}>Price:</span> ${this.props.song.price}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>                         
                    <NavLink to={`/edit/songs/${this.props.song.id}`}><Button className="edit_button" >Edit</Button></NavLink>
                        <Button onClick={()=> this.props.deleteSong(this.props.song.id)} className="delete_button">Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}