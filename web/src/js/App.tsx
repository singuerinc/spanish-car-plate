import { isValid } from "spanish-car-plate";
import * as React from "react";
import { Check } from "./Check";

class App extends React.Component {
  state = {
    value: ""
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value: string = event.target.value;
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    const isValidVal = isValid(value);

    return (
      <form className="black-80 w-100 w-50-l center">
        <div>
          <input
            className="input-reset f2 f1-ns ba bw2 br3 b--silver-80 bg-white pa2 mb2 db w-100 black fw6 tc"
            maxLength="8"
            type="text"
            placeholder="1234 BCD"
            value={value}
            onChange={this.handleChange}
          />
        </div>
        <div className="flex flex-wrap justify-between mt4 mb2 pb4">
          <Check label="isValid" check={isValidVal} />
        </div>
      </form>
    );
  }
}

export { App };
