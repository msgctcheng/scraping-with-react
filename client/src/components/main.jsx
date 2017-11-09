import React, { Component } from "react";
import axios from "axios";
import Search from "./search";
import Queried from "./queried";
import QueriedList from "./queriedList";
import Saved from "./saved";
import SavedList from "./savedList";
import API from "../utilities/API.js";


class Main extends React.Component {
    state = {
        qArticles: [],
        sArticles: [],
        searchTerm: ""
    }

    componentDidMount() {
        this.fetchSaved();
    }

    fetchSaved = () => {
        axios.get("/api/fetch")
            .then((res)=> this.setState({sArticles: res.data}))
            .catch((err)=> console.error(err)); 
    }

    queryNYT = (query) => {
        API.queryNYT(query)
            .then (res => this.setState({ qArticles: res.data.response.docs }))
            .catch(err => console.error(err));
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.queryNYT(this.state);
    }

    handleSave = (art) => {
        axios
            .post("/api/save", {
                title: art.headline.main,
                datePosted: art.pub_date,
                link: art.web_url
            }).then (res => {
                const filtered = this.state.qArticles.filter (result =>{
                    return result.web_url !== art.web_url;
                })
                this.setState({qArticles: filtered});
                this.fetchSaved();
            }).catch(err => console.error(err));
        }
    handleDelete = (art) => {
        axios
            .delete("/api/delete" + art._id)
            .then( res => {
                const filtered = this.state.sArticles.filter (result => {
                    return result._id !== art._id;
                });
                this.setState({sArticles: filtered})
            }).catch( err => console.error(err));
    }

    render () {
        return(
        <div className="wrapper">
        <Search handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
        <qArticles>
            <QueriedList>
                {this.state.qArticles.map((result, index)=>{
                    return (
                        <Queried key={result._id} title={result.headline.main} datePosted={result.pub_date} link={result.web_url} handleSave = {() =>
                            this.handleSave(result)
                        } 
                        />
                    )
                })}
            </QueriedList>
        </qArticles>
        <sArticles>
            <SavedList>
                {this.state.sArticles.map ((result, index)=>{
                    return(
                        <Saved key={result._id} title={result.title} datePosted={result.pub_date} link={result.web_url} handleDelete={ ()=> this.handleDelete(result)} 
                        />
                    )
                })}
            </SavedList>
        </sArticles>
        </div> 

        )
    }
}
export default Main;

