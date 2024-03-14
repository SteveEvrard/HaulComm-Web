import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

const Section = ({ title, imageUrl, isOdd, body }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const containerStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : (isOdd ? 'row-reverse' : 'row'), // Stack elements vertically on mobile
    margin: '50px 0',
    width: '100%',
    boxSizing: 'border-box',
    height: 'auto',
    backgroundColor: '#F4F6FA',
    boxShadow: theme.shadows[4],
  };

  const imageStyles = {
    width: isMobile ? '100%' : '33%',
    height: 'auto',
    boxSizing: 'border-box',
    margin: isMobile ? '0 0 20px 0' : '0', // Add margin below the image only on mobile
  };

  const textContainerStyles = {
    display: 'flex',
    flexDirection: 'column', // Ensure text elements are stacked vertically
    alignItems: 'center', // Center align the text elements
    width: '100%', // Adjust width for mobile
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    fontSize: '20px'
  };

  const titleStyles = {
    margin: '0 0 20px 0', // Add some space below the title
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  };

  const bodyTextStyles = {
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  };

  return (
    <div style={containerStyles}>
      <img src={imageUrl} alt={title} style={imageStyles} />
      <div style={textContainerStyles}>
        <h2 style={titleStyles}>{title}</h2>
        <p style={bodyTextStyles}>{body}</p>
      </div>
    </div>
  );
};

export default Section;
