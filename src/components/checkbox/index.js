export default function Checkbox({ checked, label, onChange }) {
    return (
        <div className="flex items-center">
            <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                checked={checked}
                onChange={(event) => onChange(event.target.checked)}
            />
            {label && (
                <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm text-gray-900"
                >
                    {label}
                </label>
            )}
        </div>
    );
}
