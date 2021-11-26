import { TextField } from '@mui/material';

export default function Input(props) {
  const {
    variant,
    name,
    label,
    required,
    value,
    type,
    onChange,
    error,
    onKeyPress = null
  } = props;
  return (
    <TextField
      variant={variant}
      required={required}
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      color="primary"
      {...(error && { error: true, helperText: error })}
    />
  );
}
