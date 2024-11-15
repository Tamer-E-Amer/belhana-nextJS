const MessageActionsButton = ({isDefault, title, icon, onClick }) => {
  return (
    <div
      className={`border border-gray-line w-full md:w-auto px-4 py-2 flex items-center justify-center gap-2 text-dark-gray rounded-full hover:cursor-pointer hover:border-gray-500 hover:border-2 transition duration300 ${isDefault?"bg-gray-200":""}`}
      onClick={onClick}
    >
      {icon}
      <span className="text-sm lg:text-lg">{title}</span>
    </div>
  );
};

export default MessageActionsButton;
