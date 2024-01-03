import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="Username"
          />
        </label>
        <label>
          Password
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="Password"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
