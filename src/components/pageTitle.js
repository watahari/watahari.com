import * as React from 'react'
import {
  container,
} from './pageTitle.module.css'

const PageTitle = ({ pageTitle }) => {
  return (
    <div className={container}>
      <h1>{pageTitle}</h1>
      <p>Hope revived</p>
    </div>
  )
}

export default PageTitle
