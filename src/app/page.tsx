'use client';
import useThemeState from '../stores/theme-store';

export default function Home() {
  const { mode, changeMode } = useThemeState((state) => state);
  return (
    <main>
      <button onClick={changeMode}>Toggle Theme</button>
      <div>{mode}</div>
      <button type='button' className='btn btn-primary'>
        Primary
      </button>
      <button type='button' className='btn btn-secondary'>
        Secondary
      </button>
      <button type='button' className='btn btn-success'>
        Success
      </button>
      <button type='button' className='btn btn-danger'>
        Danger
      </button>
      <button type='button' className='btn btn-warning'>
        Warning
      </button>
      <button type='button' className='btn btn-info'>
        Info
      </button>
      <button type='button' className='btn btn-light'>
        Light
      </button>
      <button type='button' className='btn btn-dark'>
        Dark
      </button>

      <button type='button' className='btn btn-link'>
        Link
      </button>
    </main>
  );
}
