import React, { Component } from 'react'
import styles from './Switch.module.css';
import classnames from 'classnames';

export default class Switch extends Component {
  render() {
    const {on, className = '', ...props} = this.props
    const btnClassName = classnames(className, styles['toggle-btn'], {
      [styles['toggle-btn-on']]: on,
      [styles['toggle-btn-off']]: !on,
    })

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
