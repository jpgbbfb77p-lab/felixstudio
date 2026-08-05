import { VirtualCard } from './VirtualCard';

const DOTS = [
  { top: '18%', left: '44%', size: 4, delay: 0   },
  { top: '72%', left: '54%', size: 3, delay: 1   },
  { top: '38%', left: '68%', size: 5, delay: 2   },
  { top: '22%', left: '78%', size: 3, delay: 0.5 },
  { top: '58%', left: '38%', size: 4, delay: 1.5 },
  { top: '82%', left: '72%', size: 3, delay: 2.5 },
  { top: '10%', left: '60%', size: 2, delay: 0.8 },
];

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" style={{ background:'linear-gradient(145deg,#130508 0%,#1A0610 50%,#0F0308 100%)' }}>
      <div style={{ position:'absolute', borderRadius:'50%', width:1000, height:1000, top:-250, right:-180, background:'radial-gradient(circle,rgba(220,38,38,0.28) 0%,transparent 70%)', animation:'orbDrift1 14s ease-in-out infinite' }} />
      <div style={{ position:'absolute', borderRadius:'50%', width:750,  height:750,  bottom:-250, left:'20%', background:'radial-gradient(circle,rgba(185,28,28,0.22) 0%,transparent 70%)', animation:'orbDrift2 11s ease-in-out 3s infinite' }} />
      <div style={{ position:'absolute', borderRadius:'50%', width:550,  height:550,  top:'25%', left:-120, background:'radial-gradient(circle,rgba(153,27,27,0.18) 0%,transparent 70%)', animation:'orbDrift3 16s ease-in-out 6s infinite' }} />
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)', backgroundSize:'64px 64px', animation:'gridShimmer 6s ease-in-out infinite' }} />
      <VirtualCard showContent style={{ width:420, height:264, top:'50%', right:'5%', animation:'cardFloat1 8s ease-in-out infinite' }} />
      <VirtualCard style={{ width:310, height:196, top:'10%', right:'16%', animation:'cardFloat2 10s ease-in-out 2s infinite', transform:'rotate(24deg)' }} opacity={0.55} />
      <VirtualCard style={{ width:360, height:226, bottom:'4%', right:'1%', animation:'cardFloat3 9s ease-in-out 4s infinite', transform:'rotate(-6deg)' }} opacity={0.4} />
      {DOTS.map((d, i) => (
        <div key={i} style={{ position:'absolute', width:d.size, height:d.size, borderRadius:'50%', top:d.top, left:d.left, background:'rgba(239,68,68,0.8)', animation:`dotPulse 3s ease-in-out ${d.delay}s infinite` }} />
      ))}
      <div style={{ position:'absolute', left:0, right:0, top:'48%', height:1, background:'linear-gradient(90deg,transparent,rgba(220,38,38,0.25) 30%,rgba(239,68,68,0.35) 50%,rgba(220,38,38,0.25) 70%,transparent)' }} />
    </div>
  );
}
