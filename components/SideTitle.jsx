const SideTitle = ({ name }) => {
  return (
    <div className="absolute top-24 flex lg:hidden flex-row justify-center items-center gap-2">
      <div className="w-12 h-px bg-black"></div>
      <p className="font-primary uppercase tracking-widest text-md text-clack">{name}.</p>
    </div>
  );
};

export default SideTitle;
