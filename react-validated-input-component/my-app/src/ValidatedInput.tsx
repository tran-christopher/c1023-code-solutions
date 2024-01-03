import { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { RxCross1 } from 'react-icons/rx';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
      }}>
      <label htmlFor="password">Password</label>
      <div>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          id="password"
        />
        <span
          style={{
            marginLeft: '15px',
          }}>
          {password.length >= 8 ? (
            <FcCheckmark />
          ) : (
            <RxCross1
              style={{
                color: 'red',
              }}
            />
          )}
        </span>
      </div>
      <p
        style={{
          color: 'red',
        }}>
        {password.length >= 8
          ? ''
          : password.length > 0
          ? 'Your password is too short'
          : 'A password is requried'}
      </p>
    </div>
  );
}
