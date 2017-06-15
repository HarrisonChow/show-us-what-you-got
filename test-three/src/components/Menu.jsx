import React, { Component } from 'react';
import MenuData from '../data/menu-data.json';


class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav">
        <ul className="navigation">
          {
            MenuData.children.map(function(item, i){
              return (
                <li key={i}><a href="#">{item.name}</a>
                  <ul>
                    {
                      item.children.map(function(subitem, i){
                        return (
                          <li key={i}><a href="#">{subitem.name}</a></li>
                        )
                      })
                    }
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </nav>
    );
  }
}

export default Menu;
