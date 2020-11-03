import React from 'react';
import SearchBar from './SearchBar';
import youtube from './apis/youtubeapi';
import VideoList from './VideoList';
import Header from './Header';
import Home from'./Home';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component {
    state = {
        videos: [],
       search_text: ''
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items ,
            search_text: termFromSearchBar
        })
    };
    

    render() {
        console.log(this.state.search_text)
        if(this.state.search_text.length === 0){
            return(
                    
                    <div className ="app">
                        
                                <Header />
                                <SearchBar handleFormSubmit={this.handleSubmit} />
                                <Home />
                    </div>
                    
                
            )
        }
        else{
            return(
               
                    <div className ="app">
                    
                            
                                <Header />
                                <SearchBar handleFormSubmit={this.handleSubmit}/>
                                <VideoList videos={this.state.videos}/>
                               
                           </div>
                           
            )
            
        
            }
    }
}

export default App;