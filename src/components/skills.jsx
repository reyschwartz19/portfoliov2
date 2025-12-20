const Skills = ({title,items}) => {
return (
    <div className=" rounded-md ">
      <p className="text-[1.2rem] text-center mb-5">{title}</p>
      <div className="flex flex-wrap gap-4 justify-center mb-5">
        {items.map((item,index)=>(
            <span key={index} className="bg-gray-200 p-2 rounded-md text-black ">
                {item}
            </span>
        ))}
      </div>
    </div>
);

}

export default Skills;