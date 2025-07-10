export const SecondsCounter = ({ counter }) => {
    return (
        <div className="col bg-dark m-2 px-2 border border-secondary border-2 border-opacity-25 rounded d-flex align-items-center justify-content-center" style={{height: "150px"}}>
            <p className="text-white fw-bold" style={{fontSize: "70px"}}>{counter}</p>
        </div>
    );
};