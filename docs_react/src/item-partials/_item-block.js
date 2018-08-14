import React, { Component } from 'react';
import ItemMeta from './item-meta';
import ItemParams from './item-params';
import ItemExamples from './item-examples';
import './item-block.css';

export default class ItemBlock extends Component {

  render(){

    var sinceVal = null;

    if ( this.props.itemData.since ) {
      if ( this.props.itemData.since[0] !== 'undefined' ) {
        sinceVal = this.props.itemData.since[0].version;
      }
    }

    return (
      <article id={'item-' + encodeURI(this.props.name)} className="item__block">

        <h3 className="item__block-title"><span>&#x000B6;{this.props.count}</span> {this.props.name}</h3>
        <h4 className="item__block-subtitle">Description</h4>
        <p className="item__block-description">{ this.props.itemData.description }</p>

        {/* Parameters */}
        {this.props.itemData.parameter ? (
          <ItemParams params={this.props.itemData.parameter} />
        ) : (
          null
        )}

        {/* Examples */}
        {this.props.itemData.example ? (
          <ItemExamples examples={this.props.itemData.example} />
        ) : (
          null
        )}

        {/* Parameters */}

        <h4 className="item__block-subtitle">File Reference</h4>
        <p className="item__block-fileref"><a href={'https://github.com/baerkins/partsandlabor/blob/master/lib/' + this.props.itemData.file.path + '#L' + this.props.itemData.commentRange.start } target="_blank" rel="noopener">../lib/{this.props.itemData.file.path}</a> on line {this.props.itemData.commentRange.start}</p>

        <ItemMeta group={this.props.itemData.group} access={this.props.itemData.access} since={sinceVal} />

      </article>
    );
  }
}
