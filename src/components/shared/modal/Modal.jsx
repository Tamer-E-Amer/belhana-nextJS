const Modal = ({ children }) => {
  return (
    <>
      <div className="w-screen h-screen bg-black/70 flex items-center justify-center absolute top-0 right-0 z-50 ">
        {/* mpdal  */}
        <div className="w-full h-full relative">
          <div className="h-12 w-12 rounded-full border border-red-600 text-3xl text-red-600 font-semibold absolute top-8 right-16 flex items-center justify-center cursor-pointer">
            X
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
