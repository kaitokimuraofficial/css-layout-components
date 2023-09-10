import "./TreeDiagram.css";

const TreeDiagram = () => {
    return (
        <>
            <div class="tree-diagram">
                <ul>
                    <li>
                        SUBITEM1
                        <ul>
                            <li>
                                SUBITEM1-1
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                </ul>
                            </li>
                            <li>
                                SUBITEM1-2
                                <ul>
                                    <li>3</li>
                                    <li>4</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        SUBITEM2
                        <ul>
                            <li>
                                SUBITEM2-1
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                </ul>
                            </li>
                            <li>
                                SUBITEM2-2
                                <ul>
                                    <li>3</li>
                                    <li>4</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <p>Following content</p>
        </>
    );
};

export default TreeDiagram;