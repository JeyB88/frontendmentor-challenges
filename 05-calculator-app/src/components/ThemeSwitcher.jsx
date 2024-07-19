import { useTheme } from "../contexts/theme";
import Toggle from "./Toggle";

export default function ThemeSwitcher() {
    const { updateTheme } = useTheme();

    function handleToggleChange(value) {
        switch (value) {
            case 2:
                updateTheme("t2");
                break;
            case 3:
                updateTheme("t3");
                break;
            case 1:
            default:
                updateTheme("t1");
        }
    }

    return (
        <div className="theme-switcher flex items-end space-x-[1.5rem]">
            <span className="uppercase font-thin text-xs text-white" >Theme</span>
            <Toggle onChange={handleToggleChange} />
        </div>
    );
}