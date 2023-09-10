import "./Accordion.css";

const Accordion = () => {
    return (
        <>
            <div class="accordion">
                <div class="accordion-item">
                    <div class="accordion-header">
                        <button>
                            <div class="accordion-toggle"></div>
                        </button>
                        <div class="accordion-title">This is the first topic</div>
                    </div>

                    <div class="accordion-content">
                        Cascading Style Sheets (CSS) is a style sheet
                        language used for describing the presentation
                        of a document written in a markup language like HTML.
                        CSS is a cornerstone technology of the World Wide Web,
                        alongside HTML and JavaScript.
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header">
                        <button>
                            <div class="accordion-toggle"></div>
                        </button>
                        <div class="accordion-title">This is the second topic</div>
                    </div>
                    <div class="accordion-content">
                        Cascading Style Sheets (CSS) is a style sheet
                        language used for describing the presentation
                        of a document written in a markup language like HTML.
                        CSS is a cornerstone technology of the World Wide Web,
                        alongside HTML and JavaScript.
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header">
                        <button>
                            <div class="accordion-toggle"></div>
                        </button>
                        <div class="accordion-title">This is the third topic</div>
                    </div>
                    <div class="accordion-content">
                        Cascading Style Sheets (CSS) is a style sheet
                        language used for describing the presentation
                        of a document written in a markup language like HTML.
                        CSS is a cornerstone technology of the World Wide Web,
                        alongside HTML and JavaScript.
                    </div>
                </div>

            </div>

            <details class="">
                <summary class=""> HELLO</summary>
                faiosdfnaosdfnaopdfmapfmapwefs
            </details>
        </>
    );
};

export default Accordion;