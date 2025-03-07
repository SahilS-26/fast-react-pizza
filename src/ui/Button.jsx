import { Link } from 'react-router-dom';

function Button({ children, disbaled, to }) {
  const className =
    'inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 outline-none transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';

  if (to)
    return (
      <Link to={to} className={className}>
        Order pizzas
      </Link>
    );

  return (
    <button className={className} disabled={disbaled}>
      {children}
    </button>
  );
}

export default Button;
