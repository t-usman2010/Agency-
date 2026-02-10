export default function SectionHeader({ label, title, subtitle, align = 'left', className = '' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} mb-12 lg:mb-16 ${className}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title text-balance">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  );
}
