
const Tags = ({ tagArray }: any) => {
   const newArray: any=  tagArray.length > 6 ? tagArray.slice(0,5) : tagArray

   return (
    <div className="uppercase roboto text-xs tracking-wider text-tagText gap-2 flex flex-wrap">
      {newArray.map((tag: any, index: number) => (
        <p className="bg-tagBackground p-1" key={index}>{tag.value}</p>
      ))}
    </div>
  );
};

export default Tags;
