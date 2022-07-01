import React from 'react'


function Container(Props)
{
    return(
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 cen">
                        <div className="child1 ">
                            <img src={Props.image} className="img-fluid" alt="img" srcset=""/>
                            <div className="effect">
                                <div>
                                    <h3>{Props.Head}</h3>       
                                    <a href={Props.git} target="_blank">Git</a> <a href={Props.Live} target="_blank">Live</a>
                                </div>
                              
                            </div>
                        </div>
                    </div>
        </>
    );
}
export default Container;