import { paneTemplates } from "../globalConstants";
import NavBarListItem from "../components/content/navbar/NavBarListItem";

const useButtonsPane = (template) => {
    const buttonsPane = [];

    for (let i = 0; i < template.length; ++i){
        if (template == paneTemplates.navigation){
            const { key , icon, caption, route } = template[i];
            buttonsPane.push(
            <NavBarListItem key={ key } navbar_item_props={{
                icon: icon,
                caption: caption,
                route: route
            }}/>);
        }
        else if (template == paneTemplates.profile_footer){
            const { key, caption } = template[i];
            buttonsPane.push(<button type="button" key={ key } className="p-2">{ caption }</button>);
        }
    }

    return buttonsPane;
}

export default useButtonsPane;