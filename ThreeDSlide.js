import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import cansat1 from "../images/cansat1.jpg";
import cansat2 from "../images/cansat2.png";
import cansat3 from "../images/cansat3.png";
import cansat4 from "../images/cansat4.png";
import cansat5 from "../images/cansat5.jpg";
import cansat6 from "../images/cansat6.jpg";

export default class ThreeDSlide extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src={cansat1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={cansat2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={cansat3} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={cansat4} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={cansat5} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={cansat6} alt="6" />
    },
    
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div>
            
            <input
              type="checkbox"
              checked={this.state.showNavigation}
              name="showNavigation"
              onChange={e => {
                this.setState({ showNavigation: e.target.checked });
              }}
            />
          </div>
          
        </div>
      </div>
    );
  }
}
