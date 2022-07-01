import React from 'react'
import Part1 from './Part1';
import Part2 from './Part2';

function CoverPage()
{
    return(
        <>
            <section id="home">
            <div className="container-fluid">
                <div className="row p-5 d-flex align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-6 ">                       
                    <Part1/>                                              
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8 align-items-center justify-content-center ">                         
                    <Part2/>  
                    </div>
                </div>
            </div>            
            </section>

        </>
    );
}
export default CoverPage;