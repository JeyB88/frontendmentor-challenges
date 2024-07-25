import ThemeSwitcher from "./ThemeSwitcher";

export default function CalculatorOptions() {
    return (
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">calc</h1>
            <ThemeSwitcher />
        </div>
    );
}