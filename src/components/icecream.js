import PropTypes from 'prop-types'

const IceCream = (props) => {
    const handleRemove = () => {
        props.handleRemove(props.id);
    }
    return (
            <div className="icecream-container">
                <div className="icecream-item">
                    <div className="icecream-image">
                        <div className="cone"></div>
                        <div className="globe" style={{backgroundColor: props.globeColor}}></div>
                    </div>
                    <div className="description">
                        <div className="description-text">{props.descriptionText}</div>
                        <div className="price-text">{props.priceText}</div>
                        {props.handleRemove && <div className="delete" onClick={handleRemove}>Delete</div>}
                    </div>
                </div>
            </div>
    );
};

IceCream.propTypes = {
    globeColor: PropTypes.string,
    descriptionText: PropTypes.string,
}

IceCream.defaultProps = {
    globeColor: "#000000",
    descriptionText: "Denumire inexistenta",
    priceText: "Pret inexistent",
}

export default IceCream;