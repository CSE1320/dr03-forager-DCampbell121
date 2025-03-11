import HeaderBar from '@/components/Header';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary

export default function DashboardPage() {
  return (
    <div className="default">
      <HeaderBar />
      <h1>Dashboard Page</h1>
      <h2>Death Cap</h2>
      <NavBar />
      <p><i>Amanita phalloides</i></p>
      <div className="fast-facts">
        <p>Cap Diameter: 5-15cm</p>
        <p>Gills: White</p>
        <p>Stem Color: White</p>
        <p>Habitat: Temperate regions</p>
      </div>
    </div>
  );
}
