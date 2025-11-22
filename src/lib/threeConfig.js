export const threeConfig = {
  camera: {
    position: [0, 0, 8],
    fov: 75,
    near: 0.1,
    far: 1000
  },
  gl: {
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  },
  dpr: Math.min(window.devicePixelRatio, 2)
};

export const postProcessingConfig = {
  bloom: {
    intensity: 0.5,
    luminanceThreshold: 0.2,
    luminanceSmoothing: 0.9
  },
  chromaticAberration: {
    offset: [0.001, 0.001]
  }
};