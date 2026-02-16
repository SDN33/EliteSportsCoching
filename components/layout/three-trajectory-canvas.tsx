"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    THREE?: any;
  }
}

export const ThreeTrajectoryCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);

  useEffect(() => {
    if (!threeLoaded || !canvasRef.current || !window.THREE) {
      return;
    }

    const THREE = window.THREE;
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0.35, 6);

    scene.add(new THREE.AmbientLight(0x9bb7ff, 0.45));

    const blueLight = new THREE.PointLight(0x2ec4ff, 1.5, 30);
    blueLight.position.set(-3.5, 1.8, 3);
    scene.add(blueLight);

    const goldLight = new THREE.PointLight(0xd5a64a, 1.4, 25);
    goldLight.position.set(3.5, -1.2, 2.4);
    scene.add(goldLight);

    const group = new THREE.Group();
    scene.add(group);

    const createTrajectory = (
      points: Array<[number, number, number]>,
      color: number,
      radius: number
    ) => {
      const curve = new THREE.CatmullRomCurve3(
        points.map(([x, y, z]) => new THREE.Vector3(x, y, z))
      );
      const geometry = new THREE.TubeGeometry(curve, 160, radius, 16, false);
      const material = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.25,
        metalness: 0.55,
        roughness: 0.2,
      });

      const mesh = new THREE.Mesh(geometry, material);
      group.add(mesh);
      return mesh;
    };

    const arcPrimary = createTrajectory(
      [
        [-2.8, -1.25, -0.4],
        [-1.8, -0.35, -1],
        [-0.45, 0.05, -0.45],
        [0.95, 0.6, 0.35],
        [2.1, 1.35, 0.95],
      ],
      0x2ec4ff,
      0.08
    );

    const arcSecondary = createTrajectory(
      [
        [-1.95, -1.2, 0.95],
        [-0.95, -0.1, 0.25],
        [0.15, 0.45, -0.3],
        [1.15, 0.95, -0.65],
        [2.65, 1.55, -1],
      ],
      0xe8c87a,
      0.05
    );

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(2.45, 0.02, 12, 140),
      new THREE.MeshBasicMaterial({
        color: 0x334766,
        transparent: true,
        opacity: 0.46,
      })
    );
    torus.rotation.x = Math.PI / 2.4;
    torus.rotation.y = -0.65;
    group.add(torus);

    const markerGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x7fe6ff });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.set(-2.82, -1.25, -0.41);
    group.add(marker);

    const arrow = new THREE.Mesh(
      new THREE.ConeGeometry(0.16, 0.44, 18),
      new THREE.MeshStandardMaterial({
        color: 0x2ec4ff,
        emissive: 0x2ec4ff,
        emissiveIntensity: 0.45,
      })
    );
    arrow.position.set(2.26, 1.42, 1.02);
    arrow.rotation.z = -Math.PI / 2.8;
    arrow.rotation.y = Math.PI / 6;
    group.add(arrow);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { clientWidth, clientHeight } = parent;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    let targetY = 0;
    let targetX = 0;

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetY = ((event.clientX - rect.left) / rect.width - 0.5) * 0.55;
      targetX = ((event.clientY - rect.top) / rect.height - 0.5) * 0.35;
    };

    let raf = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      group.rotation.y += (targetY - group.rotation.y) * 0.03;
      group.rotation.x += (-targetX - group.rotation.x) * 0.03;

      arcPrimary.rotation.z = Math.sin(elapsed * 0.85) * 0.08;
      arcSecondary.rotation.z = Math.cos(elapsed * 0.6) * 0.1;
      torus.rotation.z = elapsed * 0.08;
      marker.position.y = -1.25 + Math.sin(elapsed * 2.8) * 0.04;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);

      scene.traverse((object: any) => {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material: any) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [threeLoaded]);

  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-slate-950/70 via-slate-900/50 to-slate-950/80 shadow-2xl shadow-sky-950/30 backdrop-blur-sm lg:h-[430px]">
      <Script
        src="https://unpkg.com/three@0.161.0/build/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeLoaded(true)}
      />
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(46,196,255,0.18),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(232,200,122,0.14),transparent_45%)]" />
    </div>
  );
};
