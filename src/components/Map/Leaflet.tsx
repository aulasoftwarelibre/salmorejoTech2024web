import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface LeafletMapProps {
  containerId: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ containerId }) => {
  useEffect(() => {
    // Obtener el contenedor del mapa
    const mapContainer = document.getElementById(containerId);
    if (!mapContainer) {
      console.error(`Map container with ID ${containerId} not found`);
      return;
    }

    // Inicializar el mapa
    const map = L.map(containerId).setView([51.505, -0.09], 13);

    // Añadir azulejos de OpenStreetMap al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  }, [containerId]);

  // No necesitamos devolver nada aquí, ya que estamos manejando la inicialización del mapa en el useEffect

  return null;
};

export default LeafletMap;
