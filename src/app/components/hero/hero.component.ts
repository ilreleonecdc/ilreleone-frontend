import { HemisphereLight } from './../../../../node_modules/@types/three/src/lights/HemisphereLight.d';
import { pointWidth } from './../../../../node_modules/@types/three/src/Three.TSL.d';
import { ThreeMFLoader } from './../../../../node_modules/@types/three/examples/jsm/loaders/3MFLoader.d';
import { HelixCurve } from './../../../../node_modules/@types/three/examples/jsm/curves/CurveExtras.d';
import { Component, AfterViewInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import * as THREE from 'three';


@Component({
  selector: 'app-hero',
  imports: [ButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true }) container!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private mesh!: THREE.Mesh;
  private mouseX = 0;
  private mouseY = 0;

  ngAfterViewInit(): void {
    this.initScene();
    this.animate();
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
  }

  private initScene() {
    const width = this.container.nativeElement.clientWidth;
    const height = this.container.nativeElement.clientHeight;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.container.nativeElement.appendChild(this.renderer.domElement);

    // Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    // Logo as plane
    const texture = new THREE.TextureLoader().load('../../../assets/finale3d.png');
    const geometry = new THREE.PlaneGeometry(4, 4);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    // Smooth rotation based on mouse
    this.mesh.rotation.y += (this.mouseX * 0.001 - this.mesh.rotation.y) * 0.05;
    this.mesh.rotation.x += (-this.mouseY * 0.001 - this.mesh.rotation.x) * 0.05;
    this.renderer.render(this.scene, this.camera);
  }

  private onMouseMove = (event: MouseEvent) => {
    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;
    this.mouseX = (event.clientX - halfWidth);
    this.mouseY = (event.clientY - halfHeight);
  }

  private onResize = () => {
    const width = this.container.nativeElement.clientWidth;
    const height = this.container.nativeElement.clientHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}
