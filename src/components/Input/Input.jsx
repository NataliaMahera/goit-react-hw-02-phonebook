import css from './Input.module.css';

export const Input = ({
  name,
  value,
  type,
  pattern,
  className,
  handleChange,
}) => {
  return (
    <label className={css.label}>
      Name
      <input
        type={type}
        name={name}
        className={className}
        value={value}
        onChange={handleChange}
        pattern={pattern}
        required
      />
    </label>
  );
};
