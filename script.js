class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  // Add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.submitMessage}>Send</button>
        <ul>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        {/* Change code above this line */}
      </div>
    );
  }
}
