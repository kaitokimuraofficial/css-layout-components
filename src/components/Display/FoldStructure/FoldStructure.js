import "./FoldStructure.css";

const FoldStructure = () => {
    return (
        <div class="folder-structure">
            <ul>
                <li>
                    FOLD STRUCTURE
                    <ul>
                        <li>
                            SUBITEM1-1
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </li>
                        <li>
                            SUBITEM1-2
                            <ul>
                                <li>4</li>
                                <li>5</li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            SUBITEM2-1
                            <ul>
                                <li>6</li>
                                <li>7</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default FoldStructure;