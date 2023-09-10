import "./Spinner.css";

const Spinner = () => {
    return (
        <>
            <div class="spinner"></div>
            <div class="separator">
                <div class="separator__content">
                    <div class="rectangle rectangle--hor rectangle--sm rectangle--100"></div>
                </div>
                <div class="separator__separator"></div>
            </div>
        </>
    );
};

export default Spinner;