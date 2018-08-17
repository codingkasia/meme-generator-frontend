import React from "react";

const MemesListItem = props => {
  return <div>
      {props.meme.name}
      <img src={props.meme.url} alt={props.meme.name} onClick={() => props.fetchCaptionMeme()} />
    </div>;
};

export default MemesListItem;
