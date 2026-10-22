
/**
 * Obsidian Kinetic - Production Client Runtime & Hybrid Architecture Hydration
 * Mounts Sections 3 through 6 into PAGE_SECTIONSc1dmp directly in the browser DOM.
 * Manages 250vh kinetic scroll runway, HUD telemetry, and cursor-tracking specular optics.
 */
(function() {
  function mountObsidianArchitecture() {
    const defaultFooter = document.getElementById("comp-kbgakxmn") || document.querySelector("footer");
    if (defaultFooter) {
      defaultFooter.style.display = "none";
    }
    const main = document.getElementById("PAGE_SECTIONSc1dmp");
    if (!main) return;

    // Check if Section 3 is already mounted
    if (document.getElementById("capabilitiesSection")) return;

    // 1. Identify native Section 1 and Section 2
    const sec1 = document.getElementById("comp-mvgxqv2a");
    const sec2 = document.getElementById("comp-mpe12ctc");

    // 2. Build Section 3: Capabilities Bento Matrix
    const sec3 = document.createElement("section");
    sec3.id = "capabilitiesSection";
    sec3.className = "ke5pl1 wixui-section fwXYgt";
    sec3.setAttribute("aria-label", "Capabilities Bento Matrix");
    sec3.innerHTML = `
      <header class="section-header" style="margin-bottom: 56px; text-align: center;">
        <span class="section-tag" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.15em; color: #D4FF00; text-transform: uppercase; margin-bottom: 12px; display: block;">AGENCY CAPABILITIES</span>
        <h2 class="section-title" style="font-family: 'Syne', sans-serif; font-size: clamp(2.25rem, 1.6rem + 2.8vw, 3.75rem); font-weight: 800; letter-spacing: -0.02em; text-transform: uppercase; color: #FFFFFF; text-shadow: 0 4px 24px rgba(0, 0, 0, 0.8);">02 // CAPABILITIES MATRIX</h2>
      </header>

      <div class="capabilities-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: 28px; max-width: 1360px; margin: 0 auto; width: 100%;">
        <!-- Card 1 -->
        <article class="capability-card" style="background: rgba(18, 18, 24, 0.72); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 44px; display: flex; flex-direction: column; justify-content: space-between; backdrop-filter: blur(24px) saturate(190%); -webkit-backdrop-filter: blur(24px) saturate(190%); box-shadow: 0 4px 32px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.08); position: relative; overflow: hidden; min-height: 320px;">
          <div>
            <div class="cap-num" style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #D4FF00; letter-spacing: 0.1em; margin-bottom: 20px;">CAPABILITY // 01</div>
            <h3 class="cap-title" style="font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.01em; line-height: 1.2; margin-bottom: 16px;">SPATIAL COMPUTING & 3D WEBGL</h3>
            <p class="cap-desc" style="font-size: 15px; color: rgba(255, 255, 255, 0.72); line-height: 1.7; margin-bottom: 28px;">Interactive WebGL viewports, Three.js orchestration, and procedural Spline runtime integrations engineered for ultra-smooth 60FPS browser execution with zero memory leakage.</p>
          </div>
          <ul class="cap-deliverables" style="display: flex; flex-wrap: wrap; gap: 8px; list-style: none; padding: 0;">
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">Three.js / WebGL 2.0</li>
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">Spline Runtime API</li>
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">PBR Lighting</li>
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">Spring Damping</li>
          </ul>
        </article>

        <!-- Card 2 -->
        <article class="capability-card" style="background: rgba(18, 18, 24, 0.72); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 44px; display: flex; flex-direction: column; justify-content: space-between; backdrop-filter: blur(24px) saturate(190%); -webkit-backdrop-filter: blur(24px) saturate(190%); box-shadow: 0 4px 32px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.08); position: relative; overflow: hidden; min-height: 320px;">
          <div>
            <div class="cap-num" style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #D4FF00; letter-spacing: 0.1em; margin-bottom: 20px;">CAPABILITY // 02</div>
            <h3 class="cap-title" style="font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.01em; line-height: 1.2; margin-bottom: 16px;">DESIGN SYSTEMS AT SCALE</h3>
            <p class="cap-desc" style="font-size: 15px; color: rgba(255, 255, 255, 0.72); line-height: 1.7; margin-bottom: 28px;">Mathematical token architecture, fluid clamp() typography scales, obsidian contrast optics, and zero-drift component specifications built for enterprise digital brands.</p>
          </div>
          <ul class="cap-deliverables" style="display: flex; flex-wrap: wrap; gap: 8px; list-style: none; padding: 0;">
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">W3C DTCG Standard</li>
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">Fluid Clamp Mathematics</li>
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">WCAG 2.1 AA Optics</li>
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">Figma Tokens Sync</li>
          </ul>
        </article>

        <!-- Card 3 -->
        <article class="capability-card" style="background: rgba(18, 18, 24, 0.72); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 44px; display: flex; flex-direction: column; justify-content: space-between; backdrop-filter: blur(24px) saturate(190%); -webkit-backdrop-filter: blur(24px) saturate(190%); box-shadow: 0 4px 32px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.08); position: relative; overflow: hidden; min-height: 320px;">
          <div>
            <div class="cap-num" style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #D4FF00; letter-spacing: 0.1em; margin-bottom: 20px;">CAPABILITY // 03</div>
            <h3 class="cap-title" style="font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.01em; line-height: 1.2; margin-bottom: 16px;">CREATIVE ENGINEERING</h3>
            <p class="cap-desc" style="font-size: 15px; color: rgba(255, 255, 255, 0.72); line-height: 1.7; margin-bottom: 28px;">Robust Wix Velo backend architecture, headless API bridges, custom event buses, and kinetic micro-interactions orchestrated with strict cubic-bezier spring physics.</p>
          </div>
          <ul class="cap-deliverables" style="display: flex; flex-wrap: wrap; gap: 8px; list-style: none; padding: 0;">
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">Velo Web Modules</li>
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">Programmatic CMS</li>
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">postMessage Bus</li>
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">Magnetic Physics</li>
          </ul>
        </article>

        <!-- Card 4 -->
        <article class="capability-card" style="background: rgba(18, 18, 24, 0.72); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 44px; display: flex; flex-direction: column; justify-content: space-between; backdrop-filter: blur(24px) saturate(190%); -webkit-backdrop-filter: blur(24px) saturate(190%); box-shadow: 0 4px 32px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.08); position: relative; overflow: hidden; min-height: 320px;">
          <div>
            <div class="cap-num" style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #D4FF00; letter-spacing: 0.1em; margin-bottom: 20px;">CAPABILITY // 04</div>
            <h3 class="cap-title" style="font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.01em; line-height: 1.2; margin-bottom: 16px;">TECHNICAL ART DIRECTION</h3>
            <p class="cap-desc" style="font-size: 15px; color: rgba(255, 255, 255, 0.72); line-height: 1.7; margin-bottom: 28px;">Bespoke PBR texturing, spatial lighting models, real-time GLSL fragment shaders, and cinematographic camera choreography designed to elevate boutique agencies.</p>
          </div>
          <ul class="cap-deliverables" style="display: flex; flex-wrap: wrap; gap: 8px; list-style: none; padding: 0;">
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">GLSL Custom Shaders</li>
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">Camera Choreography</li>
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">Specular Edge Sheen</li>
            <li class="cap-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 12px; border-radius: 6px;">Post-Processing FX</li>
          </ul>
        </article>
      </div>
    `;

    // 3. Build Section 4: 300vh Kinetic Runway Stage
    const sec4 = document.createElement("section");
    sec4.id = "kineticRunwayStage";
    sec4.className = "ke5pl1 wixui-section fwXYgt";
    sec4.setAttribute("aria-label", "Kinetic Runway Stage");
    sec4.style.position = "relative";
    sec4.style.width = "100%";
    sec4.style.height = "250vh";
    sec4.style.background = "radial-gradient(circle at 50% 30%, #0E0E16 0%, #060608 100%)";
    sec4.innerHTML = `
      <div class="runway-sticky-wrapper" style="position: sticky; top: 0; width: 100%; height: 100vh; display: flex; align-items: center; justify-content: space-between; padding: 0 60px; max-width: 1440px; margin: 0 auto; overflow: hidden; box-sizing: border-box;">
        <!-- Left Column: Sticky Technical HUD -->
        <div class="runway-hud-left" style="width: 440px; display: flex; flex-direction: column; gap: 24px; z-index: 10;">
          <div class="runway-telemetry-panel" style="background: rgba(18, 18, 24, 0.85); border: 1px solid rgba(212, 255, 0, 0.5); border-radius: 16px; padding: 32px; backdrop-filter: blur(24px); box-shadow: 0 0 32px rgba(212, 255, 0, 0.1);">
            <span class="runway-stage-badge" id="stickyStageBadge" style="display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #060608; background: #D4FF00; padding: 4px 12px; border-radius: 4px; margin-bottom: 16px; letter-spacing: 0.1em;">STAGE 01 // HERO ARCHITECTURE</span>
            <h3 class="runway-title" style="font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 16px; color: #FFFFFF;">250VH KINETIC SCROLL RUNWAY</h3>
            <p style="font-size: 14px; color: rgba(255,255,255,0.72); margin-bottom: 20px; line-height: 1.6;">
              Real-time scroll progress normalized across a 250vh coordinate track with deadband telemetry filtering and continuous camera rotation.
            </p>

            <div class="runway-readouts" style="display: flex; flex-direction: column; gap: 12px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #9496A1; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 16px;">
              <div class="runway-readout-row" style="display: flex; justify-content: space-between;">
                <span>TRAVEL PROGRESS:</span>
                <span style="color: #D4FF00; font-weight: 600;" id="stickyProgress">0.000</span>
              </div>
              <div class="runway-readout-row" style="display: flex; justify-content: space-between;">
                <span>CAMERA ROTATION Y:</span>
                <span style="color: #D4FF00; font-weight: 600;" id="stickyRotY">0.000 rad</span>
              </div>
              <div class="runway-readout-row" style="display: flex; justify-content: space-between;">
                <span>CAMERA DISTANCE Z:</span>
                <span style="color: #D4FF00; font-weight: 600;" id="stickyDistZ">1000.0</span>
              </div>
              <div class="runway-readout-row" style="display: flex; justify-content: space-between;">
                <span>FRAME RATE:</span>
                <span style="color: #D4FF00; font-weight: 600;" id="stickyFps">60 FPS</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: 3 Milestone Cards -->
        <div class="runway-milestones-right" style="width: 580px; display: flex; flex-direction: column; gap: 32px; z-index: 10;">
          <div class="milestone-card active" id="milestone1" style="background: rgba(18, 18, 24, 0.8); border: 1px solid rgba(212, 255, 0, 0.5); border-radius: 18px; padding: 32px; backdrop-filter: blur(20px); box-shadow: 0 0 32px rgba(212, 255, 0, 0.15); transition: all 0.4s ease;">
            <div class="milestone-step" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #D4FF00; letter-spacing: 0.15em; margin-bottom: 8px;">MILESTONE 01 // STAGE 01</div>
            <h4 class="milestone-title" style="font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; color: #FFFFFF; margin-bottom: 12px;">PRECISION ARCHITECTURE</h4>
            <p class="milestone-body" style="font-size: 14px; color: rgba(255, 255, 255, 0.7); line-height: 1.6;">Mathematical fluid clamp() design tokens, sub-pixel grid alignment, and obsidian dark surfaces engineered for zero layout shift across every display size.</p>
          </div>

          <div class="milestone-card" id="milestone2" style="background: rgba(18, 18, 24, 0.8); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 32px; backdrop-filter: blur(20px); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7); transition: all 0.4s ease;">
            <div class="milestone-step" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #D4FF00; letter-spacing: 0.15em; margin-bottom: 8px;">MILESTONE 02 // STAGE 02</div>
            <h4 class="milestone-title" style="font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; color: #FFFFFF; margin-bottom: 12px;">DYNAMIC RUNTIME PERFORMANCE</h4>
            <p class="milestone-body" style="font-size: 14px; color: rgba(255, 255, 255, 0.7); line-height: 1.6;">Delta-damped spring physics interpolating camera orbit, elevation, and scale at a locked 60FPS WebGL execution rate with strict bounds clamping.</p>
          </div>

          <div class="milestone-card" id="milestone3" style="background: rgba(18, 18, 24, 0.8); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 32px; backdrop-filter: blur(20px); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7); transition: all 0.4s ease;">
            <div class="milestone-step" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #D4FF00; letter-spacing: 0.15em; margin-bottom: 8px;">MILESTONE 03 // STAGE 03</div>
            <h4 class="milestone-title" style="font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; color: #FFFFFF; margin-bottom: 12px;">DEPLOYMENT VELOCITY</h4>
            <p class="milestone-body" style="font-size: 14px; color: rgba(255, 255, 255, 0.7); line-height: 1.6;">Automated Wix Velo data seeding, bidirectional postMessage event bridges, and continuous cloud publishing delivering instant agency hand-off.</p>
          </div>
        </div>
      </div>
    `;

    // 4. Build Section 5: Telemetry Benchmarks
    const sec5 = document.createElement("section");
    sec5.id = "metricsSection";
    sec5.className = "ke5pl1 wixui-section fwXYgt";
    sec5.setAttribute("aria-label", "Social Proof and Telemetry Benchmarks");
    sec5.style.position = "relative";
    sec5.style.width = "100%";
    sec5.style.padding = "100px 40px";
    sec5.style.background = "#0B0B0F";
    sec5.style.borderTop = "1px solid rgba(255, 255, 255, 0.08)";
    sec5.style.borderBottom = "1px solid rgba(255, 255, 255, 0.08)";
    sec5.style.boxSizing = "border-box";
    sec5.innerHTML = `
      <div class="metrics-container" style="max-width: 1360px; margin: 0 auto;">
        <header class="metrics-header" style="text-align: center; margin-bottom: 60px;">
          <span class="section-tag" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.15em; color: #D4FF00; text-transform: uppercase; margin-bottom: 12px; display: block;">TELEMETRY BENCHMARKS</span>
          <h2 class="section-title" style="font-family: 'Syne', sans-serif; font-size: clamp(2rem, 1.4rem + 2.5vw, 3.25rem); font-weight: 800; letter-spacing: -0.02em; text-transform: uppercase; color: #FFFFFF;">04 // VALIDATED PERFORMANCE</h2>
        </header>

        <div class="metrics-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
          <div class="metric-box" style="background: rgba(18, 18, 24, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 36px 24px; text-align: center; transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);">
            <div class="metric-val" style="font-family: 'JetBrains Mono', monospace; font-size: clamp(2.5rem, 2rem + 1.8vw, 3.75rem); font-weight: 700; color: #D4FF00; letter-spacing: -0.03em; line-height: 1; margin-bottom: 12px;">60 FPS</div>
            <div class="metric-label" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 600; color: #FFFFFF; margin-bottom: 6px;">SUSTAINED FRAME RATE</div>
            <div class="metric-sub" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; letter-spacing: 0.05em;">HARDWARE-ACCELERATED WEBGL</div>
          </div>

          <div class="metric-box" style="background: rgba(18, 18, 24, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 36px 24px; text-align: center; transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);">
            <div class="metric-val" style="font-family: 'JetBrains Mono', monospace; font-size: clamp(2.5rem, 2rem + 1.8vw, 3.75rem); font-weight: 700; color: #D4FF00; letter-spacing: -0.03em; line-height: 1; margin-bottom: 12px;">0.00</div>
            <div class="metric-label" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 600; color: #FFFFFF; margin-bottom: 6px;">CUMULATIVE LAYOUT SHIFT</div>
            <div class="metric-sub" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; letter-spacing: 0.05em;">ZERO RUNTIME DRIFT</div>
          </div>

          <div class="metric-box" style="background: rgba(18, 18, 24, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 36px 24px; text-align: center; transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);">
            <div class="metric-val" style="font-family: 'JetBrains Mono', monospace; font-size: clamp(2.5rem, 2rem + 1.8vw, 3.75rem); font-weight: 700; color: #D4FF00; letter-spacing: -0.03em; line-height: 1; margin-bottom: 12px;">100%</div>
            <div class="metric-label" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 600; color: #FFFFFF; margin-bottom: 6px;">RESPONSIVE MATRIX</div>
            <div class="metric-sub" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; letter-spacing: 0.05em;">12-COL TO 4-COL ADAPTATION</div>
          </div>

          <div class="metric-box" style="background: rgba(18, 18, 24, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 36px 24px; text-align: center; transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);">
            <div class="metric-val" style="font-family: 'JetBrains Mono', monospace; font-size: clamp(2.5rem, 2rem + 1.8vw, 3.75rem); font-weight: 700; color: #D4FF00; letter-spacing: -0.03em; line-height: 1; margin-bottom: 12px;">&lt; 1.2s</div>
            <div class="metric-label" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 600; color: #FFFFFF; margin-bottom: 6px;">GLOBAL LCP TIME</div>
            <div class="metric-sub" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #9496A1; letter-spacing: 0.05em;">SUB-SECOND ASSET RESOLUTION</div>
          </div>
        </div>
      </div>
    `;

    // 5. Build Section 6: Apex CTA & Inquiry Footer
    const sec6 = document.createElement("section");
    sec6.id = "inquiryFooter";
    sec6.className = "ke5pl1 wixui-section fwXYgt";
    sec6.setAttribute("aria-label", "Inquiry and Agency Footer");
    sec6.style.position = "relative";
    sec6.style.width = "100%";
    sec6.style.padding = "140px 40px 80px";
    sec6.style.background = "radial-gradient(circle at 50% 100%, #14141E 0%, #060608 100%)";
    sec6.style.borderTop = "1px solid rgba(255, 255, 255, 0.08)";
    sec6.style.textAlign = "center";
    sec6.style.boxSizing = "border-box";
    sec6.innerHTML = `
      <div class="inquiry-inner" style="max-width: 960px; margin: 0 auto;">
        <span class="inquiry-tag" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; color: #D4FF00; text-transform: uppercase; margin-bottom: 24px; display: inline-block;">INITIATE COLLABORATION</span>
        <h2 class="inquiry-headline" style="font-family: 'Syne', sans-serif; font-size: clamp(2.5rem, 1.8rem + 4vw, 4.75rem); font-weight: 800; letter-spacing: -0.03em; text-transform: uppercase; color: #FFFFFF; line-height: 1.08; margin-bottom: 32px; text-shadow: 0 4px 36px rgba(0, 0, 0, 0.9);">INITIATE YOUR NEXT EXPEDITION</h2>
        <p class="inquiry-sub" style="font-size: 16px; color: rgba(255, 255, 255, 0.72); max-width: 580px; margin: 0 auto 44px; line-height: 1.65;">
          Transform your brand into a high-velocity spatial computing experience. We architect bespoke 3D interactive design systems that transcend static web design.
        </p>

        <div class="inquiry-btn-row" style="display: flex; justify-content: center; gap: 20px; margin-bottom: 80px;">
          <a href="/contact" id="btnStartProject" class="btn-apex btn-volt" style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 18px 40px; border-radius: 6px; cursor: pointer; background-color: #D4FF00; color: #060608; border: 1px solid #D4FF00; box-shadow: 0 0 28px rgba(212, 255, 0, 0.35); text-decoration: none; display: inline-block;">
            START PROJECT // INITIATE NOW
          </a>
        </div>

        <div class="agency-footer-bottom" style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 48px; display: flex; flex-direction: column; align-items: center; gap: 28px;">
          <div class="footer-status-pill" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #D4FF00; letter-spacing: 0.12em;">
            [STATUS: ALL SYSTEMS NOMINAL]
          </div>

          <ul class="footer-links" style="display: flex; gap: 36px; list-style: none; padding: 0; margin: 0;">
            <li><a href="/work" class="footer-link" style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 600; color: #9496A1; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;">WORK // 01</a></li>
            <li><a href="/about" class="footer-link" style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 600; color: #9496A1; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;">ABOUT // 02</a></li>
            <li><a href="/contact" class="footer-link" style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 600; color: #9496A1; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;">CONTACT // 03</a></li>
          </ul>

          <p class="footer-copy" style="font-size: 12px; color: rgba(255, 255, 255, 0.4); margin: 0;">
            &copy; 2026 OBSIDIAN KINETIC STUDIO. ENGINEERED FOR WIX STUDIO TEMPLATE MARKETPLACE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    `;

    // 6. Append sections directly to PAGE_SECTIONSc1dmp
    main.appendChild(sec3);
    main.appendChild(sec4);
    main.appendChild(sec5);
    main.appendChild(sec6);

    // 7. Attach Interactive 250vh Runway Scroll Listener & HUD Telemetry
    setupKineticRunwayListener();

    // 8. Attach Cursor-Tracking Specular Sheen
    setupCardSpecularSheen();

    // 9. Attach Smooth Anchor Scroll & Navigation
    setupAnchorNavigation();
  }

  function setupKineticRunwayListener() {
    const runway = document.getElementById("kineticRunwayStage");
    if (!runway) return;

    const stageBadge = document.getElementById("stickyStageBadge");
    const progressEl = document.getElementById("stickyProgress");
    const rotYEl = document.getElementById("stickyRotY");
    const distZEl = document.getElementById("stickyDistZ");
    const m1 = document.getElementById("milestone1");
    const m2 = document.getElementById("milestone2");
    const m3 = document.getElementById("milestone3");

    let ticking = false;
    window.addEventListener("scroll", function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const rect = runway.getBoundingClientRect();
          const totalTravel = rect.height - window.innerHeight;
          if (totalTravel > 0) {
            const progress = Math.max(0, Math.min(1, -rect.top / totalTravel));
            if (progressEl) progressEl.textContent = progress.toFixed(3);
            const rotY = progress * Math.PI;
            if (rotYEl) rotYEl.textContent = rotY.toFixed(3) + " rad";
            const distZ = (1000 + Math.sin(progress * Math.PI) * 380).toFixed(1);
            if (distZEl) distZEl.textContent = distZ;

            // Milestones and Keyframes
            if (progress < 0.34) {
              if (stageBadge) stageBadge.textContent = "STAGE 01 // HERO ARCHITECTURE";
              if (m1) { m1.style.borderColor = "#D4FF00"; m1.style.boxShadow = "0 0 32px rgba(212, 255, 0, 0.15)"; }
              if (m2) { m2.style.borderColor = "rgba(255, 255, 255, 0.12)"; m2.style.boxShadow = "none"; }
              if (m3) { m3.style.borderColor = "rgba(255, 255, 255, 0.12)"; m3.style.boxShadow = "none"; }
            } else if (progress < 0.67) {
              if (stageBadge) stageBadge.textContent = "STAGE 02 // DYNAMIC RUNTIME";
              if (m1) { m1.style.borderColor = "rgba(255, 255, 255, 0.12)"; m1.style.boxShadow = "none"; }
              if (m2) { m2.style.borderColor = "#D4FF00"; m2.style.boxShadow = "0 0 32px rgba(212, 255, 0, 0.15)"; }
              if (m3) { m3.style.borderColor = "rgba(255, 255, 255, 0.12)"; m3.style.boxShadow = "none"; }
            } else {
              if (stageBadge) stageBadge.textContent = "STAGE 03 // DEPLOYMENT VELOCITY";
              if (m1) { m1.style.borderColor = "rgba(255, 255, 255, 0.12)"; m1.style.boxShadow = "none"; }
              if (m2) { m2.style.borderColor = "rgba(255, 255, 255, 0.12)"; m2.style.boxShadow = "none"; }
              if (m3) { m3.style.borderColor = "#D4FF00"; m3.style.boxShadow = "0 0 32px rgba(212, 255, 0, 0.15)"; }
            }

            // Broadcast to Spline 3D canvas iframe
            const splineIframe = document.querySelector("#comp-mvgxxykg iframe, iframe[name='htmlComp-iframe']");
            if (splineIframe && splineIframe.contentWindow) {
              splineIframe.contentWindow.postMessage({
                type: "SCROLL_PROGRESS",
                progress: progress,
                stage: progress < 0.34 ? "STAGE_1_HERO" : (progress < 0.67 ? "STAGE_2_EXPLODED" : "STAGE_3_SPEC")
              }, "*");
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  function setupCardSpecularSheen() {
    const cards = document.querySelectorAll(".capability-card, .milestone-card, .metric-box, [class*='wixui-repeater__item']");
    cards.forEach(card => {
      card.addEventListener("mousemove", function(e) {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", x + "%");
        card.style.setProperty("--mouse-y", y + "%");
      });
    });
  }

  function setupAnchorNavigation() {
    document.querySelectorAll("a[href^='#']").forEach(link => {
      link.addEventListener("click", function(e) {
        const targetId = link.getAttribute("href").substring(1);
        const target = document.getElementById(targetId) || document.getElementById("comp-mpe12ctc");
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Hydrate on DOM ready and after dynamic framework hydration
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountObsidianArchitecture);
  } else {
    mountObsidianArchitecture();
  }
  window.addEventListener("load", mountObsidianArchitecture);
  setTimeout(mountObsidianArchitecture, 300);
  setTimeout(mountObsidianArchitecture, 1000);
  setTimeout(mountObsidianArchitecture, 2500);
})();
