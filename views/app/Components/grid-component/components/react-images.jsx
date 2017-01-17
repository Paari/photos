import React from 'react';
import ReactPhoto from './react-photo.jsx';

// map the values passed
const ReactImages = ({ imagesArray, padding = 0, columns = [1, 2, 3] }) => {
  const imageNodes = imagesArray.map((arr, index) => {
    return (
      <ReactPhoto key={index} url={arr.url} link={arr.link} columns={columns} padding={padding} clickHandler={arr.clickHandler} />
    );
  });

  // calculate the width of the box based on the grid size
  const cssBreakpoints = `
    .imageGridItem { width: ${Math.floor(100 / columns[0])}%; }

    @media only screen and (min-width : 480px) {
      .imageGridItem { width: ${Math.floor(100 / columns[1])}%; }
    }
    @media only screen and (min-width : 992px) {
      .imageGridItem { width: ${Math.floor(100 / columns[2])}%; }
    }
  `;

  return (
    <div className="imageGrid">
      <style dangerouslySetInnerHTML={{ __html: cssBreakpoints }} />
      {imageNodes}
    </div>
  );
};

ReactImages.propTypes = {
  imagesArray: React.PropTypes.array.isRequired,
  columns: React.PropTypes.array,
  padding: React.PropTypes.number,
};

ReactImages.defaultProps = {
  imagesArray: [],
  columns: [1, 2, 3],
  padding: 0,
};

export default ReactImages;
