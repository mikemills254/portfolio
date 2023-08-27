import Particles from "react-tsparticles";
import { loadSlim } from 'tsparticles-slim';
import { useCallback, useMemo } from "react";
import ParticlesConfig from "./ParticlesConfig";

const ParticleComponent = () => {
  const Options = useMemo(() => {
    return ParticlesConfig;
  }, [ParticlesConfig]);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={Options} />;
}

export default ParticleComponent;
