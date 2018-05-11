import React from 'react';
import GoogleMap from '../components/GoogleMap'
import Articles from '../components/Articles'

export default class Footer extends React.Component{
    render(){

        const Data = (
            <div>
              Implemented Google Map in ReactJS
            </div>
          ) 

        const ArticlesData =[
            {
                data:{
                    img :'https://auto.ndtvimg.com/car-images/big/lamborghini/urus/lamborghini-urus.jpg?v=6',
                    header:'Cars Header',
                    text:' Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
                }
               
            },
            {
                data: {
                    img :'http://images.performgroup.com/di/library/sporting_news/8f/4d/cover-photo-sb-52_qjglwj3n2ejq1crod5r65aqts.jpg?w=1920&h=1080&quality=100&w=650&h=366&quality=75',
                    header:'Sports Header',
                    text:' Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
                }
            }
        ]
        console.log(ArticlesData ,'ArticlesData')
        return(
            <div className="jumbotron jumbotron-fluid">
               
                {/* <p><b>Note:</b> The summary element is not supported in Edge/Internet Explorer.</p>
             */}
                <div className="container">
                    <div className="row footer">
                        <div className="col">
                            <GoogleMap />
                        </div>
                        <div className="col">
                        {/* <div class="container">
                            <h1 class="display-4">Fluid jumbotron</h1>
                            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                        <details>
                            <summary>Copyright 1999-2014.</summary>
                            <p> - by Refsnes Data. All Rights Reserved.</p>
                            <p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
                        </details> */}
                        {/* <Articles /> */}

                        {
                            ArticlesData.map(content =>{
                                return (<Articles content={content}/>)
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}