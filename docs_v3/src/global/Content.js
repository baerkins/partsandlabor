import React, { Component } from 'react';
import items from '../json/raw.json';
import './Content.css';
import ItemBlock from '../item-partials/_item-block.js';

const sortedItems = items.sorted;

window.ItemBlockCount = 0;

function increment(){
  window.ItemBlockCount++;
  return window.ItemBlockCount;
}


// Type Blocks
class TypeBlockNode extends Component {

  render() {

    let itemBlocks = null;

    // the Node component calls itself if there are children
    if (this.props.children) {
      itemBlocks = this.props.children.map(function(item, i) {
        var countVal = increment();
        return (
          <ItemBlock key={i} itemData={item} name={item.context.name} count={countVal} />
        );
     });
    }

    // return our list element
    // display children if there are any
    return (
      <section id={'type-section-' + encodeURI(this.props.name)} className="docs__type">
        <h2 className="docs__type-title">{this.props.name}</h2>
        { itemBlocks ? itemBlocks : null }
      </section>
    );
  }
}


// Group Block
class GroupBlockNode extends Component {

  render() {

    let typeBlocks = null;

    // the Node component calls itself if there are children
    if (this.props.children) {
      typeBlocks = this.props.children.map(function(typenode, i) {
        return (
          <TypeBlockNode key={i} name={typenode.typeName} children={typenode.items}/>
        );
     });
    }

    // Return the Group Block
    return (
      <section id={'group-section-' + encodeURI(this.props.name)} className="docs__group">
        <h1 className="docs__group-title">{this.props.name}</h1>
        { typeBlocks ? typeBlocks : null }
      </section>
    );
  }
}

// Create the Content
const Content = () => {

  let groupBlocks = sortedItems.map(function(group, i) {
    return (
      <GroupBlockNode key={i} name={group.groupName} children={group.groupTypes} />
    );
  });

  return (
    groupBlocks
  );
};

export default Content;