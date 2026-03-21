import { useEffect, useRef } from 'react';

const BackgroundParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let shootingStars = [];
        let mouse = { x: -9999, y: -9999 };
        let shootingStarTimer = 0;

        const colorMap = {
            magenta: '#D946EF',
            cyan:    '#06B6D4',
            yellow:  '#EAB308',
            lime:    '#22C55E',
            pink:    '#EC4899',
            white:   '#71717A', // Zinc-500 for subtle particles
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const count = Math.floor(window.innerWidth * 0.22);
            for (let i = 0; i < count; i++) {
                const r = Math.random();
                const colorType =
                    r < 0.10 ? 'magenta' :
                    r < 0.18 ? 'cyan' :
                    r < 0.23 ? 'yellow' :
                    r < 0.26 ? 'lime' :
                    r < 0.29 ? 'pink' : 'white';
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() < 0.75 ? 1 : 2,
                    vx: (Math.random() - 0.5) * 0.18,
                    vy: (Math.random() - 0.5) * 0.18,
                    baseVx: 0,
                    baseVy: 0,
                    opacity: Math.random() * 0.8 + 0.1,
                    pulse: Math.random() * Math.PI * 2,
                    pulseSpeed: Math.random() * 0.025 + 0.008,
                    colorType,
                });
            }
            // Store base velocities
            particles.forEach(p => { p.baseVx = p.vx; p.baseVy = p.vy; });
        };

        const spawnShootingStar = () => {
            const startX = Math.random() * canvas.width * 0.7;
            const startY = Math.random() * canvas.height * 0.4;
            const colors = ['#D946EF', '#06B6D4', '#EAB308', '#22C55E'];
            shootingStars.push({
                x: startX,
                y: startY,
                vx: 4 + Math.random() * 4,
                vy: 1 + Math.random() * 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 1,
                trail: [],
            });
        };

        const drawHexGrid = () => {
            const r = 50; // hex radius
            const w = Math.sqrt(3) * r;
            const h = 2 * r;
            ctx.globalAlpha = 0.025;
            ctx.strokeStyle = '#D946EF';
            ctx.lineWidth = 0.5;

            for (let row = -1; row < canvas.height / (h * 0.75) + 2; row++) {
                for (let col = -1; col < canvas.width / w + 2; col++) {
                    const x = col * w + (row % 2 === 0 ? 0 : w / 2);
                    const y = row * h * 0.75;
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const angle = (Math.PI / 3) * i - Math.PI / 6;
                        const px = x + r * Math.cos(angle);
                        const py = y + r * Math.sin(angle);
                        if (i === 0) ctx.moveTo(px, py);
                        else ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.stroke();
                }
            }
            ctx.globalAlpha = 1;
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw faint hex grid
            drawHexGrid();

            // Update + draw shooting stars
            shootingStarTimer++;
            if (shootingStarTimer > 360 + Math.random() * 240) {
                spawnShootingStar();
                shootingStarTimer = 0;
            }

            shootingStars = shootingStars.filter(s => s.life > 0.02);
            shootingStars.forEach(s => {
                s.trail.push({ x: s.x, y: s.y });
                if (s.trail.length > 12) s.trail.shift();
                s.x += s.vx;
                s.y += s.vy;
                s.life -= 0.018;

                // Draw trail
                s.trail.forEach((pt, i) => {
                    const t = i / s.trail.length;
                    ctx.globalAlpha = t * s.life * 0.7;
                    ctx.fillStyle = s.color;
                    const sz = Math.max(1, t * 2);
                    ctx.fillRect(pt.x, pt.y, sz, sz);
                });
                // Draw head
                ctx.globalAlpha = s.life;
                ctx.fillStyle = '#18181B'; // Dark head for shooting star
                ctx.fillRect(s.x, s.y, 2, 2);
            });

            // Draw connection lines between close particles
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        const alpha = (1 - dist / 100) * 0.15;
                        // Use the color of the brighter/colored particle
                        const pi = particles[i];
                        const pj = particles[j];
                        const c = pi.colorType !== 'white' ? colorMap[pi.colorType] :
                                  pj.colorType !== 'white' ? colorMap[pj.colorType] : '#71717A';
                        ctx.globalAlpha = alpha;
                        ctx.strokeStyle = c;
                        ctx.beginPath();
                        ctx.moveTo(pi.x, pi.y);
                        ctx.lineTo(pj.x, pj.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles with mouse repulsion
            particles.forEach(p => {
                // Mouse repulsion
                const mdx = p.x - mouse.x;
                const mdy = p.y - mouse.y;
                const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                if (mdist < 90 && mdist > 0) {
                    const force = (90 - mdist) / 90;
                    p.vx += (mdx / mdist) * force * 0.6;
                    p.vy += (mdy / mdist) * force * 0.6;
                }

                // Dampen back to base velocity
                p.vx += (p.baseVx - p.vx) * 0.04;
                p.vy += (p.baseVy - p.vy) * 0.04;

                // Clamp speed
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > 3) {
                    p.vx = (p.vx / speed) * 3;
                    p.vy = (p.vy / speed) * 3;
                }

                p.pulse += p.pulseSpeed;
                const twinkle = 0.4 + 0.6 * Math.sin(p.pulse);
                ctx.globalAlpha = p.opacity * twinkle;
                ctx.fillStyle = colorMap[p.colorType];
                ctx.fillRect(p.x, p.y, p.size, p.size);

                // Update
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            });

            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(drawParticles);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        resizeCanvas();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[-1]"
            style={{ background: '#FAFAFA' }}
        />
    );
};

export default BackgroundParticles;
