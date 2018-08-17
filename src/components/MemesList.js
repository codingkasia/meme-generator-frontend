import React from 'react';


class MemesList extends React.Component {
  constructor() {
    super();

    this.state = {
      hover: false
    }
  }

  render() {
    return <div className="meme-item" onMouseEnter={() => this.setState(
      { hover: true }
    )} onMouseLeave={() => this.setState({
      hover: false
      })} onClick={() => {
        this.props.fetchClickedMeme(this.props.meme.id)
      
      // console.log(this.props.meme.id)
      }
    }>

    
      <img src={this.props.meme.url} alt={this.props.meme.name} className={this.state.hover ? "meme-img darken-img" : "meme-img"} />
      <p className={this.state.hover ? "meme-txt" : "no-txt"}>
        {this.props.meme.name}
      </p>
    </div>;
  }
  "latest change"
};

export default MemesList;

// import React from "react";
// import MemesListItem from './MemesListItem'

// const MemesList = props => {
//     // console.log("props", props.meme.name)
//   return <div>
//       {props.filterMemes.map(meme => (
//         <MemesListItem
//           meme={meme}
//           key={meme.id}
//           setClickedMeme={props.setClickedMeme}
//         />
//       ))}
//     </div>;
// };

// export default MemesList; 



