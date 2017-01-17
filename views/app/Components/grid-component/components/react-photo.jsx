import React from 'react';

// animation effects
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const ReactPhoto = ({ url, link, padding, clickHandler = null }) => {
  const pointer = clickHandler ? 'pointer' : 'auto';

  const styles = {
    imageGridItem: {
      display: 'inline-block',
      boxSizing: 'border-box',
      float: 'left',
      padding,
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      paddingBottom: '100%',
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      cursor: pointer,
    },
  };

  return (
    <ReactCSSTransitionGroup
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={300}>
    <div className="imageGridItem" style={styles.imageGridItem}>
      <div className="imageWrapper" style={styles.imageWrapper}>
        <div className="actions">
          <a href={link} target="_blank" download>
            <button className="download-button">Download</button>
          </a>
        </div>
      </div>
    </div>
    </ReactCSSTransitionGroup>
  );
};

ReactPhoto.propTypes = {
  url: React.PropTypes.string,
  padding: React.PropTypes.number,
  clickHandler: React.PropTypes.func,
};

export default ReactPhoto;
