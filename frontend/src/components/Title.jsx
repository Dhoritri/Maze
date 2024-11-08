const Title = ({ text1, text2 }) => {
  return (
    <div>
      <div className="inline-flex gap-2 items-center mb-3">
        <p className="text-gray-200 prata-regular">
          {text1} <span className="text-gray-400 font-medium">{text2}</span>{" "}
        </p>
        <p className="w-8 sm:w-12 h-[1px] sm:h[2px] bg-gray-500 "></p>
      </div>
    </div>
  );
};

export default Title;
