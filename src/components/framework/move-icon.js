import React from "react";
import PropTypes from 'prop-types';

const MoveIcon = ({
  x,
  y,
  scale,
  rectWidth,
  rectHeight,
  IconTranslateX,
  IconTranslateY,
  handleClick,
  active,
  activeFill,
  fill
}) => {
  return (
      <g onClick={handleClick} style={{cursor: "pointer"}} transform={`translate(${x},${y})`}>
        <rect
          width={rectWidth}
          height={rectHeight}
          rx="3"
          ry="3"
          x={0}
          y={0}
          fill={"rgb(255,255,255)"}
          filter="url(#dropshadow)" />
        <g transform={`translate(${IconTranslateX},${IconTranslateY}),scale(${scale})`}>
          <path fill={active ? activeFill : fill} d="M506.199,242.968l-73.09-73.089c-3.614-3.617-7.898-5.424-12.848-5.424c-4.948,0-9.229,1.807-12.847,5.424   c-3.613,3.619-5.424,7.902-5.424,12.85v36.547H292.355V109.641h36.549c4.948,0,9.232-1.809,12.847-5.424   c3.614-3.617,5.421-7.896,5.421-12.847c0-4.952-1.807-9.235-5.421-12.851L268.66,5.429c-3.613-3.616-7.895-5.424-12.847-5.424   c-4.952,0-9.232,1.809-12.85,5.424l-73.088,73.09c-3.618,3.619-5.424,7.902-5.424,12.851c0,4.946,1.807,9.229,5.424,12.847   c3.619,3.615,7.898,5.424,12.85,5.424h36.545v109.636H109.636v-36.547c0-4.952-1.809-9.234-5.426-12.85   c-3.619-3.617-7.902-5.424-12.85-5.424c-4.947,0-9.23,1.807-12.847,5.424L5.424,242.968C1.809,246.585,0,250.866,0,255.815   s1.809,9.233,5.424,12.847l73.089,73.087c3.617,3.613,7.897,5.431,12.847,5.431c4.952,0,9.234-1.817,12.85-5.431   c3.617-3.61,5.426-7.898,5.426-12.847v-36.549H219.27v109.636h-36.542c-4.952,0-9.235,1.811-12.851,5.424   c-3.617,3.617-5.424,7.898-5.424,12.847s1.807,9.233,5.424,12.854l73.089,73.084c3.621,3.614,7.902,5.424,12.851,5.424   c4.948,0,9.236-1.81,12.847-5.424l73.087-73.084c3.621-3.62,5.428-7.905,5.428-12.854s-1.807-9.229-5.428-12.847   c-3.614-3.613-7.898-5.424-12.847-5.424h-36.542V292.356h109.633v36.553c0,4.948,1.807,9.232,5.42,12.847   c3.621,3.613,7.905,5.428,12.854,5.428c4.944,0,9.226-1.814,12.847-5.428l73.087-73.091c3.617-3.617,5.424-7.901,5.424-12.85   S509.82,246.585,506.199,242.968z"></path>
        </g>
      </g>
    );
};

MoveIcon.propTypes = {
  scale: PropTypes.number,
  IconTranslateX: PropTypes.number,
  IconTranslateY: PropTypes.number,
  rectWidth: PropTypes.number,
  rectHeight: PropTypes.number
};

MoveIcon.defaultProps = {
  scale: .04,
  IconTranslateX: 5,
  IconTranslateY: 5,
  rectWidth: 30,
  rectHeight: 30,
  fill: "rgb(180,180,180)",
  activeFill: "rgb(80,80,80)",
  active: false
};

export default MoveIcon;
