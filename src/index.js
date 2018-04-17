import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAj8shcLUBZ9exXqDoEoJEp000IiMnPyk0';



//Create new component
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('latest');
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });            
        });
    };

    render() {

        const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 400);  // To throttle search speed ; once every 400 ms

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={ (selectedVideo) => this.setState({selectedVideo}) }
                    videos={this.state.videos} 
                />
            </div>
        );
    }
}

//Put the component in the dom
ReactDOM.render(<App />, document.querySelector('.container'));
