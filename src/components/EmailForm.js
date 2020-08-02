import React, { useState } from 'react';

const EmailForm = () => {
  const [message, setMessage] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    setMessage('Thank you!');
    setTimeout(() => {
      setMessage('');
      const emailField = document.getElementById('email')
      if (emailField) emailField.value = '';
    }, 3000);
  }

  return (
    <form id="signup-form" name="signup-form" onSubmit={onSubmit} method="post" action="#" data-netlify="true">
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
  )
}

export default EmailForm;
