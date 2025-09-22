import ravenImg from "../assets/images/raven2.jpg";


function raven() {
    return (
      <div className="container mt-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold" style={{ color: "#6a4c93" }}>
            Mommy Raven
          </h1>
          <p className="fst-italic text-muted">
            “Azarath Metrion Zinthos.”
          </p>
        </div>
  
        
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-4">
            <img
              src={ravenImg}
              alt="raven"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7">
            <h3 style={{ color: "#6ec8e0" }}>About</h3>
            <p className="lead">
            Raven is a half-human, half-demon superhero best known as a member of the Teen Titans. 
            Born to the human Arella and the interdimensional demon Trigon, she was raised in the pacifist 
            realm of Azarath to keep her demonic side under control. Reserved, intelligent, and often sarcastic,
            Raven acts as the team’s mystic and strategist, balancing out the louder personalities of her teammates. 
            She wields powerful abilities including empathy, telekinesis, teleportation, and dark energy manipulation, 
            most of which she channels through her signature incantation, “Azarath Metrion Zinthos.” 
            </p>
            <p>
            To keep her powers in check and resist her father’s influence, she relies on meditation and strict emotional control.
            Despite her dark origins, Raven consistently chooses to fight for good, making her one of the most complex and compelling figures in the DC universe.
            </p>
          </div>
        </div>
  
        
        <div className="row mt-5">
          <div className="col-md-6">
            <h3 style={{ color: "#62479e" }}>Powers</h3>
            <ul className="list-group">
              <li className="list-group-item">Empathy</li>
              <li className="list-group-item">Soul-Self</li>
              <li className="list-group-item">Telekinesis</li>
              <li className="list-group-item">Dark Energy Manipulation</li>
              <li className="list-group-item">Precognition</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3 style={{ color: "#42cb45" }}>Skills</h3>
            <ul className="list-group">
              <li className="list-group-item">Meditation and Control</li>
              <li className="list-group-item">Multilingual Knowledge</li>
              <li className="list-group-item">Tactical Mind</li>
              <li className="list-group-item">Hand-to-Hand Combat</li>
              <li className="list-group-item">Occult Knowledge</li>
            </ul>
          </div>
        </div>
  
        
        <div className="mt-5 p-4 rounded shadow mb-4" style={{ backgroundColor: "#373434ff", color: "white" }}>
          <h4 style={{ color: "#ef1717" }}>Fun Fact</h4>
          <p>
          She was the one who originally brought the Teen Titans
            together in the to help stop Trigon.
          </p>
        </div>
      </div>
    );
  }
  
  export default raven;
  