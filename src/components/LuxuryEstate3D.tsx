import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  Compass,
  Maximize2,
  Sparkles,
  Sun,
  Moon,
  ChevronRight,
  ShieldCheck,
  Droplets,
  Thermometer,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  Volume2
} from 'lucide-react';

export interface HotspotInfo {
  id: string;
  number: string;
  name: string;
  category: string;
  pos: [number, number, number]; // 3D coordinates
  cameraPos: [number, number, number];
  cameraLookAt: [number, number, number];
  metric: string;
  metricLabel: string;
  status: string;
  description: string;
  actionText: string;
}

export const HOTSPOTS: HotspotInfo[] = [
  {
    id: 'greenhouse',
    number: '01',
    name: 'Living Biome Conservatory',
    category: 'CLIMATE & FOLIAR HEALTH',
    pos: [-1.2, 1.4, 1.5],
    cameraPos: [-3.5, 3.2, 5.0],
    cameraLookAt: [-1.2, 1.0, 1.5],
    metric: '99.4%',
    metricLabel: 'Pathogen Defense Shield',
    status: 'Automated Micro-Misting Active',
    description: 'Precision aeroponic sensors and multispectral leaf cameras continuously evaluate foliar health, applying micro-dosed bio-fungicide only where fungal spores appear.',
    actionText: 'Inspect Plant Diagnostics'
  },
  {
    id: 'canals',
    number: '02',
    name: 'Hydro-Canal & Sub-Irrigation',
    category: 'WATER STEWARDSHIP',
    pos: [-5.5, 0.4, -0.5],
    cameraPos: [-8.0, 4.0, 4.0],
    cameraLookAt: [-5.0, 0.2, -0.5],
    metric: '-38%',
    metricLabel: 'Freshwater Conserved',
    status: 'Evapotranspiration Balanced',
    description: 'Sub-surface gravity drip network synchronized with hyper-local 48-hour satellite rainfall forecasts to eliminate over-watering and root rot.',
    actionText: 'View Moisture Topology'
  },
  {
    id: 'solar_pod',
    number: '03',
    name: 'Solar Micro-Cold Storage Pod',
    category: 'POST-HARVEST THERMAL',
    pos: [3.2, 1.1, 0.8],
    cameraPos: [6.0, 3.5, 4.0],
    cameraLookAt: [3.2, 0.8, 0.8],
    metric: '4.0°C',
    metricLabel: 'Constant Thermal Zone',
    status: 'Zero Grid Dependence',
    description: 'Off-grid decentralized phase-change cooling pods preserve delicate produce immediately after harvest, expanding shelf life from 3 days to 24 days.',
    actionText: 'Manage Cold Vaults'
  },
  {
    id: 'logistics',
    number: '04',
    name: 'Autonomous EV Transit Dock',
    category: 'CHAIN OF CUSTODY',
    pos: [1.5, 0.5, 3.5],
    cameraPos: [4.0, 3.2, 7.5],
    cameraLookAt: [1.5, 0.3, 3.0],
    metric: '18 min',
    metricLabel: 'Farm-to-Hub Dispatch',
    status: '3 Electric Transits Active',
    description: 'Autonomous refrigerated shuttles consolidate village produce for direct line-haul delivery to verified institutional buyers with live GPS and thermal logging.',
    actionText: 'Track Active Fleet'
  },
  {
    id: 'market_terminal',
    number: '05',
    name: 'Fair Trade Terminal & Escrow',
    category: 'DIRECT REALIZATION',
    pos: [8.5, 1.8, 4.5],
    cameraPos: [11.5, 4.5, 8.5],
    cameraLookAt: [8.5, 1.2, 4.5],
    metric: '+114%',
    metricLabel: 'Net Farmer Realization',
    status: 'Zero Middleman Deductions',
    description: 'Smart contract escrow matching farmers directly with premium urban food companies and institutional kitchens with guaranteed bank payout on arrival.',
    actionText: 'View Escrow Orders'
  }
];

interface LuxuryEstate3DProps {
  onSelectHotspotAction?: (hotspotId: string) => void;
}

export const LuxuryEstate3D: React.FC<LuxuryEstate3DProps> = ({
  onSelectHotspotAction
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<HotspotInfo | null>(null);
  const [lightingMode, setLightingMode] = useState<'twilight' | 'golden' | 'day'>('twilight');
  const [viewPreset, setViewPreset] = useState<'panoramic' | 'hotspots' | 'aerial'>('panoramic');
  const [screenCoords, setScreenCoords] = useState<{ [id: string]: { x: number; y: number; visible: boolean } }>({});

  const cameraTargetPos = useRef(new THREE.Vector3(0, 14, 23));
  const cameraTargetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const orbitRotation = useRef({ x: 0.3, y: -0.4 });

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 750;

    // 1. SCENE & LIGHTING
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08090c);
    scene.fog = new THREE.FogExp2(0x08090c, 0.024);

    // 2. CAMERA
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 200);
    camera.position.set(0, 14, 23);
    camera.lookAt(0, 0, 0);

    // 3. RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. LIGHTS
    const ambientLight = new THREE.AmbientLight(0x181a24, 1.8);
    scene.add(ambientLight);

    const keySunLight = new THREE.DirectionalLight(0xffecd1, 2.8);
    keySunLight.position.set(18, 28, 14);
    keySunLight.castShadow = true;
    keySunLight.shadow.mapSize.width = 2048;
    keySunLight.shadow.mapSize.height = 2048;
    keySunLight.shadow.camera.near = 0.5;
    keySunLight.shadow.camera.far = 80;
    const d = 16;
    keySunLight.shadow.camera.left = -d;
    keySunLight.shadow.camera.right = d;
    keySunLight.shadow.camera.top = d;
    keySunLight.shadow.camera.bottom = -d;
    scene.add(keySunLight);

    // Architectural warm rim light
    const rimLight = new THREE.DirectionalLight(0xe6c887, 1.6);
    rimLight.position.set(-18, 10, -16);
    scene.add(rimLight);

    // Atmospheric accent lights
    const goldAccent = new THREE.PointLight(0xd4af37, 4, 35);
    goldAccent.position.set(8.5, 3.5, 4.5);
    scene.add(goldAccent);

    const emeraldAccent = new THREE.PointLight(0x10b981, 4, 30);
    emeraldAccent.position.set(-1.2, 3.0, 1.5);
    scene.add(emeraldAccent);

    // 5. MASTER ARCHITECTURAL ESTATE
    const estateGroup = new THREE.Group();
    scene.add(estateGroup);

    // Base Multi-Tier Architectural Podium (Obsidian & Bronze Rim)
    const baseGeo = new THREE.CylinderGeometry(15.5, 16.8, 2.0, 64);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0f1117,
      roughness: 0.7,
      metalness: 0.4
    });
    const basePodium = new THREE.Mesh(baseGeo, baseMat);
    basePodium.position.y = -1.0;
    basePodium.receiveShadow = true;
    estateGroup.add(basePodium);

    // Sleek champagne gold perimeter ring
    const goldRingGeo = new THREE.TorusGeometry(15.6, 0.06, 16, 80);
    const goldRingMat = new THREE.MeshStandardMaterial({
      color: 0xe6c887,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x5a481c,
      emissiveIntensity: 0.4
    });
    const goldRing = new THREE.Mesh(goldRingGeo, goldRingMat);
    goldRing.rotation.x = Math.PI / 2;
    goldRing.position.y = 0.02;
    estateGroup.add(goldRing);

    // Terraced precision agricultural plots
    const plotsConfig = [
      { x: -6, z: -4, w: 5.2, d: 4.5, c: 0x12241b, lines: 0x22c55e, crop: 'Wheat' },
      { x: -6, z: 3.8, w: 4.8, d: 4.2, c: 0x0e1f17, lines: 0x34d399, crop: 'Tomatoes' },
      { x: 1, z: -5.5, w: 5.8, d: 4.0, c: 0x15291e, lines: 0x10b981, crop: 'Basmati' },
      { x: 6.8, z: -2.8, w: 5.0, d: 4.4, c: 0x1a2b1a, lines: 0xeab308, crop: 'Mustard' },
      { x: 6.0, z: 4.8, w: 5.2, d: 4.8, c: 0x13231a, lines: 0x06b6d4, crop: 'Orchard' },
    ];

    plotsConfig.forEach((p) => {
      const plot = new THREE.Mesh(
        new THREE.BoxGeometry(p.w, 0.22, p.d),
        new THREE.MeshStandardMaterial({ color: p.c, roughness: 0.6, metalness: 0.2 })
      );
      plot.position.set(p.x, 0.11, p.z);
      plot.receiveShadow = true;
      estateGroup.add(plot);

      // Micro furrow crop ridges
      const rows = 7;
      for (let r = 0; r < rows; r++) {
        const offset = -p.w / 2 + (p.w / (rows + 1)) * (r + 1);
        const row = new THREE.Mesh(
          new THREE.BoxGeometry(0.18, 0.38, p.d * 0.92),
          new THREE.MeshStandardMaterial({ color: p.lines, roughness: 0.4 })
        );
        row.position.set(p.x + offset, 0.3, p.z);
        row.castShadow = true;
        estateGroup.add(row);
      }
    });

    // Glass Conservatory Dome (Living Biome)
    const conservatory = new THREE.Group();
    conservatory.position.set(-1.2, 0, 1.5);
    estateGroup.add(conservatory);

    const domeGeo = new THREE.SphereGeometry(1.9, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeMat = new THREE.MeshPhysicalMaterial({
      color: 0x22d3ee,
      transmission: 0.85,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      thickness: 0.5,
      specularIntensity: 1,
      specularColor: new THREE.Color(0xffffff)
    });
    const glassDome = new THREE.Mesh(domeGeo, domeMat);
    glassDome.position.y = 0.15;
    conservatory.add(glassDome);

    // Architectural brass ribs on dome
    for (let rib = 0; rib < 4; rib++) {
      const ribGeo = new THREE.TorusGeometry(1.9, 0.035, 12, 48, Math.PI);
      const ribMat = new THREE.MeshStandardMaterial({ color: 0xe6c887, metalness: 0.9, roughness: 0.2 });
      const ribMesh = new THREE.Mesh(ribGeo, ribMat);
      ribMesh.rotation.y = (rib * Math.PI) / 4;
      ribMesh.position.y = 0.15;
      conservatory.add(ribMesh);
    }

    // Reflective Waterway Canal
    const canalCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-11, 0.1, -1),
      new THREE.Vector3(-5, 0.1, 0.6),
      new THREE.Vector3(0, 0.1, -2.2),
      new THREE.Vector3(6.5, 0.1, -1),
      new THREE.Vector3(12, 0.1, 2.2),
    ]);
    const canalGeo = new THREE.TubeGeometry(canalCurve, 48, 0.55, 8, false);
    const canalMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.05,
      metalness: 0.95,
      emissive: 0x0369a1,
      emissiveIntensity: 0.35
    });
    const canal = new THREE.Mesh(canalGeo, canalMat);
    estateGroup.add(canal);

    // Modern Luxury Roadway
    const roadCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-8, 0.14, 1.2),
      new THREE.Vector3(-2, 0.14, 2.8),
      new THREE.Vector3(2.5, 0.14, 1.8),
      new THREE.Vector3(7.5, 0.14, 4.2),
    ]);
    const roadGeo = new THREE.TubeGeometry(roadCurve, 40, 0.7, 4, false);
    const roadMat = new THREE.MeshStandardMaterial({ color: 0x1a1d26, roughness: 0.85 });
    const road = new THREE.Mesh(roadGeo, roadMat);
    estateGroup.add(road);

    // Solar Micro-Cold Storage Pavilion
    const solarPodGroup = new THREE.Group();
    solarPodGroup.position.set(3.2, 0, 0.8);
    estateGroup.add(solarPodGroup);

    const podStructure = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 1.4, 1.8),
      new THREE.MeshStandardMaterial({ color: 0x161922, roughness: 0.3, metalness: 0.6 })
    );
    podStructure.position.y = 0.7;
    podStructure.castShadow = true;
    solarPodGroup.add(podStructure);

    // Angled Photovoltaic Monocrystalline Canopy
    const solarRoof = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 0.08, 2.0),
      new THREE.MeshStandardMaterial({ color: 0x0369a1, metalness: 0.98, roughness: 0.05 })
    );
    solarRoof.position.y = 1.45;
    solarRoof.rotation.x = 0.12;
    solarRoof.castShadow = true;
    solarPodGroup.add(solarRoof);

    // Fair Trade Terminal Pavilion (Golden Crown Architecture)
    const marketGroup = new THREE.Group();
    marketGroup.position.set(8.5, 0, 4.5);
    estateGroup.add(marketGroup);

    const marketPillar = new THREE.Mesh(
      new THREE.CylinderGeometry(2.4, 2.8, 1.2, 16),
      new THREE.MeshStandardMaterial({ color: 0x13161f, roughness: 0.4, metalness: 0.7 })
    );
    marketPillar.position.y = 0.6;
    marketPillar.castShadow = true;
    marketGroup.add(marketPillar);

    const marketCrown = new THREE.Mesh(
      new THREE.ConeGeometry(2.4, 1.4, 16),
      new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        metalness: 0.85,
        roughness: 0.2,
        emissive: 0x785315,
        emissiveIntensity: 0.3
      })
    );
    marketCrown.position.y = 1.9;
    marketCrown.castShadow = true;
    marketGroup.add(marketCrown);

    // Autonomous Electric Shuttle Truck
    const evTruck = new THREE.Group();
    estateGroup.add(evTruck);
    const truckChassis = new THREE.Mesh(
      new THREE.BoxGeometry(0.75, 0.38, 0.34),
      new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3, metalness: 0.5 })
    );
    truckChassis.position.y = 0.26;
    truckChassis.castShadow = true;
    evTruck.add(truckChassis);

    // Autonomous Inspection Drone
    const drone = new THREE.Group();
    drone.position.set(-5, 3.8, 2);
    estateGroup.add(drone);
    const droneBody = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xe6c887, metalness: 0.9, roughness: 0.1 })
    );
    drone.add(droneBody);

    const droneRotor = new THREE.Mesh(
      new THREE.TorusGeometry(0.42, 0.03, 8, 24),
      new THREE.MeshBasicMaterial({ color: 0x34d399 })
    );
    droneRotor.rotation.x = Math.PI / 2;
    drone.add(droneRotor);

    // Slender Modern Wind Turbines
    const turbines: THREE.Group[] = [];
    [-10, -11.5].forEach((tx, i) => {
      const tz = i === 0 ? -6.5 : -2;
      const tGroup = new THREE.Group();
      tGroup.position.set(tx, 0, tz);
      estateGroup.add(tGroup);

      const mast = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.16, 4.4, 12),
        new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.3 })
      );
      mast.position.y = 2.2;
      mast.castShadow = true;
      tGroup.add(mast);

      const rotor = new THREE.Group();
      rotor.position.set(0, 4.4, 0.14);
      tGroup.add(rotor);

      for (let b = 0; b < 3; b++) {
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(0.1, 1.8, 0.03),
          new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 })
        );
        blade.position.y = 0.9;
        const arm = new THREE.Group();
        arm.rotation.z = (b * Math.PI * 2) / 3;
        arm.add(blade);
        rotor.add(arm);
      }
      turbines.push(rotor);
    });

    // Atmospheric Stardust & Spores
    const particleCount = 180;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let p = 0; p < particleCount * 3; p += 3) {
      pPos[p] = (Math.random() - 0.5) * 36;
      pPos[p + 1] = Math.random() * 12 + 0.5;
      pPos[p + 2] = (Math.random() - 0.5) * 36;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xe6c887,
      size: 0.16,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const stardust = new THREE.Points(pGeo, pMat);
    scene.add(stardust);

    // 6. MOUSE ORBIT CONTROLS
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      orbitRotation.current.y += deltaX * 0.005;
      orbitRotation.current.x = Math.max(0.1, Math.min(1.2, orbitRotation.current.x + deltaY * 0.005));

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // 7. ANIMATION LOOP & HOTSPOT SCREEN PROJECTION
    let reqId: number;
    const clock = new THREE.Clock();
    const tempVec = new THREE.Vector3();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Spin wind turbine blades
      turbines.forEach((t) => {
        t.rotation.z -= delta * 3.2;
      });

      // Hover drone
      drone.position.x = -5 + Math.sin(elapsed * 1.4) * 1.2;
      drone.position.z = 2 + Math.cos(elapsed * 1.4) * 0.8;
      drone.position.y = 3.8 + Math.sin(elapsed * 2.8) * 0.2;

      // Animate EV truck along roadway
      const truckT = (elapsed * 0.08) % 1;
      const pt = roadCurve.getPointAt(truckT);
      const tangent = roadCurve.getTangentAt(truckT);
      evTruck.position.set(pt.x, pt.y + 0.12, pt.z);
      evTruck.lookAt(pt.x + tangent.x, pt.y + tangent.y + 0.12, pt.z + tangent.z);

      // Smooth camera interpolation
      camera.position.lerp(cameraTargetPos.current, 0.06);
      const currentLookAt = new THREE.Vector3();
      camera.getWorldDirection(currentLookAt);
      camera.lookAt(cameraTargetLookAt.current);

      // Free gentle estate rotation if not focused on a hotspot
      if (!activeHotspot && !isDragging.current) {
        estateGroup.rotation.y += delta * 0.08;
      } else if (isDragging.current) {
        estateGroup.rotation.y = orbitRotation.current.y;
      }

      // Calculate 2D Screen Positions for 3D Hotspot Pins
      const newCoords: { [id: string]: { x: number; y: number; visible: boolean } } = {};
      HOTSPOTS.forEach((spot) => {
        tempVec.set(spot.pos[0], spot.pos[1], spot.pos[2]);
        tempVec.applyMatrix4(estateGroup.matrixWorld);
        tempVec.project(camera);

        const isBehind = tempVec.z > 1;
        const x = (tempVec.x * 0.5 + 0.5) * width;
        const y = (-(tempVec.y * 0.5) + 0.5) * height;

        newCoords[spot.id] = {
          x,
          y,
          visible: !isBehind && x >= 0 && x <= width && y >= 0 && y <= height
        };
      });
      setScreenCoords(newCoords);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 750;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [activeHotspot]);

  // Handle focus transition when a hotspot is selected
  const handleSelectHotspot = (spot: HotspotInfo) => {
    setActiveHotspot(spot);
    cameraTargetPos.current.set(spot.cameraPos[0], spot.cameraPos[1], spot.cameraPos[2]);
    cameraTargetLookAt.current.set(spot.cameraLookAt[0], spot.cameraLookAt[1], spot.cameraLookAt[2]);
  };

  const handleResetPanoramic = () => {
    setActiveHotspot(null);
    setViewPreset('panoramic');
    cameraTargetPos.current.set(0, 14, 23);
    cameraTargetLookAt.current.set(0, 0, 0);
  };

  const handleAerialView = () => {
    setActiveHotspot(null);
    setViewPreset('aerial');
    cameraTargetPos.current.set(0, 24, 0.1);
    cameraTargetLookAt.current.set(0, 0, 0);
  };

  return (
    <div className="relative w-full h-[680px] lg:h-[780px] overflow-hidden rounded-3xl luxury-glass border border-white/[0.08] shadow-[0_30px_100px_rgba(0,0,0,0.9)] select-none">
      
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* 1. TOP ARCHITECTURAL HUD STATUS BAR */}
      <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 pointer-events-none z-20">
        
        {/* Left Telemetry Stamp */}
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 pointer-events-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_#34d399]" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-mono">ESTATE TWIN ONLINE</span>
            <span className="text-xs font-semibold text-white tracking-wide">320 Hectares · Autonomous Sync</span>
          </div>
        </div>

        {/* Right Architectural Preset Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 pointer-events-auto">
          <button
            onClick={handleResetPanoramic}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              viewPreset === 'panoramic' && !activeHotspot
                ? 'bg-gradient-to-r from-amber-400/20 to-amber-500/30 text-amber-200 border border-amber-400/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Panoramic
          </button>
          <button
            onClick={handleAerialView}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              viewPreset === 'aerial'
                ? 'bg-gradient-to-r from-amber-400/20 to-amber-500/30 text-amber-200 border border-amber-400/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Topographic
          </button>
          <button
            onClick={() => handleSelectHotspot(HOTSPOTS[0])}
            className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-all"
          >
            Zones
          </button>
        </div>
      </div>

      {/* 2. DYNAMIC 3D SPATIAL HOTSPOT PINS (Projected onto Canvas) */}
      {HOTSPOTS.map((spot) => {
        const coord = screenCoords[spot.id];
        if (!coord || !coord.visible) return null;
        const isSelected = activeHotspot?.id === spot.id;

        return (
          <div
            key={spot.id}
            style={{
              position: 'absolute',
              left: `${coord.x}px`,
              top: `${coord.y}px`,
              transform: 'translate(-50%, -50%)',
              zIndex: isSelected ? 35 : 25
            }}
            className="group pointer-events-auto cursor-pointer"
            onClick={() => handleSelectHotspot(spot)}
          >
            {/* Glowing Hotspot Pulse Ring */}
            <div className="relative flex items-center justify-center">
              <span className={`absolute w-10 h-10 rounded-full animate-ping-slow ${isSelected ? 'bg-amber-400/30' : 'bg-emerald-400/20'}`} />
              <div
                className={`relative w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shadow-xl ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 border-amber-300 scale-110 shadow-amber-400/50'
                    : 'bg-black/80 text-white border-white/30 hover:border-amber-400 hover:scale-105'
                }`}
              >
                <span className="text-[11px] font-mono font-bold">{spot.number}</span>
              </div>
            </div>

            {/* Hover Tooltip Preview */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-10 whitespace-nowrap px-3 py-1.5 rounded-xl bg-black/90 backdrop-blur-md border border-white/20 text-xs text-white shadow-2xl flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="font-medium">{spot.name}</span>
            </div>
          </div>
        );
      })}

      {/* 3. ACTIVE ARCHITECTURAL TELEMETRY CARD (Bottom Slide-Out) */}
      {activeHotspot && (
        <div className="absolute bottom-6 left-6 right-6 max-w-xl z-30 pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="luxury-glass-gold p-6 rounded-2xl relative overflow-hidden">
            {/* Top Close / Reset Button */}
            <button
              onClick={handleResetPanoramic}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-xs transition-colors"
            >
              ✕
            </button>

            {/* Card Content */}
            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-mono tracking-[0.25em] text-amber-300 uppercase mb-1">
                  ZONE {activeHotspot.number} // {activeHotspot.category}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  {activeHotspot.name}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {activeHotspot.description}
              </p>

              {/* Live Metric Row */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-amber-400/20">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-2xl font-extrabold text-amber-400 tracking-tight font-display">
                    {activeHotspot.metric}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{activeHotspot.metricLabel}</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Active System
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 leading-snug">{activeHotspot.status}</div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => onSelectHotspotAction && onSelectHotspotAction(activeHotspot.id)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-400/20 flex items-center gap-2 active:scale-95"
                >
                  <span>{activeHotspot.actionText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleResetPanoramic}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium transition-all"
                >
                  Return to Overview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. BOTTOM LUXURY ZONE CAROUSEL DOCK */}
      <div className="absolute bottom-6 left-6 right-6 hidden md:flex items-center justify-between pointer-events-none z-20">
        {!activeHotspot && (
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 pointer-events-auto">
            {HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => handleSelectHotspot(spot)}
                className="group px-3 py-2 rounded-xl text-left hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <span className="text-[10px] font-mono text-amber-400 font-bold">{spot.number}</span>
                <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                  {spot.name}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Orbit Drag Hint */}
        <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-slate-400 font-mono flex items-center gap-2 ml-auto pointer-events-auto">
          <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
          <span>DRAG TO ORBIT 3D ESTATE</span>
        </div>
      </div>
    </div>
  );
};
