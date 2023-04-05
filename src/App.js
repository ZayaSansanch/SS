import React from 'react';
import './App.css';

const Body = () => {
  const empiresStyles = {
    position: 'absolute',
    top: '60px',
    left: '125px',
    width: 'calc(100% - 150px)',
    height: '50px',
    display: 'flex',
    backgroundColor: '#f9cdad',
    borderRadius: '10px'
  };

  const lineStyle = {
    position: 'relative',
    top: '5px',
    left: '1px',
    zIndex: '1',
    height: '2px',
    width: '2450%',
    backgroundColor: '#aaa',
  }

  const lineSmallStyle = {
    position: 'relative',
    top: '5px',
    left: '1px',
    zIndex: '1',
    height: '2px',
    width: '100%',
    backgroundColor: '#aaa',
  }

  const timelineStyle = {
    position: 'relative',
    top: '80px',
    left: '-100px',
    width: '75px',
    height: '4500px',
    backgroundColor: '#f9cdad',
    borderRadius: '10px'
  }

  const empireStyle = {
    position: 'relative',
    margin: '5px 5px',
    zIndex: '0',
    left: '-75px',
    width: '150px',
    height: '100px',
    borderRadius: '10px'
  }

  const empireBodyStyle = {
    position: 'relative',
    top: '120px',
    margin: '0',
    width: '150px',
    height: '4500px',
    backgroundColor: '#c8c8a9',
    borderRadius: '10px'
  }

  const timeNameStyle = {
    position: 'relative',
    top: '5px',
    margin: '5px',
    fontWeight: '600',
    fontSize: '10px',
  }

  return (
    <div style={empiresStyles}>
      <div style={timelineStyle}>
        <div style={{position: 'relative', top: '0px'}}><div style={lineStyle}><h3 style={timeNameStyle}>2000 BC</h3></div></div>
        <div style={{position: 'relative', top: '250px'}}><div style={lineStyle}><h3 style={timeNameStyle}>1750 BC</h3></div></div>
        <div style={{position: 'relative', top: '500px'}}><div style={lineStyle}><h3 style={timeNameStyle}>1500 BC</h3></div></div>
        <div style={{position: 'relative', top: '750px'}}><div style={lineStyle}><h3 style={timeNameStyle}>1250 BC</h3></div></div>

        <div style={{position: 'relative', top: '1000px'}}><div style={lineStyle}><h3 style={timeNameStyle}>1000 BC</h3></div></div>
        <div style={{position: 'relative', top: '1250px'}}><div style={lineStyle}><h3 style={timeNameStyle}>0750 BC</h3></div></div>
        <div style={{position: 'relative', top: '1500px'}}><div style={lineStyle}><h3 style={timeNameStyle}>0500 BC</h3></div></div>
        <div style={{position: 'relative', top: '1750px'}}><div style={lineStyle}><h3 style={timeNameStyle}>0250 BC</h3></div></div>

        <div style={{position: 'relative', top: '2000px'}}><div style={lineStyle}><h3 style={timeNameStyle}>0000 AD</h3></div></div>
        <div style={{position: 'relative', top: '2250px'}}><div style={lineStyle}><h3 style={timeNameStyle}>0250 AD</h3></div></div>
        <div style={{position: 'relative', top: '2500px'}}><div style={lineStyle}><h3 style={timeNameStyle}>0500 AD</h3></div></div>
        <div style={{position: 'relative', top: '2750px'}}><div style={lineStyle}><h3 style={timeNameStyle}>0750 AD</h3></div></div>

        <div style={{position: 'relative', top: '3000px'}}><div style={lineStyle}><h3 style={timeNameStyle}>1000 AD</h3></div></div>
        <div style={{position: 'relative', top: '3250px'}}><div style={lineStyle}><h3 style={timeNameStyle}>1250 AD</h3></div></div>
        <div style={{position: 'relative', top: '3500px'}}><div style={lineStyle}><h3 style={timeNameStyle}>1500 AD</h3></div></div>
        <div style={{position: 'relative', top: '3750px'}}><div style={lineStyle}><h3 style={timeNameStyle}>1750 AD</h3></div></div>

        <div style={{position: 'relative', top: '4000px'}}><div style={lineStyle}><h3 style={timeNameStyle}>2000 AD</h3></div></div>
        <div style={{position: 'relative', top: '4023px'}}><div style={lineStyle}><h3 style={timeNameStyle}>2023 AD</h3></div></div>
      </div>

      <div style={empireStyle}>
        <h2 className='h2'>World</h2>
        <div style={empireBodyStyle}>
          <div style={{position: 'relative', top: '2000px'}}><h3 style={timeNameStyle}>0 - Jesus was born</h3><div style={lineSmallStyle}></div></div>
          <div style={{position: 'relative', top: '3939px'}}><h3 style={timeNameStyle}>1939 - World War II starts</h3><div style={lineSmallStyle}></div></div>
          <div style={{position: 'relative', top: '3945px'}}><div style={lineSmallStyle}><h3 style={timeNameStyle}>1945 - World War II ends</h3></div></div>
        </div>
      </div>

      <div style={empireStyle}>
        <h2 className='h2'>Egypt</h2>
        <div style={empireBodyStyle}>
          <h3 className='h3' style={{top: '20px'}}>2000 BC - Creating of an empire</h3>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <h1 className="h1">Social Science Crib</h1>
      <Body />
    </>
  )
}