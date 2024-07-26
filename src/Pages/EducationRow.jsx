import React from 'react'

const EducationRow = (props) => {
  return (
    <>
        <div>
            <h3>{ props.school }</h3><p className="info">{ props.degree } - { props.graduated }</p >
        </div>
    </>
  )
}

export default EducationRow