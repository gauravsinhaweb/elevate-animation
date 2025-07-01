const ControlButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="fixed cursor-pointer bottom-8 p-4 bg-black text-white rounded-lg flex items-center gap-3 shadow-lg border border-white "

    >
        <span className="text-base font-semibold">Replay Animation</span>
    </button>
);

export default ControlButton; 