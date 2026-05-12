import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Terminal, Cpu, Wifi, Zap } from 'lucide-react';
import { identity } from '../config/identity';

const TYPED_STRINGS = [
  'Systems Engineer',
  'Backend Architect',
  'Security Researcher',
  'Automation Specialist',
  'C++ Developer',
  'AI Tooling Engineer',
  'Optimization Expert'
];

function useTyped(strings, speed = 80, pause = 1800) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    const currentString = strings[idx % strings.length];

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setIdx((prev) => prev + 1);
      } else {
        timeoutId = setTimeout(() => {
          setText(text.slice(0, -1));
        }, speed / 2);
      }
    } else {
      if (text === currentString) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      } else {
        timeoutId = setTimeout(() => {
          setText(currentString.slice(0, text.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, idx, strings, speed, pause]);

  return text;
}

function StatBadge({ icon: Icon, label, value, color = 'var(--color-primary)' }) {
  return (
    <div style={{
      display:'flex',flexDirection:'column',gap:'6px',padding:'18px 24px',
      background:'var(--color-bg-card)',border:`1px solid var(--color-border-dim)`,borderRadius:'16px',
      backdropFilter:'blur(20px)',minWidth:'120px',transition:'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',cursor:'default',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
    }}
      onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--color-border-bright)';e.currentTarget.style.boxShadow=`0 0 30px ${color}20`;e.currentTarget.style.transform='translateY(-4px)';}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--color-border-dim)';e.currentTarget.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)';e.currentTarget.style.transform='translateY(0)';}}
    >
      <Icon size={18} color={color} style={{opacity:0.9}}/>
      <span style={{fontSize:'1.6rem',fontWeight:800,color,fontFamily:"var(--font-mono)",lineHeight:1,marginTop:'4px'}}>{value}</span>
      <span style={{fontSize:'0.65rem',color:'var(--color-text-dim)',letterSpacing:'0.1em',textTransform:'uppercase',fontWeight:600}}>{label}</span>
    </div>
  );
}

function BootLogs() {
  const [logs, setLogs] = useState([]);
  const allLogs = [
    'Initializing Systems...',
    'Loading Kernel Modules...',
    'Establishing Secure Link...',
    'Scanning Network Assets...',
    'Compiling Asset Manifest...',
    'Optimizing Render Engine...',
    'Handshaking with API...',
    'System Ready.'
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < allLogs.length) {
        setLogs(prev => [...prev, allLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'absolute', bottom: '40px', right: '40px',
      width: '240px', padding: '12px',
      background: 'rgba(6,22,38,0.6)', border: '1px solid rgba(0,255,231,0.1)',
      borderRadius: '8px', backdropFilter: 'blur(8px)',
      fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem',
      color: 'rgba(0,255,231,0.5)', textAlign: 'left',
      zIndex: 5, pointerEvents: 'none'
    }} className="hero-boot-logs animate-fadeIn delay-700">
      <div style={{ marginBottom: '6px', opacity: 0.3, fontSize: '0.55rem' }}>TERMINAL_BOOT_LOG_V2.01</div>
      {logs.map((log, i) => (
        <div key={i} style={{ marginBottom: '2px' }}>
          <span style={{ color: '#00ffe7', opacity: 0.8 }}>[OK]</span> {log}
        </div>
      ))}
      {logs.length === allLogs.length && (
        <div style={{ marginTop: '4px', color: 'var(--color-accent)', animation: 'flicker 2s infinite' }}>
          {'>'} LISTENING_FOR_INPUT
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const typedText = useTyped(TYPED_STRINGS);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let nodes = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      nodes = Array.from({length:40}, () => ({
        x:Math.random()*canvas.width, y:Math.random()*canvas.height,
        vx:(Math.random()-0.5)*0.4, vy:(Math.random()-0.5)*0.4, r:Math.random()*2+1,
      }));
    };
    resize();
    window.addEventListener('resize', resize);
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      nodes.forEach(n => {
        n.x+=n.vx; n.y+=n.vy;
        if(n.x<0||n.x>canvas.width) n.vx*=-1;
        if(n.y<0||n.y>canvas.height) n.vy*=-1;
        ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
        ctx.fillStyle='rgba(0,255,231,0.5)'; ctx.fill();
      });
      for(let i=0;i<nodes.length;i++) for(let j=i+1;j<nodes.length;j++) {
        const dx=nodes[i].x-nodes[j].x, dy=nodes[i].y-nodes[j].y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<140){
          ctx.beginPath(); ctx.moveTo(nodes[i].x,nodes[i].y); ctx.lineTo(nodes[j].x,nodes[j].y);
          ctx.strokeStyle=`rgba(0,255,231,${0.15*(1-dist/140)})`; ctx.lineWidth=0.7; ctx.stroke();
        }
      }
      animId=requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize',resize); };
  }, []);

  return (
    <section id="home" style={{
      position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',
      overflow:'hidden',background:'radial-gradient(circle at 50% 50%, #0a111a 0%, #050a0f 100%)',
    }}>
      <canvas ref={canvasRef} style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.6}}/>
      <div style={{position:'absolute',top:'40%',left:'50%',transform:'translate(-50%,-50%)',width:'600px',height:'600px',
        background:'radial-gradient(circle,rgba(0,255,231,0.07) 0%,transparent 70%)',pointerEvents:'none'}}/>
      <div className="cyber-grid" style={{position:'absolute',inset:0,opacity:0.3}}/>

      <div style={{position:'relative',zIndex:10,textAlign:'center',padding:'120px 24px 80px',maxWidth:'900px',margin:'0 auto'}}>
        {/* Status badge */}
        <div className="animate-fadeInUp" style={{marginBottom:'28px'}}>
          <span style={{
            display:'inline-flex',alignItems:'center',gap:'8px',padding:'6px 18px',
            border:'1px solid rgba(0,255,231,0.3)',borderRadius:'20px',
            fontFamily:"'Share Tech Mono',monospace",fontSize:'0.72rem',letterSpacing:'0.2em',
            textTransform:'uppercase',color:'#00ffe7',background:'rgba(0,255,231,0.05)',
          }}>
            <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#39ff14',
              boxShadow:'0 0 8px #39ff14',animation:'glow-pulse 1.5s ease-in-out infinite',display:'inline-block'}}/>
            STATUS: BUILDING DAILY — 2026
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-fadeInUp delay-100" style={{fontSize:'clamp(3.5rem,10vw,8rem)',fontWeight:900,lineHeight:0.9,marginBottom:'16px',letterSpacing:'-0.03em'}}>
          <span style={{
            color:'var(--color-primary)',
            display:'block',
            textShadow:'0 0 40px var(--color-primary-glow)',
            animation:'glow-pulse 3s ease-in-out infinite',
            background: 'linear-gradient(to bottom, #fff 0%, var(--color-primary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 20px var(--color-primary-glow))'
          }}>
            {identity.developerName}
          </span>
        </h1>

        {/* Typed */}
        <div className="animate-fadeInUp delay-200" style={{height:'42px',marginBottom:'24px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:'clamp(1rem,2.5vw,1.35rem)',color:'rgba(200,216,232,0.75)',letterSpacing:'0.05em'}}>
            {'>'}&nbsp;<span style={{color:'#00ffe7'}}>{typedText}</span>
            <span style={{display:'inline-block',width:'2px',height:'1.2em',background:'#00ffe7',marginLeft:'2px',verticalAlign:'middle',animation:'blink-cursor 0.8s ease-in-out infinite'}}/>
          </span>
        </div>

        {/* Tagline */}
        <p className="animate-fadeInUp delay-300" style={{fontSize:'1.05rem',color:'var(--color-text-dim)',maxWidth:'540px',margin:'0 auto 48px',lineHeight:1.7,fontWeight:300}}>
          {identity.tagline}.<br/>
          I engineer production-grade tools — from kernel-level C++ to hardened backend APIs.
          Security, performance, and real delivery. Shipped, not just planned.
        </p>

        {/* CTAs */}
        <div className="animate-fadeInUp delay-400" style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap',marginBottom:'72px'}}>
          <a href="#projects" className="btn-neon-solid" style={{
            padding:'14px 32px',borderRadius:'10px',fontFamily:"'Share Tech Mono',monospace",fontSize:'0.85rem',
            letterSpacing:'0.08em',textTransform:'uppercase',textDecoration:'none',
            display:'inline-flex',alignItems:'center',gap:'8px'
          }}>
            <Zap size={16}/> View Projects
          </a>
          <a href="#contact" className="btn-neon" style={{
            padding:'14px 32px',borderRadius:'10px',fontFamily:"'Share Tech Mono',monospace",fontSize:'0.85rem',
            letterSpacing:'0.08em',textTransform:'uppercase',textDecoration:'none',
            display:'inline-flex',alignItems:'center',gap:'8px'
          }}>
            <Terminal size={16}/> Contact
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fadeInUp delay-500" style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
          <StatBadge icon={Terminal} label="Projects" value="6+" color="var(--color-primary)"/>
          <StatBadge icon={Cpu} label="Stack" value="12+" color="var(--color-secondary)"/>
          <StatBadge icon={Zap} label="Uptime" value="99.9%" color="var(--color-accent)"/>
          <StatBadge icon={Wifi} label="Network" value="LIVE" color="#00aaff"/>
        </div>
      </div>

      <BootLogs />

      <a href="#projects" style={{
        position:'absolute',bottom:'32px',left:'50%',transform:'translateX(-50%)',
        display:'flex',flexDirection:'column',alignItems:'center',gap:'6px',
        color:'rgba(0,255,231,0.4)',textDecoration:'none',animation:'float 2.5s ease-in-out infinite',transition:'color 0.3s ease',
      }}
        onMouseEnter={e=>e.currentTarget.style.color='rgba(0,255,231,0.8)'}
        onMouseLeave={e=>e.currentTarget.style.color='rgba(0,255,231,0.4)'}
      >
        <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:'0.65rem',letterSpacing:'0.2em',textTransform:'uppercase'}}>Scroll</span>
        <ArrowDown size={18}/>
      </a>
    </section>
  );
}
