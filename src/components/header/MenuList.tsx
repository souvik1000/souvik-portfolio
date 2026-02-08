import Stack from "../../utils/Stack";
import MenuOption, { MenuOptionType } from "./MenuOption";

const menuList: MenuOptionType[] = [
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
    type: "Contact",
    displayString: "CONTACT",
  },
];

const MenuList = ({ isMobile }: { isMobile?: boolean }) => {

  return (
    <Stack margin={16} direction={isMobile ? "column" : "row"}>
      <MenuOption menuOptions={menuList} isMobile={isMobile} />
    </Stack>
  );
};

export default MenuList;
