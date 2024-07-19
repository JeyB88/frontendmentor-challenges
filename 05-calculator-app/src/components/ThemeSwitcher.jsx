import Toggle from "./Toggle";

export default function ThemeSwitcher() {
    return (
        <div className="theme-switcher flex items-end space-x-[1.5rem]">
            <span className="uppercase font-thin text-xs text-white" >Theme</span>
            <Toggle />
        </div>
    );
}