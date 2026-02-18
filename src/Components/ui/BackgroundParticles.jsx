import { useEffect, useRef } from 'react';

const BackgroundParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            // Much more particles for a rich starfield
            const particleCount = Math.floor(window.innerWidth * 0.25);

            for (let i = 0; i < particleCount; i++) {
                // Mix of green-tinted and pure white particles
                const isGreen = Math.random() < 0.15;
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2.5 + 0.3,
                    speedX: (Math.random() - 0.5) * 0.3,
                    speedY: (Math.random() - 0.5) * 0.3,
                    opacity: Math.random() * 0.7 + 0.15,
                    pulse: Math.random() * Math.PI * 2, // For twinkling
                    pulseSpeed: Math.random() * 0.02 + 0.005,
                    isGreen,
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                // Twinkle effect
                p.pulse += p.pulseSpeed;
                const twinkle = 0.5 + 0.5 * Math.sin(p.pulse);
                const alpha = p.opacity * twinkle;

                ctx.beginPath();
                ctx.globalAlpha = alpha;
                ctx.fillStyle = p.isGreen ? '#00F050' : '#ffffff';
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Subtle glow on larger particles
                if (p.size > 1.5) {
                    ctx.beginPath();
                    ctx.globalAlpha = alpha * 0.15;
                    ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Update position
                p.x += p.speedX;
                p.y += p.speedY;

                // Wrap around screen
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            });

            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(drawParticles);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[-1]"
            style={{ background: '#0a0a0a' }}
        />
    );
};

export default BackgroundParticles;
