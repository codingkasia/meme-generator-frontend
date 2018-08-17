import React from 'react';
// import { Route, Link, Switch } from "react-router-dom";
import './index.css';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import MemesList from "./components/MemesList";
import Meme from './components/Meme';
import Search from './components/Search'
// import Navbar from './components/Navbar';
// import Comments from "./components/Comments";
const url = "https://api.imgflip.com/get_memes";
// const newMemeUrl = 'https://api.imgflip.com/caption_image'

class App extends React.Component {
  constructor() {
    super();
//create states
    this.state = {
      memes: [],
      myMemes: [],
      memeLimit: 15,
      addMeme: 10,
      text0: "",
      text1: "",
      comments: ["hello"],
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.fetchApi();
    // this.fetchFromBackend()
  }

  updateTermSearch = newSearchTerm => {
    this.setState({ searchTerm: newSearchTerm });
  };

    filterMemes = () => {
      return this.state.memes.filter(meme =>
        meme.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
    };

  viewAllComments = () => {
    this.state.comments;
  };

  allMemes = () => {
    this.state.myMemes;
  };

  removeMyMeme = id => {
    this.setState({
      myMemes: this.state.myMemes.filter(meme => meme.data.id !== id)
    });
  };
  fetchApi = () => {
    return fetch(url)
      .then(resp => resp.json())
      .then(
        result => this.setState({ memes: result.data.memes })
        //
      );
  };
  fetchFromBackend = () => {
    // return fetch("http://localhost:3000/api/v1/memes")
    return fetch("https://git.heroku.com/meme-generator-api.git/api/v1/memes")
      .then(resp => resp.json())
      .then(result => console.log(result));
  };
  fetchClickedMeme = memeId => {
    // return fetch("http://localhost:3000/api/v1/memes", {
    return fetch(
      "https://git.heroku.com/meme-generator-api.git/api/v1/memes",
      {
        method: "POST",
        mode: "no-cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          template_id: memeId,
          username: "kasiarosenb",
          password: "kasiarosenb",
          text0: this.state.text0,
          text1: this.state.text1
        })
      }
    )
      .then(response => response.json())
      .then(result =>
        this.setState({ myMemes: [...this.state.myMemes, result] })
      );
    // this.state.myMemes
  };

  render() {
    return (
      <div className="App">
        {/* <Route component={Navbar} />

      <Route path="/comments" component={Comments} /> */}

        {/* <Comments allComments={this.state.comments}/> */}
        <h2>Create Your Own Meme!</h2>
        <Meme
          myMemes={this.state.myMemes}
          allMemes={this.allMemes}
          removeMyMeme={this.removeMyMeme}
        />
        <h3>Search</h3>
        <Search updateTermSearch={this.updateTermSearch} />
        <h4>
          <i>Insert Some Text Below</i>
        </h4>
        <Form inline>
          <FormGroup>
            <ControlLabel>TEXT 1</ControlLabel>{" "}
            <FormControl
              type="text"
              onChange={event => this.setState({ text0: event.target.value })}
            />
          </FormGroup>{" "}
          <FormGroup>
            <ControlLabel>TEXT 2</ControlLabel>{" "}
            <FormControl
              type="text"
              onChange={event => this.setState({ text1: event.target.value })}
            />
          </FormGroup>
        </Form>
        {this.filterMemes().slice(0, this.state.memeLimit).map((meme, index) => {
          // {this.state.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return <MemesList key={index} meme={meme} text0={this.state.text0} text1={this.state.text1} fetchClickedMeme={this.fetchClickedMeme} filterMemes={this.filterMemes()} />;
        })}
        <div
          className="meme-button"
          onClick={() => {
            this.setState({
              memeLimit: this.state.memeLimit + this.state.addMeme
            });
          }}
        >
          Load {this.state.addMeme} more memes...
        </div>
      </div>
    );
  }
}

export default App;




// {/* // class App extends Component { */}
// {/* //   constructor() { */}
// {/* //     super();
// //     this.state = {
// //       searchTerm: "",
// //       memes: [],
// //       featuredMeme: null,
// //       memeText: ''
// //     };
// //   }

// //   componentDidMount() {
// //     this.fetchMemes();
// //   }
// //   fetchCaptionMeme = () => {
// //     fetch(captionUrl).then(resp=>resp.json()).then(result => this.setState({featuredMeme: result}))
// //   }
// //   fetchMemes = () => {
// //     fetch(url)
// //       .then(resp => resp.json())
// //       .then(result => this.setState({ memes: result.data.memes }));
// //     //
// //   };

// //   updateTermSearch = newSearchTerm => {
// //     this.setState({ searchTerm: newSearchTerm });
// //   };

// //   filterMemes = () => {
// //     return this.state.memes.filter(meme =>
// //       meme.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
// //     );
// //   };

// //   setClickedMeme = (meme) => {
// //     this.setState({featuredMeme: meme})
// //   }

// //   changeMeme(text) {
// //     this.setState({
// //       memeText: text
// //     });
// //   }

// //   render() {
// //     return (
// //     <div className="App">
// //         <div>
// //           <h2>Meme Generator</h2>
// //           <input onChange={e => this.changeMeme(e.target.value)}
// //             autoFocus="1" />
// //           <Meme text={this.state.memeText} />
// //         </div>
// //     <div>
// //       {this.state.featuredMeme ? <DetailView meme={this.state.featuredMeme} /> : null}
// //         <Search updateTermSearch={this.updateTermSearch} />
// //         <MemesList filterMemes={this.filterMemes()} setClickedMeme={this.setClickedMeme} />
// //       </div>
      
// //       </div>
// //     )
// //   }
// // }

// // export default App;



//  */}
