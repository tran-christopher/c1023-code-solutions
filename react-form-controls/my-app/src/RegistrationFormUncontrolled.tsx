import { FormEvent } from 'react';

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  console.log(
    `{ Username: ${formData.get('Username')}, Password: ${formData.get(
      'Password'
    )} }`
  );
}

export function RegistrationFormUncontrolled() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" name="Username" />
        </label>
        <label>
          Password
          <input type="password" name="Password" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
