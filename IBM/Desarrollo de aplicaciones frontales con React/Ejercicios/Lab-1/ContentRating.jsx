
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
     this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings:0,
      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },

      handleDislike:() => {
         this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
    };

  }
  render() {
    return (
        <div className='content-rating'>
            <p>
            ---Agrega texto aquí---
            </p>

            <div className='rating-buttons'>
                <span>Total Rating: { this.state.totalRatings }</span>
                <br></br>
                <button className="like-button" onClick={this.state.handleLike}>
                    Me gusta ({this.state.likes})
                  </button>
                  <button className="dislike-button" onClick={this.state.handleDislike}>
                    No me gusta ({this.state.dislikes})
                </button>
            </div>
        </div>
    );
  }
}

export default ContentRating;
