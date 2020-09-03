import React, { Component } from 'react';
import './Directory.styles.scss';
import Menu from './../Menu/Menu';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntLi/hats.png',
          id: 1,
          linkUrl: '',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/cvpntLi/jackets.png',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/cvpntLi/jackets.png',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/cvpntLi/jackets.png',
          id: 4,
          size: 'large',
          linkUrl: '',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/cvpntLi/jackets.png',
          id: 5,
          size: 'large',
          linkUrl: '',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <Menu key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
