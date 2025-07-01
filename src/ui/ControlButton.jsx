const ControlButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="fixed cursor-pointer bottom-8 px-6 py-[18px] bg-[#0070FF] text-white rounded-md flex items-center"
    >
        <span className="text-sm tracking-wide" style={{ fontFamily: 'Gilroy, sans-serif' }}>Play animation</span>
    </button>
);

export default ControlButton; 