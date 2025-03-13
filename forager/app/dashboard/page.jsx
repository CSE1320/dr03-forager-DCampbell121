import HeaderBar from '@/components/Header';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import Global from '../../styles/globals.css';

export default function DashboardPage() {
  const mushroom = [
    { imgURL: "images/DeathCap.png", name: "Death Cap", type: 'Toxic', color: "white", desc: "A solid white poisonous mushroom with a round cap stand in the dirt" },
    { imgURL: "images/DestroyingAngel.png", name: "Destroying Angel", type: 'Toxic', color: "white", desc: "A solid white poisonous mushroom with a round cap" },
    { imgURL: "images/FalseDeathCap.png", name: "False Death Cap", type: 'Toxic', color: "white", desc: "A short mostly white poisonous mushroom with a puffy spherical cap"  },
    { imgURL: "images/PaddyStraw.png", name: "Paddy Straw", type: 'Edible', color: "white", desc: "Two mushrooms side by side. One is small and one is large. They are mostly white with an umbrella like cap"  },
    { imgURL: "images/Puffball.png", name: "Puffball", type: 'Edible', color: "white", desc: "Three mushrooms growing together. They are solid and covered in small pointy spikes"  },
  ];
  
  return (
    <div className="default">
      <HeaderBar />
      <h1>Search Bar would go here</h1>
      <h1>My Collection</h1>
      <NavBar />
      <div className="mushroomContainer">
        {mushroom.map((box, index) => (
          <a key={index} href={box.link} className="mushroomBoxes">
            <img src={box.imgURL} alt={box.desc} />
            <p>{box.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
