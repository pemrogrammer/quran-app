function MenusSection({ menus, onHandleClickMenu, selectedPage }) {
  return (
    <div className="w-full h-full flex flex-col space-y-10 justify-center mb-4">
      {menus.map((menu, index) =>
        index !== 0 ? (
          <div
            onClick={() => onHandleClickMenu(menu)}
            key={index}
            className={`h-10 flex justify-center items-center text-white text-xl font-semibold border-b-[1px] rounded-lg hover:cursor-pointer ${
              selectedPage.name === menu.name
                ? "border border-white rounded-lg"
                : "border-b-white hover:border hover:border-white hover:rounded-lg"
            }`}
          >
            {menu.name}
          </div>
        ) : (
          <div key={index}></div>
        )
      )}
    </div>
  );
}

export default MenusSection;
