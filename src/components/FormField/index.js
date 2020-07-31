import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
        :
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaulProps = {
  type: 'text',
};

FormField.propType = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.string,
};

export default FormField;
