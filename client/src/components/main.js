import React, { Component } from "react";
import axios from "axios";
import Search from "./search";
import Results from "./results";
import Queried from "./queried";
import QueriedList from "./queriedList";
import Saved from "./saved.jsx";
import SavedList from "./savedList";
import API from "../utilities/API.js";


class Main extends React.Component {
    state = {
        qArticles: [],
        sArticles: []
    }

    componentDidMount() {
        this.fetchSaved();
    }

    fetchSaved = () => {
        axios.get("/api/fetch")
            .then((res) => this.setState({ sArticles: res.data }))
            .catch((err) => console.error(err));
    }

    queryNYT = (query) => {
        API.queryNYT(query)
            .then(res => {
                this.setState({ qArticles: res.data.response.docs });
                console.log(res);
                console.log(this.state);
            })
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
            }).then(res => {
               
                this.setState({ qArticles: art.web_url });
                this.fetchSaved();
                
            }).catch(err => console.log(err));
    }
    handleDelete = (art) => {
        axios
            .delete("/api/delete" + art._id)
            .then(res => {
                this.setState({ sArticles: art._id })
            }).catch(err => console.error(err));
    }

    render() {
        return (
            <div className="main-wrapper">
                <Search handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />
                <Results>
                    <QueriedList>
                        {this.state.qArticles.map((result, index) => {
                            return (
                                <Queried key={result._id} title={result.headline.main} datePosted={result.pub_date} link={result.web_url} handleSave={() =>
                                    this.handleSave(result)
                                }
                                />
                            )
                        })
                        }
                    </QueriedList>
                </Results>

                <SavedList>
         
                        {this.state.sArticles.map((result, index) => {
                            return (
                                <Saved key={result._id} title={result.title} datePosted={result.pub_date} link={result.web_url} handleDelete={() => this.handleDelete(result)}
                                />
                            )
                        })}
                </SavedList>

            </div>
        )
    }
}
export default Main;

