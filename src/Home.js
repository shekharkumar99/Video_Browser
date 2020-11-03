import React, {Component} from 'react';
import VideoList from './VideoList';

const API = 'AIzaSyBfGh8-7YbCHxoeEONd6l6iiwgV_ba9Rug'
const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A'
const result = 20;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Home extends Component {

  constructor(props){
    super(props);
  

    this.state = {
      resultyt: []
    };
  }
    
    componentDidMount() {
      fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      })

    
    
  }




  render(){
    // console.log(finalURL);

    
    console.log(this.state.resultyt);

    return(
      <div>
        {
            this.state.resultyt.map((link, i) => {
              console.log(link);
              var frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
              return frame;
            })
          }
          {this.frame}


    </div>
    );
  }
}

export default Home;