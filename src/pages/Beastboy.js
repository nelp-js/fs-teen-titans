import beastboyImg from "../assets/images/beastboy2.jpg";

function beastboy() {
    return (
      <div className="container mt-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold" style={{ color: "#2a9d8f" }}>
          Beastboy Best boi
          </h1>
          <p className="fst-italic text-muted">
          “Yo, dudes! Check me out!”
          </p>
        </div>
  
        
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-4">
            <img
              src={beastboyImg}
              alt="beastboy"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7">
            <h3 style={{ color: "#6ec8e0" }}>About</h3>
            <p className="lead">
            Beast Boy, also known as Garfield Logan, is the lighthearted shapeshifter of the Teen Titans.
            As a child, he contracted a rare illness and was saved with an experimental serum derived from a green monkey, which turned his skin and hair permanently green and gave him the power to transform into any animal. 
            Outgoing, funny, and sometimes immature, Beast Boy often acts as the comic relief of the team, but he’s also deeply loyal and courageous when his friends are in danger. 
            His powers allow him to shift into creatures of all sizes, from tiny insects to massive dinosaurs, making him one of the most versatile fighters on the team. 
            </p>
            <p>
            Beneath his humor, Garfield has faced struggles with loneliness, loss, and identity, yet he continues to fight alongside the Titans with optimism and heart.
            </p>
          </div>
        </div>
  
        
        <div className="row mt-5">
          <div className="col-md-6">
            <h3 style={{ color: "#62479e" }}>Powers</h3>
            <ul className="list-group">
              <li className="list-group-item">Animal Shapeshifting</li>
              <li className="list-group-item">Enhanced Senses</li>
              <li className="list-group-item">Size Variation</li>
              <li className="list-group-item">Adaptation</li>
              <li className="list-group-item">Accelerated Healing</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3 style={{ color: "#42cb45" }}>Skills</h3>
            <ul className="list-group">
              <li className="list-group-item">Team Morale Booster</li>
              <li className="list-group-item">Hand-to-Hand Combat</li>
              <li className="list-group-item">Quick Thinking</li>
              <li className="list-group-item">Tech Knowledge</li>
              <li className="list-group-item">Acting and Disguise</li>
            </ul>
          </div>
        </div>
  
        
        <div className="mt-5 p-4 rounded shadow mb-4" style={{ backgroundColor: "#373434ff", color: "white" }}>
          <h4 style={{ color: "#ef1717" }}>Fun Fact</h4>
          <p>
          He went by Changeling during his early Teen Titans years. It wasn’t until later that the name Beast Boy stuck and became his most recognized identity. 
          Despite his lighthearted personality, his green skin is actually the result of a tragic event he contracted a rare illness as a child, and the experimental serum that saved his life gave him his powers but permanently changed his appearance. 
          Over the years, his sense of humor has often been a way of coping with these struggles, making him one of the most layered members of the Titans.
          </p>
        </div>
      </div>
    );
  }
  
  export default beastboy;
  