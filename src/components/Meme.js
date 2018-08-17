import React, { Component } from "react";

class Meme extends Component {
  render() {
    const {myMemes, allMemes} = this.props
    return (
      <div>
        {myMemes.map(meme => {
          // console.log(meme.data.attributes.url)
          return <img key={meme.data.id} src={meme.data.attributes.url} alt="my-meme" className="my-meme-img" onClick={e => this.props.removeMyMeme(meme.data.id)} />;
        })}
      </div>
    );
  }
}

export default Meme;
