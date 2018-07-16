import React, { Component } from "react";

export class UserCard extends Component {
  randomQuote() {
    var quotes = this.props.quotes;
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({"quote":quote});
  }
  componentWillMount() {
    this.setState({
      "quote":"-"
    })
  }
  componentDidMount() {
    this.randomQuote();
  }
  render() {
    return (
      <div className="card card-user">
        <div className="image">
          <img src={this.props.bgImage} alt="..." />
        </div>
        <div className="content">
          <div className="author">
            <img
              className="avatar border-gray"
              src={this.props.avatar}
              alt="..."
            />
            <h4 className="title">
              {this.props.name}
              <br />
              <small style={{'fontSize':'14px'}}>{this.props.jobTitle}</small>
            </h4>
          </div>
          <br />
          <p className="description text-center">{this.state.quote}</p>
        </div>
        <hr />
        <div className="text-center">{this.props.socials}</div>
      </div>
    );
  }
}

export default UserCard;
