import React from 'react';
import special from '../../images/special.png';

const SpecialBanner = () => {
    return (
        <section className="special-area my-5 py-5" style={{marginBottom:"100px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={special} alt="" className="w-100"></img>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exponetional Dental Care, on your Term</h1>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.</p>
                        <button className="btn btn-primary rounded">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialBanner;