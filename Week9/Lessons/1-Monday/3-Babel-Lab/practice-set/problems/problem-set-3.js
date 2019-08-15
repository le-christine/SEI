class App extends React.Component {
  state = {
    name: 'World',
  }

  changeEvent = (e) => {
    this.setState({ name: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.changeEvent}
        />
        <h1>Hello {this.state.name}!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
