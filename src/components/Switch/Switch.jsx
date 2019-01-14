import React, { Component } from 'react'
import styles from './Switch.module.css';

export default class Switch extends Component {
  render() {
    const {on, className = '', ...props} = this.props
    const btnClassName = [
      className,
      styles['toggle-btn'],
      on ? styles['toggle-btn-on'] : styles['toggle-btn-off'],
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <div>
        <input
          className={ styles['toggle-input'] }
          type="checkbox"
          checked={ on }
          onChange={() => {
            // changing is handled by clicking the button
          }}
        />
        <button
          className={ btnClassName }
          aria-label="Toggle"
          {...props}
        />
      </div>
    )
  }
}
