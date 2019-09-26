import React from 'react'
import DataDrop from './dataDrop'

export default function AttendeeList ({
  mode,
  attributes
}) {
  return mode === 'Edit' ? (
    <table 
      className='att-section-table' 
      width='100%' 
      cellspacing='0' 
      cellpadding="0" 
      style={{
        borderTop: '1px solid #ECEBEA', 
        borderBottom: '1px solid #ECEBEA',
        padding: '0 0 8px'
      }}
    >
      <tr>
        <td 
          className='att-section-col'
          width='50%' 
          style={{
            padding: '24px 20px 0 0'
          }}
        >
          <table 
            className='att-table' 
            width='100%' 
            cellspacing='0'
            cellpadding='0'
          >
            <thead>
              <tr>
                <th 
                  width='100%' 
                  style={{
                    textAlign: 'left',
                    color: '#706E6B',
                    fontSize: '12px', 
                    lineHeight: '17px', 
                    fontWeight: 'normal', 
                    padding: '0 0 16px',
                    letterSpacing: '1px'
                  }}
                >{attributes.heading}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td 
                  width='100%'
                >
                  <table 
                    width='100%' 
                    cellspacing='0'
                    cellpadding='0'
                  >
                    <tr>
                      <td 
                        width='100%' 
                        style={{
                          fontSize: '12px',
                          fontWeight: '600', 
                          color: '#2B2826',
                          lineHeight: '13px'
                        }}
                      >
                        {attributes.attendee_line_1.map(value => <DataDrop key={value} value={value} />)}
                      </td>
                    </tr>
                    <tr>
                      <td 
                        width="100%" 
                        style={{
                          fontSize: '11px', 
                          color: '#706E6B', 
                          lineHeight: '13px'
                        }}
                      >
                          <a 
                            href="mailto:bessie.mc@acmecorp.com" 
                            target="_blank" 
                            style={{
                              color: '#706E6B',
                              textDecoration: 'none'
                            }}
                          >
                            {attributes.attendee_line_2.map(value => <DataDrop key={value} value={value} />)}
                          </a>
                      </td>
                    </tr>
                    <tr>
                      <td 
                        width="100%" 
                        style={{
                          fontSize: '11px', 
                          color: '#706E6B', 
                          lineHeight: '13px', 
                          padding: '0 0 16px',
                        }}
                      >
                        {attributes.attendee_line_3.map(value => <DataDrop key={value} value={value} />)}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </table> 
  ) : (
    <table 
    className='att-section-table' 
    width='100%' 
    cellspacing='0' 
    cellpadding="0" 
    style={{
      borderTop: '1px solid #ECEBEA', 
      borderBottom: '1px solid #ECEBEA',
      padding: '0 0 8px'
    }}
  >
    <tr>
      <td 
        className='att-section-col'
        width='50%' 
        style={{
          padding: '24px 20px 0 0'
        }}
      >
        <table 
          className='att-table' 
          width='100%' 
          cellspacing='0'
          cellpadding='0'
        >
          <thead>
            <tr>
              <th 
                width='100%' 
                style={{
                  textAlign: 'left',
                  color: '#706E6B',
                  fontSize: '12px', 
                  lineHeight: '17px', 
                  fontWeight: 'normal', 
                  padding: '0 0 16px',
                  letterSpacing: '1px'
                }}
              >{attributes.heading}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td 
                width='100%'
              >
                {'{{#each internal_attendees}}'}
                  <table 
                    width='100%' 
                    cellspacing='0'
                    cellpadding='0'
                  >
                    <tr>
                      <td 
                        width='100%' 
                        style={{
                          fontSize: '12px',
                          fontWeight: '600', 
                          color: '#2B2826',
                          lineHeight: '13px'
                        }}
                      >
                        {attributes.attendee_line_1.reduce((acc, value) => {
                          return `${acc} {{${value}}}`
                        }, '')}
                      </td>
                    </tr>
                    <tr>
                      <td 
                        width="100%" 
                        style={{
                          fontSize: '11px', 
                          color: '#706E6B', 
                          lineHeight: '13px'
                        }}
                      >
                          <a 
                            href="mailto:bessie.mc@acmecorp.com" 
                            target="_blank" 
                            style={{
                              color: '#706E6B',
                              textDecoration: 'none'
                            }}
                          >
                            {attributes.attendee_line_2.reduce((acc, value) => {
                              return `${acc} {{${value}}}`
                            }, '')}
                          </a>
                      </td>
                    </tr>
                    <tr>
                      <td 
                        width="100%" 
                        style={{
                          fontSize: '11px', 
                          color: '#706E6B', 
                          lineHeight: '13px', 
                          padding: '0 0 16px',
                        }}
                      >
                        {attributes.attendee_line_3.reduce((acc, value) => {
                              return `${acc} {{${value}}}`
                        }, '')}
                      </td>
                    </tr>
                  </table>
                {'{{/each}}'}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table> 
  )
}