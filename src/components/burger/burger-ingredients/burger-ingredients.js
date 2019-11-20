import React, { Fragment } from 'react'
const classes = ['Salad', 'Cheese', 'Meat', 'Bacon']

export default () => {
  return (
    <Fragment>
      {classes.map((item, i) => <div key={i} className={item}></div>)}
    </Fragment>
  )
}
