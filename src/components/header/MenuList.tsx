import Stack from "../../utils/Stack";
import MenuOption, { MenuOptionType } from "./MenuOption";

const menuList: MenuOptionType[] = [
  {
    type: "About",
    displayString: "ME",
  },
  {
    type: "Work",
    displayString: "EXPERIENCE",
  },
  {
    type: "Project",
    displayString: "PROJECTS",
  },
  {
    type: "Skill",
    displayString: "SKILLS",
  },
  {
    type: "Feedback",
    displayString: "FEEDBACK",
  },
];

const MenuList = () => {

  return (
    <Stack margin={16} direction="row">
      <MenuOption menuOptions={menuList} />
    </Stack>
  );
};

export default MenuList;
