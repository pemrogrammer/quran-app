import LogoSection from "./LogoSection";
import MenusSection from "./MenuSection";
// import QuickSearchSection from "./QuickSearchSection";

function LeftSection({ menus, onHandleClickMenu, selectedPage }) {
  return (
    <div className="bg-teal-700 h-full basis-1/5 flex flex-col pt-4 px-4 items-center">
      {/* Logo Section */}
      <LogoSection onHandleClickMenu={onHandleClickMenu} menu={menus[0]} />

      {/* Menu Section */}
      <MenusSection
        menus={menus}
        onHandleClickMenu={onHandleClickMenu}
        selectedPage={selectedPage}
      />

      {/* Quick Search Section*/}
      {/* <QuickSearchSection /> */}
    </div>
  );
}

export default LeftSection;
