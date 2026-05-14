const Backdrop = ({ clickHandler }) => {
  return (
    <div onClick={clickHandler} className="fixed inset-0 bg-[#222]/60 lg:hidden"></div>
  );
};

export default Backdrop;
