import React, { Component } from 'react'
import Scanner from './scanner'
import Result from './result'

class BarcodeScanner extends Component {
  state = {
    scanning: false,
    result: '',
  }

  _scan = () => {
    this.setState({ scanning: !this.state.scanning })
  }

  _onDetected = result => {
    this.props.changeIsbnValue(result.codeResult.code)
    console.log(result)
    this._scan()
  }

  render() {
    return (
      <div>
        <button onClick={this._scan}>
          {this.state.scanning ? 'Stop' : 'Start'}
        </button>
        {/* <ul className="results">
          {this.state.results.map((result, i) => (
            <Result key={result.codeResult.code + i} result={result} />
          ))}
        </ul> */}
        
        {this.state.scanning ? <Scanner onDetected={this._onDetected} /> : null}
      </div>
    )
  }
}

export default BarcodeScanner
