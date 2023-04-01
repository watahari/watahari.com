import * as React from 'react'
import {
  wrapper
} from './sake.module.css'

const Sake = () => {
  return (
    <div className={wrapper}>
      <h2>
        Drinking history
      </h2>
      <a href="https://pixe.la/v1/users/watahari/graphs/sake.html">
        <img src="https://pixe.la/v1/users/watahari/graphs/sake" alt="drinking history graph" />
      </a>
    </div>
  )
}

export default Sake
