import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ message: 'Thank you!' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  render() {
    const { message } = this.state;
    return (
      <form id="signup-form" name="signup-form" onSubmit={this.onSubmit} method="post" action="#" data-netlify="true">
        <input type="hidden" name="form-name" value="signup-form" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Tu Email"
        />
        <input type="submit" value="Cuéntame más" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;
