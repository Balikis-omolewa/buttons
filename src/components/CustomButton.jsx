import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnColor, bgColor, border, pghText, padding, display, children, className }) => {
  const styles = {
    btnBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "300px"
    },
    pghStyle: {
      marginLeft: "15%",
      marginTop: "5%"
    },
    btnStyle: {
      display: display,
      maxWidth: "120px",
      color: btnColor,
      backgroundColor: bgColor,
      margin: "45px 50px",
      padding: padding || "12px 20px",
      borderRadius: "8px",
      border: border,
      fontWeight: "400"
    }
  };

  return (
    <div style={styles.btnBox}>
      <p style={styles.pghStyle}>{pghText}</p>
      <button className={`button ${className}`} style={styles.btnStyle}>
        {children || "Default"}
      </button>
    </div>
  );
};

Button.propTypes = {
  btnColor: PropTypes.string,
  bgColor: PropTypes.string,
  border: PropTypes.string,
  pghText: PropTypes.string,
  padding: PropTypes.string,
  display: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string
};

export default Button;
