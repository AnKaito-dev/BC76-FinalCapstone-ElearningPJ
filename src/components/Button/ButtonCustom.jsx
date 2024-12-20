export const ButtonGhost = ({ icon, content, type = "Button" }) => {
  return (
    <button
      type={type}
      className="py-2 px-5 mr-2 ml-2 text-yellow-500 hover:text-white border border-yellow-500 hover:bg-yellow-500 duration-200 rounded-lg"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {content}
    </button>
  );
};
export const ButtonHover = ({ icon, content, type = "Button" }) => {
  return (
    <button
      type={type}
      className="py-2 px-5 font-medium  hover:text-yellow-500 text-white   duration-200 rounded-lg"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {content}
    </button>
  );
};