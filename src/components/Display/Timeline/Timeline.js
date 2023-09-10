import "./Timeline.css";

const Timeline = () => {
    return (
        <div class="timeline">
            <div class="timeline-line"></div>

            <div class="timeline-items">
                <div class="timeline-item">
                    <div class="timeline-top">
                        <div class="timeline-circle"></div>
                        <div class="timeline-title">This is the first topic</div>
                    </div>
                    <div class="timeline-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus pariatur, nesciunt atque quibusdam
                        sed vel aspernatur quo error fugit neque sapiente?
                        Perferendis deleniti neque, ullam quae
                        ratione rerum quidem voluptates.
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-top">
                        <div class="timeline-circle"></div>
                        <div class="timeline-title">Next topic is crazy</div>
                    </div>
                    <div class="timeline-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus pariatur, nesciunt atque quibusdam
                        sed vel aspernatur quo error fugit neque sapiente?
                        Perferendis deleniti neque, ullam quae
                        ratione rerum quidem voluptates.
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-top">
                        <div class="timeline-circle"></div>
                        <div class="timeline-title">Third topic is the last one</div>
                    </div>
                    <div class="timeline-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus pariatur, nesciunt atque quibusdam
                        sed vel aspernatur quo error fugit neque sapiente?
                        Perferendis deleniti neque, ullam quae
                        ratione rerum quidem voluptates.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;