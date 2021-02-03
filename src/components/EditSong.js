import React, { Component } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import AdminNav from './AdminNav'
import './Songs.css'

const EDITSONGAPI = `http://localhost:8080/api/admin/edit/songs/`

export default class EditSong extends Component {

    state = {
        imageUrl: '',
        title: '',
        description: '',
        artist: '',
        genre: '',
        format: '',
        price: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        fetch(EDITSONGAPI + this.props.match.params.id, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json",
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(song => {
                this.props.history.push('/songs')
            })
    }

    componentDidMount() {
        fetch(EDITSONGAPI + this.props.match.params.id)
            .then(res => res.json())
            .then(song => {
                const { imageUrl, title, description, artist, genre, format, price } = song
                this.setState({
                    imageUrl, title, description, artist, genre, format, price
                })
            })
    }



    render() {
        const { imageUrl, title, description, artist, genre, format, price } = this.state
        return (
            <div>
                <div>
                    <AdminNav />
                </div>
                <div className="input-group" style={{ marginTop: "30px" }}>
                    <Form className="form-control" onSubmit={this.onSubmit}>
                        <Form.Row >
                            <Col className="mb-2" >
                                <Form.Label className="float-start">Image</Form.Label>
                                <Form.Control name="imageUrl" value={imageUrl} onChange={this.onChange} />
                            </Col>
                            <Col className="mb-2" >
                                <Form.Label className="float-start">Title</Form.Label>
                                <Form.Control name="title" value={title} onChange={this.onChange} />
                            </Col>
                            <Col className="mb-2">
                                <Form.Label className="float-start">Description</Form.Label>
                                <Form.Control name="description" value={description} onChange={this.onChange} />
                            </Col>
                            <Col className="mb-2">
                                <Form.Label className="float-start">Artist</Form.Label>
                                <Form.Control name="artist" value={artist} onChange={this.onChange} />
                            </Col>
                            <Col className="mb-2">
                                <Form.Label className="float-start">Genre</Form.Label>
                                <Form.Control name="genre" value={genre} onChange={this.onChange} />
                            </Col>
                            <Form.Label className="float-start">Format</Form.Label>
                            <Form.Control as="select" name="format" value={format} onChange={this.onChange}>
                                <option>{format}</option>
                                <option value="AIFF">AIFF</option>
                                <option value="MP3">MP3</option>
                                <option value="MP4">MP4</option>
                                <option value="OGG">OGG</option>
                                <option value="WAV">WAV</option>
                                <option value="WMA">WMA</option>
                            </Form.Control>
                            <Col className="mb-2">
                                <Form.Label className="float-start">Price</Form.Label>
                                <Form.Control name="price" value={price} onChange={this.onChange} />
                            </Col>
                        </Form.Row>
                        <Button type="submit" className="save-button">Save</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
