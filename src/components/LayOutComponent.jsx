import useSmallDevice from "../hooks/useSmallDevice";


const LayOutComponent = () => {
    const {onSmallDevice} = useSmallDevice();
    return (
        <div>
            <h3>On {onSmallDevice ? "Small": "Large"} device</h3>
        </div>
    );
};

export default LayOutComponent;