export const Row = (props) => {
    const {left, right} = props
    return (
        <div className="row mb2">
            { left && <div className="col-md-6">{left}</div> }
            { right && <div className="col-md-6">{right}</div> }
        </div>
    )
}