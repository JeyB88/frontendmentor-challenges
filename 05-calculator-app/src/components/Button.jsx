export default function Button({color = "#454952", backgroundColor = "#eae3db", children}) {
    return (
        <button className={`py-2 rounded bg-[${backgroundColor}] text-[${color}] text-2xl font-semibold`}>
            {children}
        </button>
    );
}