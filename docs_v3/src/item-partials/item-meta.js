import React, { Component } from 'react';

export default class ItemMeta extends Component {

  render(){

    return (
      <div className="item__meta">
        <p>
          <span><span>Group:</span>{this.props.group}</span>

          { this.props.access ? (
            <span><span>Access:</span>{this.props.access}</span>
          ) : (
            null
          )}

          {this.props.since ? (
            <span><span>Since:</span>{this.props.since}</span>
          ) : (
            null
          )}
        </p>
      </div>
    );
  }
}
