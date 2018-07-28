import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSerach from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBFMSsw79KnHHxrZjKy4YF1QdX9AzIevp8';


// create component
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Amr Diab');
    }
    videoSearch(term){
        YTSerach({key: API_KEY, term: term}, videos =>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        const videoSerach = _.debounce(term => {this.videoSearch(term), 300});
        return (
            <div>
                <SearchBar onVideoSearch= {videoSerach} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos= {this.state.videos} 
                />
            </div>
        );
    }
}

// render in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));