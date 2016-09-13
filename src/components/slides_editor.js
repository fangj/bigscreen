import React from 'react';
import ImageEditor from './image_editor';

export default class SlidesEditor extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {data,screenIndex}=this.props;
    return (
      <ImageEditor data={data} screenIndex={screenIndex}/>
    );
  }
}
