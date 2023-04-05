function LeftSection({ menus, onHandleClickMenu }) {
  return (
    <div className="bg-teal-700 h-full basis-1/5 flex flex-col pt-4 px-4 items-center">
      {/* Logo Section */}
      <LogoSection />

      {/* Menu Section */}
      <MenusSection menus={menus} onHandleClickMenu={onHandleClickMenu} />

      {/* Quick Search Section*/}
      <QuickSearchSection />
    </div>
  );
}

export default LeftSection;

function LogoSection() {
  return (
    <div className="mb-4 flex flex-col justify-center items-center">
      <div className="bg-white w-max p-2 rounded-2xl">
        <img src="logo.png" alt="logo.png" width={50} height={50} />
      </div>
      <h3 className="text-white font-bold text-2xl mt-2">Quran App</h3>
    </div>
  );
}

function MenusSection({ menus, onHandleClickMenu }) {
  return (
    <div className="w-full h-full flex flex-col space-y-10 justify-center mb-4">
      {menus.map((menu, index) =>
        index !== 0 ? (
          <div
            onClick={() => onHandleClickMenu(menu)}
            key={index}
            className="h-10 flex justify-center items-center text-white text-xl font-semibold border-b-[1px] rounded-lg border-b-white hover:border hover:border-white hover:rounded-lg"
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

function QuickSearchSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-4 space-y-2">
      <h5 className="text-white font-medium text-lg">
        Quick surah & ayat finder
      </h5>
      <input
        className="w-full h-10 rounded-lg p-2"
        type="text"
        placeholder="Find ayat..."
      />
    </div>
  );
}
