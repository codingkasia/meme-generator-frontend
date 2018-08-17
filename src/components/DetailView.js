import React from 'react'


const DetailView = (props) =>  {
    if (!props.meme) {
        return "Enter search"
    }
        return <div><img src={props.meme.url} alt={props.meme.name}/></div>;

}
export default DetailView