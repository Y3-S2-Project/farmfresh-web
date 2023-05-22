const Counter = ({ value, onChange }) => {
  return (
    <div className="flex flex-row h-10 w-auto rounded-lg relative bg-transparent mt-1">
      <button
        className="text-gray-600 hover:text-gray-700 hover:bg-gray-400/50 h-full w-20 rounded-l cursor-pointer outline-none delay-150 duration-300"
        onClick={() => value > 1 && onChange(--value)}
      >
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
      <input
        type="number"
        className="outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
        name="custom-input-number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={1}
        max={10}
      />
      <button
        className="text-gray-600 hover:text-gray-700 hover:bg-gray-400/50 h-full w-20 rounded-r cursor-pointer delay-150 duration-300"
        onClick={() => onChange(++value)}
      >
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  )
}

export default Counter
