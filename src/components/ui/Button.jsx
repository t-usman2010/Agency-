import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 gap-2';

  const variants = {
    primary:
      'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/25 focus:ring-brand-500',
    secondary:
      'bg-dark-900 text-white hover:bg-dark-800 hover:shadow-lg focus:ring-dark-500',
    outline:
      'border-2 border-dark-200 text-dark-900 hover:border-brand-600 hover:text-brand-600 hover:bg-brand-50 focus:ring-brand-500',
    ghost:
      'text-dark-700 hover:text-brand-600 hover:bg-brand-50 focus:ring-brand-500',
    white:
      'bg-white text-dark-900 hover:bg-dark-50 hover:shadow-lg focus:ring-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
        {icon && <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
}
