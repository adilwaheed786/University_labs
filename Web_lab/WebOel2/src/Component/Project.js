import React from 'react'
import { faProjectDiagram} from '@fortawesome/free-solid-svg-icons'
import Heading from './Heading';
import Container from './Container';
import { List } from './List';
function Project()
{
    return(
        <>  
                 <section id="projects">
            <div class="container-fluid">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-lg-12 col-md-12 col-sm-6">
                        <div class="resume box proj">
                        <Heading icon={faProjectDiagram} head="Cars"/>
                        </div>
                    </div>
                </div>
                <div class="row cen">                   
                <Container image={List[0].images} Head={List[0].name} git={List[0].git} Live={List[0].live}/>
                <Container image={List[1].images} Head={List[1].name} git={List[1].git} Live={List[1].live}/>
                <Container image={List[2].images} Head={List[2].name} git={List[2].git} Live={List[2].live}/>
                <Container image={List[3].images} Head={List[3].name} git={List[3].git} Live={List[3].live}/>
                <Container image={List[4].images} Head={List[4].name} git={List[4].git} Live={List[4].live}/>
                <Container image={List[5].images} Head={List[5].name} git={List[5].git} Live={List[5].live}/>
                <Container image={List[6].images} Head={List[6].name} git={List[6].git} Live={List[6].live}/>
                <Container image={List[7].images} Head={List[7].name} git={List[7].git} Live={List[7].live}/>       
                </div> 
            </div>         
    
        </section>
        </>
    );
}
export default Project;