import React, { Component } from "react";

class Button extends Component {
  render() {
    const { value, classStyle, click } = this.props;

    return (
      <p className="control">
        <a className={classStyle} onClick={click}>
          {value}
        </a>
      </p>
    );
  }
}

export default Button;
