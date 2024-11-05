import React, { ChangeEventHandler } from 'react';
import clsx from 'clsx';

export interface TextFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: React.ReactNode;
  placeholder: string;
  multiline?: number;
}

const TextField = ({
  label,
  name,
  onChange,
  placeholder,
  required = false,
  type = 'text',
  multiline,
  value,
  ...otherProps
}: TextFieldProps) => {
  return (
    <div>
      <label className="mb-2.5 block text-base font-medium text-white">
        {label}
      </label>
      <div className="relative">
        {!multiline && (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete="off"
            className={clsx(
              'w-full h-9 text-white tracking-loose text-[15px] leading-4 bg-transparent rounded-lg ring-1 ring-inset ring-[#797c8180] pt-[3px] pb-[5px] pl-3 pr-10 outline-none transition ease-out duration-75 focus:ring-[#0000] focus:shadow-[0_0_0_1px_rgb(18,100,163),_0_0_0_5px_color-mix(in_srgb,_#1d9bd1_30%,_transparent)] focus:ring placeholder:font-normal placeholder:text-icon-gray disabled:cursor-default disabled:bg-gray-2'
            )}
            required={required}
            {...otherProps}
          />
        )}
        {multiline && (
          <textarea
            name={name}
            value={value}
            onChange={
              onChange as unknown as ChangeEventHandler<HTMLTextAreaElement>
            }
            placeholder={placeholder}
            autoComplete="off"
            className={clsx(
              'w-full text-white tracking-loose text-[15px] leading-[1.46668] bg-transparent rounded-lg ring-1 ring-inset ring-[#797c8180] px-3 py-2 outline-none transition ease-out duration-75 focus:ring-[#0000] focus:shadow-[0_0_0_1px_rgb(18,100,163),_0_0_0_5px_color-mix(in_srgb,_#1d9bd1_30%,_transparent)] focus:ring placeholder:font-normal placeholder:text-icon-gray disabled:cursor-default disabled:bg-gray-2'
            )}
            required={required}
            rows={multiline}
            {...(otherProps as React.DetailedHTMLProps<
              React.InputHTMLAttributes<HTMLTextAreaElement>,
              HTMLTextAreaElement
            >)}
          />
        )}
      </div>
    </div>
  );
};

export default TextField;
