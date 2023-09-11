import "./Accordion.css";

const Accordion = () => {
    return (
        <>
            <div class="wrapper">
                <details>
                    <summary class="summary">
                        <svg class="icon" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497 8.497-3.807 8.497-8.497-3.807-8.498-8.497-8.498zm4.845 6.711c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291zm-7.564.289h5.446l-2.718 3.522z" fill-rule="nonzero" /></svg>
                        <span class="summary-inner">This is the first topic</span>
                    </summary>
                    <div class="content">
                        Cascading Style Sheets (CSS) is a style sheet
                        language used for describing the presentation
                        of a document written in a markup language like HTML.
                        CSS is a cornerstone technology of the World Wide Web,
                        alongside HTML and JavaScript.
                    </div>
                    <div class="content">
                        Cascading Style Sheets (CSS) is a style sheet
                        language used for describing the presentation
                        of a document written in a markup language like HTML.
                        CSS is a cornerstone technology of the World Wide Web,
                        alongside HTML and JavaScript.
                    </div>
                </details>

                <details>
                    <summary class="summary">
                        <svg class="icon" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497 8.497-3.807 8.497-8.497-3.807-8.498-8.497-8.498zm4.845 6.711c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291zm-7.564.289h5.446l-2.718 3.522z" fill-rule="nonzero" /></svg>
                        <span class="summary-inner">This is the first topic</span>
                    </summary>
                    <div class="content">
                        Cascading Style Sheets (CSS) is a style sheet
                        language used for describing the presentation
                        of a document written in a markup language like HTML.
                        CSS is a cornerstone technology of the World Wide Web,
                        alongside HTML and JavaScript.
                    </div>
                </details>
                <details>
                    <summary class="summary">
                        <svg class="icon" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497 8.497-3.807 8.497-8.497-3.807-8.498-8.497-8.498zm4.845 6.711c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291zm-7.564.289h5.446l-2.718 3.522z" fill-rule="nonzero" /></svg>
                        <span class="summary-inner">This is the first topic</span>
                    </summary>
                    <div class="content">
                        Cascading Style Sheets (CSS) is a style sheet
                        language used for describing the presentation
                        of a document written in a markup language like HTML.
                        CSS is a cornerstone technology of the World Wide Web,
                        alongside HTML and JavaScript.
                    </div>
                </details>
            </div>
        </>
    );
};

export default Accordion;