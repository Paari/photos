import React from 'react';
import ReactImages from './../grid-component/components/react-images.jsx';
import Request from 'superagent';
import _ from 'lodash';

export default class Grid extends React.Component {

  constructor() {
    super();
    this.state = {
      imgData: []
    };
  }

  componentWillMount() {

    // url to the api for fetching list of images
    var url = "/api/photos";

    // load photos from the API when the component loads
    Request.get(url).then((response) => {

      // variable storing the formatted value to be passed in the child component
      var final = [];

      // store the array of all the images from the API
      _.map(response.body[0], (photosObj) => {
        final.push({url: `thumbnail/${photosObj}`,link: `images/${photosObj}`});
      })

      // Change the state of the final data value in the view
      this.setState({
        imgData: final
      });

    });
  }

  render() {

    return (
      <section>
        <div className="grid-wrapper">
            <ReactImages imagesArray={this.state.imgData} columns={[ 2, 3, 5 ]} padding={10} />
        </div>
      </section>
    )
  }
}
