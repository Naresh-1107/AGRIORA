import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroDigitalTwinProps {
  activeStage?: number;
  onSelectStage?: (stageIndex: number) => void;
}

export const HeroDigitalTwin: React.FC<HeroDigitalTwinProps> = ({
  activeStage = 0,
  onSelectStage,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState<'orbit' | 'aerial' | 'market'>('orbit');
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const truckRef = useRef<THREE.Group | null>(null);
  const droneRef = useRef<THREE.Group | null>(null);
  const windmillRef = useRef<THREE.Group | null>(null);
  const markersRef = useRef<{ name: string; mesh: THREE.Mesh; index: number }[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 520;

    // 1. SCENE
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xf8fafc);
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.02);

    // 2. CAMERA
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(13, 11, 14);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. RENDERER (Studio Quality)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. STUDIO LIGHTING (Apple-style bright, soft, natural)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keySun = new THREE.DirectionalLight(0xfffbf2, 1.8);
    keySun.position.set(15, 22, 12);
    keySun.castShadow = true;
    keySun.shadow.mapSize.width = 1024;
    keySun.shadow.mapSize.height = 1024;
    keySun.shadow.bias = -0.001;
    scene.add(keySun);

    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 0.6);
    fillLight.position.set(-12, 10, -10);
    scene.add(fillLight);

    // Soft ground shadow receiver plane
    const shadowFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50),
      new THREE.ShadowMaterial({ opacity: 0.08 })
    );
    shadowFloor.rotation.x = -Math.PI / 2;
    shadowFloor.position.y = -1.5;
    shadowFloor.receiveShadow = true;
    scene.add(shadowFloor);

    // 5. MINIMALIST 3D FARM ISLAND
    const islandGroup = new THREE.Group();
    scene.add(islandGroup);

    // Matte Porcelain Podium
    const baseGeo = new THREE.CylinderGeometry(8.2, 8.8, 1.5, 48);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.4,
      metalness: 0.05,
    });
    const basePodium = new THREE.Mesh(baseGeo, baseMat);
    basePodium.position.y = -0.75;
    basePodium.receiveShadow = true;
    basePodium.castShadow = true;
    islandGroup.add(basePodium);

    // Subtle emerald rim
    const rimGeo = new THREE.TorusGeometry(8.22, 0.06, 16, 64);
    const rimMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.01;
    islandGroup.add(rim);

    // 6. SCULPTED CROP PLOTS (Fresh vibrant greens)
    const plots = [
      { x: -3.5, z: -2.5, w: 3.4, d: 3.2, baseColor: 0xecfdf5, rowColor: 0x059669 },
      { x: -3.5, z: 2.2, w: 3.2, d: 2.8, baseColor: 0xf0fdf4, rowColor: 0x16a34a },
      { x: 1.5, z: -3.2, w: 3.6, d: 2.6, baseColor: 0xfefce8, rowColor: 0xeab308 },
      { x: 3.8, z: 1.8, w: 3.2, d: 3.0, baseColor: 0xf0fdfa, rowColor: 0x0d9488 },
    ];

    plots.forEach((p) => {
      const plotMesh = new THREE.Mesh(
        new THREE.BoxGeometry(p.w, 0.12, p.d),
        new THREE.MeshStandardMaterial({ color: p.baseColor, roughness: 0.6 })
      );
      plotMesh.position.set(p.x, 0.06, p.z);
      plotMesh.receiveShadow = true;
      islandGroup.add(plotMesh);

      // Clean parallel crop rows
      const rowCount = 5;
      for (let i = 0; i < rowCount; i++) {
        const offset = -p.w / 2 + (p.w / (rowCount + 1)) * (i + 1);
        const row = new THREE.Mesh(
          new THREE.BoxGeometry(0.12, 0.22, p.d * 0.9),
          new THREE.MeshStandardMaterial({ color: p.rowColor, roughness: 0.5 })
        );
        row.position.set(p.x + offset, 0.16, p.z);
        row.castShadow = true;
        islandGroup.add(row);
      }
    });

    // 7. CLEAN WATER CANAL
    const canalCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-6, 0.04, 0),
      new THREE.Vector3(-2, 0.04, 0.5),
      new THREE.Vector3(1, 0.04, -0.8),
      new THREE.Vector3(5, 0.04, -1.2),
      new THREE.Vector3(7, 0.04, -2),
    ]);
    const canalGeo = new THREE.TubeGeometry(canalCurve, 32, 0.35, 8, false);
    const canalMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.1,
      metalness: 0.3,
      transparent: true,
      opacity: 0.85,
    });
    const canalMesh = new THREE.Mesh(canalGeo, canalMat);
    islandGroup.add(canalMesh);

    // 8. TRANSIT ROADWAY
    const roadCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4, 0.05, -1),
      new THREE.Vector3(0, 0.05, 0.2),
      new THREE.Vector3(3, 0.05, 2.5),
      new THREE.Vector3(5, 0.05, 4.5),
    ]);
    const roadGeo = new THREE.TubeGeometry(roadCurve, 30, 0.42, 4, false);
    const roadMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.8 });
    const roadMesh = new THREE.Mesh(roadGeo, roadMat);
    islandGroup.add(roadMesh);

    // 9. MINIMALIST BUILDINGS
    // A. Glass Greenhouse
    const greenhouse = new THREE.Group();
    greenhouse.position.set(-0.8, 0, 1.8);
    islandGroup.add(greenhouse);

    const domeGeo = new THREE.SphereGeometry(1.0, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.1,
      metalness: 0.1,
      transparent: true,
      opacity: 0.45,
    });
    const dome = new THREE.Mesh(domeGeo, domeMat);
    dome.position.y = 0.05;
    greenhouse.add(dome);

    const domeBase = new THREE.Mesh(
      new THREE.CylinderGeometry(1.05, 1.05, 0.1, 24),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
    );
    domeBase.position.y = 0.05;
    greenhouse.add(domeBase);

    // B. Solar Cold Pod
    const coldPod = new THREE.Group();
    coldPod.position.set(1.5, 0, 1.6);
    islandGroup.add(coldPod);

    const podMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.9, 1.1),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 })
    );
    podMesh.position.y = 0.45;
    podMesh.castShadow = true;
    coldPod.add(podMesh);

    const solarMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.3, 0.04, 1.0),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.8, roughness: 0.2 })
    );
    solarMesh.position.y = 0.93;
    coldPod.add(solarMesh);

    // C. Fair Market Terminal
    const market = new THREE.Group();
    market.position.set(5.2, 0, 4.2);
    islandGroup.add(market);

    const marketBase = new THREE.Mesh(
      new THREE.CylinderGeometry(1.3, 1.5, 0.7, 16),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
    );
    marketBase.position.y = 0.35;
    marketBase.castShadow = true;
    market.add(marketBase);

    const marketRoof = new THREE.Mesh(
      new THREE.ConeGeometry(1.4, 0.6, 16),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3, metalness: 0.3 })
    );
    marketRoof.position.y = 1.0;
    market.add(marketRoof);

    // D. Minimal Wind Turbine
    const turbine = new THREE.Group();
    turbine.position.set(-6.0, 0, -4.2);
    islandGroup.add(turbine);

    const mast = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.12, 3.2, 12),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
    );
    mast.position.y = 1.6;
    mast.castShadow = true;
    turbine.add(mast);

    const blades = new THREE.Group();
    blades.position.set(0, 3.2, 0.1);
    turbine.add(blades);
    windmillRef.current = blades;

    for (let i = 0; i < 3; i++) {
      const blade = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 1.3, 0.02),
        new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 })
      );
      blade.position.y = 0.65;
      const arm = new THREE.Group();
      arm.rotation.z = (i * Math.PI * 2) / 3;
      arm.add(blade);
      blades.add(arm);
    }

    // E. Minimal EV Truck
    const truck = new THREE.Group();
    truckRef.current = truck;
    islandGroup.add(truck);

    const truckMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.28, 0.24),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.2 })
    );
    truckMesh.position.y = 0.18;
    truckMesh.castShadow = true;
    truck.add(truckMesh);

    // F. Drone
    const drone = new THREE.Group();
    droneRef.current = drone;
    drone.position.set(-3, 2.5, -2);
    islandGroup.add(drone);

    const droneCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0x0f172a })
    );
    drone.add(droneCore);

    const scanBeam = new THREE.Mesh(
      new THREE.ConeGeometry(0.6, 1.6, 16, 1, true),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.2, side: THREE.DoubleSide })
    );
    scanBeam.position.y = -0.8;
    drone.add(scanBeam);

    // 10. INTERACTIVE MILESTONES (7 Clean Apple-style Nodes)
    const stageNodes = [
      { name: '01 Plan', pos: new THREE.Vector3(-4.5, 0.5, -3.2), index: 0 },
      { name: '02 Grow', pos: new THREE.Vector3(-2.8, 0.5, 1.8), index: 1 },
      { name: '03 Protect', pos: new THREE.Vector3(-0.8, 1.2, 1.8), index: 2 },
      { name: '04 Harvest', pos: new THREE.Vector3(1.2, 0.5, -2.5), index: 3 },
      { name: '05 Store', pos: new THREE.Vector3(1.5, 1.1, 1.6), index: 4 },
      { name: '06 Transport', pos: new THREE.Vector3(3.0, 0.5, 2.8), index: 5 },
      { name: '07 Market', pos: new THREE.Vector3(5.2, 1.2, 4.2), index: 6 },
    ];

    markersRef.current = [];
    stageNodes.forEach((node) => {
      const markerGroup = new THREE.Group();
      markerGroup.position.copy(node.pos);
      islandGroup.add(markerGroup);

      const isSel = node.index === activeStage;
      const markerGeo = new THREE.SphereGeometry(0.2, 16, 16);
      const markerMat = new THREE.MeshStandardMaterial({
        color: isSel ? 0x059669 : 0x0f172a,
        roughness: 0.2,
      });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      markerGroup.add(marker);

      markersRef.current.push({
        name: node.name,
        mesh: marker,
        index: node.index,
      });
    });

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      mouseVec.set(x, y);

      raycaster.setFromCamera(mouseVec, camera);
      const meshes = markersRef.current.map((m) => m.mesh);
      const hits = raycaster.intersectObjects(meshes);
      if (hits.length > 0) {
        const found = markersRef.current.find((m) => m.mesh === hits[0].object);
        if (found) setHoveredLabel(found.name);
        container.style.cursor = 'pointer';
      } else {
        setHoveredLabel(null);
        container.style.cursor = 'default';
      }
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouseVec, camera);
      const meshes = markersRef.current.map((m) => m.mesh);
      const hits = raycaster.intersectObjects(meshes);
      if (hits.length > 0) {
        const found = markersRef.current.find((m) => m.mesh === hits[0].object);
        if (found && onSelectStage) {
          onSelectStage(found.index);
        }
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    // Animation Loop
    let reqId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Spin wind turbine
      if (windmillRef.current) {
        windmillRef.current.rotation.z -= delta * 1.5;
      }

      // Drone gentle hover
      if (droneRef.current) {
        droneRef.current.position.x = -3 + Math.sin(elapsed * 1.2) * 0.6;
        droneRef.current.position.z = -2 + Math.cos(elapsed * 1.2) * 0.6;
        droneRef.current.position.y = 2.5 + Math.sin(elapsed * 2.5) * 0.1;
      }

      // EV Truck along road
      if (truckRef.current) {
        const t = (elapsed * 0.08) % 1;
        const pt = roadCurve.getPointAt(t);
        const tangent = roadCurve.getTangentAt(t);
        truckRef.current.position.set(pt.x, pt.y + 0.1, pt.z);
        truckRef.current.lookAt(pt.x + tangent.x, pt.y + tangent.y + 0.1, pt.z + tangent.z);
      }

      // Camera views
      if (activeView === 'orbit') {
        islandGroup.rotation.y = elapsed * 0.06 + mouseX * 0.2;
        camera.position.y = 11 + mouseY * 1.5;
        camera.lookAt(0, 0, 0);
      } else if (activeView === 'aerial') {
        camera.position.lerp(new THREE.Vector3(0, 18, 0.1), 0.05);
        camera.lookAt(0, 0, 0);
      } else if (activeView === 'market') {
        camera.position.lerp(new THREE.Vector3(8, 6, 8), 0.05);
        camera.lookAt(5.2, 0.5, 4.2);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 520;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      container.style.cursor = 'default';
      renderer.dispose();
    };
  }, [activeView, activeStage, onSelectStage]);

  return (
    <div className="relative w-full h-[460px] lg:h-[540px] rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-sm">
      {/* 3D Canvas */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Floating Apple-Style Segmented View Controls */}
      <div className="absolute top-4 right-4 z-20 flex items-center p-1 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-sm">
        <button
          onClick={() => setActiveView('orbit')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
            activeView === 'orbit'
              ? 'bg-slate-900 text-white font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          3D Orbit
        </button>
        <button
          onClick={() => setActiveView('aerial')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
            activeView === 'aerial'
              ? 'bg-slate-900 text-white font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Aerial Map
        </button>
        <button
          onClick={() => setActiveView('market')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
            activeView === 'market'
              ? 'bg-slate-900 text-white font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Market Hub
        </button>
      </div>

      {/* Left indicator */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Interactive 3D Agropolis
        </span>
        {hoveredLabel && (
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-medium shadow-xs">
            {hoveredLabel} (Click to inspect)
          </span>
        )}
      </div>

      {/* Bottom helper */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs text-slate-500 px-3 py-2 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200/60 shadow-xs">
        <span>Drag mouse to rotate 3D view</span>
        <span className="font-medium text-emerald-700">Click any marker to jump stages</span>
      </div>
    </div>
  );
};
