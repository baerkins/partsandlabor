import React, { Component } from 'react';

export default class ItemParams extends Component {

  render() {

    let paramRows = this.props.params.map( function(param, i) {

      return (
        <tr key={i}>
          <td>{param.name}</td>
          <td>{param.type}</td>
          {param.description ? (
            <td>{param.description}</td>
          ) : (
            <td></td>
          )}
          {param.default ? (
            <td>{param.default}</td>
          ) : (
            <td>n/a</td>
          )}
        </tr>
      );
    });

    return (
      <section className="item__block-params">
        <h4 className="item__block-subtitle">Parameters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            {paramRows}
          </tbody>
        </table>
      </section>
    );
  }
}
