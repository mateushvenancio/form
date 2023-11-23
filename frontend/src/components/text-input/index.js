export default function TextInput({
    id,
    label,
    placeholder,
    required,
    obscure,
    value,
    onChange,
}) {
    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={id}
                    className="block mb-0.5 text-sm font-medium text-gray-900"
                >
                    {label + (required ? ' *' : '')}
                </label>
            )}
            <input
                type={obscure ? 'password' : 'text'}
                id={id}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}
