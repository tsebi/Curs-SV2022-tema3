import PropTypes from "prop-types";

const ColorsAdd = (props) => {
    const handleRemove = () => {
        props.handleRemove(props.id);
    }

    return (
            <div className="item-color">
                <div className="color-box" style={{backgroundColor: props.squareColor}}></div>
                <div className="color-text">{props.squareText}</div>
                { props.handleRemove && 
                    <div onClick={handleRemove} className="remove-color">Delete</div>}
            </div>
    )
};

ColorsAdd.propTypes = {
    squareColor: PropTypes.string,
};

ColorsAdd.defaultProps = {
    squareColor: "red",
    squareText: "color as string"
}

export default ColorsAdd;