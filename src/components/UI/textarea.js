import React, { Component } from "react";

class Textarea extends Component {
  render() {
    const { label, placeholder, val } = this.props;
    return (
      <div className="field">
        <label className="label">{label}</label>

        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea className="textarea" placeholder={placeholder}>
                {val}
              </textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Textarea;
