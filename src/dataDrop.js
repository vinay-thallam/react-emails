import React from 'react'

export default function DataDrop ({value}) {
  return (
    <span
      style={{
        backgroundColor: '#DDDBDA', 
        borderRadius: '100px',
        textAlign: 'center',
        padding: '2px 5px 2px 5px',
        display: 'inline-block',
        minWidth: '90px'
      }}
    >
      {value}
    </span>
  )
}