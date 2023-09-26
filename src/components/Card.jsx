export const CardCustom = ({
  img,
  heading,
  para,
  link,
  linkpresentation,
  icon,
}) => {
  return (
    <div className="CardCustom">
      <img
        src={img}
        alt="card presentation"
        className="w-full rounded-tl-xl rounded-tr-xl"
      />
      <div className="presentation rounded-bl-xl rounded-br-xl px-6 py-6">
        <h1 className="flex items-center mb-3">
          <img src={icon} alt="icon" className="mr-2" />
          {heading}
        </h1>
        <p className="mb-4">{para}</p>
        <a
          href={link}
          className="w-full flex items-center justify-center h-11 rounded-lg"
        >
          {linkpresentation}
        </a>
      </div>
    </div>
  );
};
