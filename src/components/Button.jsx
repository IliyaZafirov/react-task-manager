export default function Button({ onClick, buttonType, children }) {
    return (
        <button
            onClick={onClick}
            type="submit"
            className={`btn ${buttonType == 'secondary' ? 'btn--secondary' : ''}`}
        >
            {children}
        </button >);
}
