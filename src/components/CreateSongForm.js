import React, { Component } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {API_URL} from './constants/API'
import '../styles/Songs.css'

const ADDSONGAPI = `${API_URL}/admin/addsong`

export default class CreateSongForm extends Component {

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
        fetch(ADDSONGAPI, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json",
                'Authorization': "Bearer " + localStorage.token,
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(song => {
                this.props.history.push('/songs')
            })
    }

    render() {
        const { imageUrl, title, description, artist, genre, format, price } = this.state
        return (
            <div>
                <div className="input-group" style={{marginTop: "30px"}}>
                    <Form className="form-control" onSubmit={this.onSubmit}>
                        <Form.Row >
                            <Col className="mb-2" >
                                <Form.Label className="float-start">Image</Form.Label>
                                <Form.Control required="required" name="imageUrl" value={imageUrl} onChange={this.onChange} />
                            </Col>
                            <Col className="mb-2" >
                                <Form.Label className="float-start">Title</Form.Label>
                                <Form.Control required="required" name="title" value={title} onChange={this.onChange} />
                            </Col>
                            <Col className="mb-2">
                                <Form.Label className="float-start">Description</Form.Label>
                                <Form.Control required="required" name="description" value={description} onChange={this.onChange} />
                            </Col>
                            <Col className="mb-2">
                                <Form.Label className="float-start">Artist</Form.Label>
                                <Form.Control required="required" name="artist" value={artist} onChange={this.onChange} />
                            </Col>
                            <Col className="mb-2">
                                <Form.Label className="float-start">Genre</Form.Label>
                                <Form.Control required="required" name="genre" value={genre} onChange={this.onChange} />
                            </Col>
                            <Form.Label className="float-start">Format</Form.Label>
                            <Form.Control required="required" as="select" name="format" value={format} onChange={this.onChange}>
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
                                <Form.Control required="required" name="price" value={price} onChange={this.onChange} />
                            </Col>
                        </Form.Row>
                        <Button type="submit" className="addsong-button">Add Song</Button>
                        <Link  to="/songs"><Button className="cancel-button">Cancel</Button></Link>
                    </Form>
                </div>
            </div>
        )
    }
}
