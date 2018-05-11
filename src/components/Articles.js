import React from 'react';

export default class Articles extends React.Component{
    render(){

        let {content} = this.props;
        return(
            <div className="media Article">
               <img className="mr-3" src={content.data.img} alt="Generic placeholder image" style={{width:'100px',height:'100px'}} />
                <div className="media-body">
                    <h5 className="mt-0">{content.data.header}</h5>
                    {content.data.text}
                </div>
            </div>
        )
    }
} 

