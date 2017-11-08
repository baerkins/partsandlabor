import React, { Component } from 'react';
import items from '../json/raw.json';
import './Navigation.css';

const sortedItems = items.sorted;

// Item Nav Items
class ItemNavNode extends Component {

  render() {

    return (
      <li className="nav__item">
        <a href={'#item-' + encodeURI(this.props.name)}>{this.props.name}</a>
      </li>
    );
  }
}

// Type Nav Items
class TypeNavNode extends Component {

  render() {

    let itemNodes = null;

    // the Node component calls itself if there are children
    if (this.props.children) {
      itemNodes = this.props.children.map(function(item, i) {
       return (
         <ItemNavNode key={i} name={item.context.name} />
       );
     });
    }

    // return our list element
    // display children if there are any
    return (
      <li className="nav__type">
        <a href={'#type-section-' + encodeURI(this.props.name)}>{this.props.name}</a>
        { itemNodes ?
          <ul className="nav__item-list">{itemNodes}</ul>
        : null }
      </li>
    );
  }
}

// Group Nav Items
class GroupNode extends Component {

  render() {

    let typeNodes = null;

    // the Node component calls itself if there are children
    if (this.props.children) {
      typeNodes = this.props.children.map(function(typenode, i) {

        return (
          <TypeNavNode key={i} name={typenode.typeName} children={typenode.items} />
        );
     });
    }

    // return our list element
    // display children if there are any
    return (
      <li className="nav__group">
        <a href={'#group-section-' + encodeURI(this.props.name)}>{this.props.name}</a>
        { typeNodes ?
          <ul className="nav__type-list">{typeNodes}</ul>
        : null }
      </li>
    );
  }
}

// Create the Navigation
const Navigation = () => {

  let navItems = sortedItems.map(function(group, i) {
    return (
      <GroupNode key={i} name={group.groupName} children={group.groupTypes} />
    );
  });

  return (
    <ul>
      {navItems}
    </ul>
  );
};

export default Navigation;