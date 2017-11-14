import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default class ItemExamples extends Component {

  render() {


    let exampleNodes = this.props.examples.map( function(example, i) {

      return (
        <SyntaxHighlighter language="scss" useInlineStyles={false} key={i}>{ example.code }</SyntaxHighlighter>
      );
    });

    return (
      <section className="item__block-examples">
        <h4 className="item__block-subtitle">Example Usage</h4>
        { exampleNodes }
      </section>
    );
  }
}
