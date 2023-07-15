import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    return (
      <div>I am the Pure Component {this.props.name}</div>
    )
  }
}

export default PureComp