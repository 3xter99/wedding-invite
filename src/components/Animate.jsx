import { useScrollReveal } from '../hooks/useScrollReveal';

export function Animate({
  children,
  className = '',
  delay = 0,
  variant = 'fade-up',
  as: Tag = 'div',
}) {
  const { ref, visible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={[
        'animate',
        `animate--${variant}`,
        visible ? 'animate--visible' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ '--delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function AnimateGroup({ children, className = '', visibleClass = 'animate-group--visible' }) {
  const { ref, visible } = useScrollReveal(0.08);

  return (
    <div
      ref={ref}
      className={`animate-group ${visible ? visibleClass : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
