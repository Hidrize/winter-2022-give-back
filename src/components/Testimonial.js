import testimonialData from "../Data/testimonialdata";

function Testimonial() {
        return (
                <div>
                        {testimonialData.map(testimonialbox)}

                </div>
        )
}
export default Testimonial;

function testimonialbox(testimonialdata){

        return (
                <h1>testimonialdata.title</h1>
        )
}
