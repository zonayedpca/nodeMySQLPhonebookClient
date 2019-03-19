import React from 'react';

export default () => (
  <section class="page register">
    <div class="register-area">
      <div class="title">
        <a class="home-link" href="/">Home</a>
        <h2>Register</h2>
      </div>
      <form class="form form-register" action="/register" method="POST">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button class="btn btn-submit" type="submit">Register</button>
        <a class="btn btn-alternate" href="/login">Login</a>
      </form>
    </div>
  </section>
)
