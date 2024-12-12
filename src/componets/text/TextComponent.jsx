import './textComponent.css';

export const TextComponent = ({
  as: Component = 'span', // Default to span
  size = '12',
  color = 'dark',
  textAlign = 'left',
  weight = 'regular',
  font = 'regular',
  customColor,
  underline,
  lineThrough,
  textDecorationLine,
  children,
  style,
  ...props
}) => {
  const classNames = [
    'text',
    `size-${size}`,
    `color-${color}`,
    `align-${textAlign}`,
    `weight-${weight}`,
    `font-${font}`,
    underline && 'underline',
    lineThrough && 'line-through',
  ].filter(Boolean).join(' ');

  const customStyles = {
    color: customColor,
    textDecorationLine: textDecorationLine,
    ...style,
  };

  return (
    <Component className={classNames} style={customStyles} {...props}>
      {children}
    </Component>
  );
};
