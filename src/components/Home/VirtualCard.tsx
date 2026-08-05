import React from 'react';

export function VirtualCard({ style = {}, showContent = false, opacity = 1 }: {
  style?: React.CSSProperties; showContent?: boolean; opacity?: number;
}) {
  return (
    <div 
      className="absolute backdrop-blur-md overflow-hidden"
      style={{
        borderRadius: 20,
        border: '1px solid rgba(220, 38, 38, 0.25)',
        background: 'linear-gradient(135deg, rgba(220,20,20,0.35) 0%, rgba(40,5,5,0.8) 100%)',
        boxShadow: '0 0 40px rgba(220,20,20,0.3), inset 0 0 20px rgba(220,20,20,0.15), 0 20px 40px rgba(0,0,0,0.8)',
        opacity,
        transition: 'transform 500ms ease-out, box-shadow 500ms ease-out, border 500ms ease-out',
        ...style,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.animationPlayState = 'paused';
        el.style.transform = 'translateY(-10px)';
        el.style.border = '1px solid rgba(33, 117, 192, 0.7)';
        el.style.boxShadow = '0 0 30px rgba(33,117,192,0.5), 0 0 70px rgba(33,117,192,0.2), inset 0 0 25px rgba(33,117,192,0.15), 0 30px 60px rgba(0,0,0,0.9)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.animationPlayState = 'running';
        el.style.transform = '';
        el.style.border = '1px solid rgba(220, 38, 38, 0.25)';
        el.style.boxShadow = '0 0 40px rgba(220,20,20,0.3), inset 0 0 20px rgba(220,20,20,0.15), 0 20px 40px rgba(0,0,0,0.8)';
      }}
    >
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,50,50,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,50,50,0.15) 1px,transparent 1px)', backgroundSize:'24px 24px' }} />
      <div style={{ position:'absolute', top:0, left:0, width:'40%', height:'100%', background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)', animation:'shineSweep 4s ease-in-out 2s infinite' }} />
      <div style={{ position:'absolute', borderRadius:'50%', width:200, height:200, top:-80, right:-60, background:'radial-gradient(circle, rgba(220,30,30,0.15) 0%, transparent 70%)', border:'1px solid rgba(255,100,100,0.1)' }} />
      <div style={{ position:'absolute', borderRadius:'50%', width:140, height:140, top:-20, right:-40, background:'radial-gradient(circle, rgba(255,50,50,0.1) 0%, transparent 70%)' }} />
      {showContent && (
        <div style={{ position:'relative', padding:28, height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
            <div style={{ width:40, height:40, borderRadius:10, background:'rgba(255,255,255,0.16)', border:'1px solid rgba(255,255,255,0.22)', display:'flex', alignItems:'center', justifyItems:'center', fontWeight:800, fontSize:18, color:'white', fontFamily:'Inter,sans-serif' }}>F</div>
            <div style={{ textAlign:'right' }}>
              <div style={{ color:'rgba(255,255,255,0.4)', fontSize:9, textTransform:'uppercase', letterSpacing:'0.2em', fontFamily:'Inter,sans-serif' }}>Virtual Card</div>
              <div style={{ color:'white', fontSize:13, fontWeight:600, marginTop:3, fontFamily:'Inter,sans-serif' }}>Felixstudio</div>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <div style={{ width:46, height:32, borderRadius:7, background:'linear-gradient(135deg,#FCD34D,#F59E0B)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(245,158,11,0.4)' }}>
              <div style={{ width:32, height:24, borderRadius:4, border:'1px solid rgba(180,100,0,0.4)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, padding:3 }}>
                {[0,1,2,3].map(i => <div key={i} style={{ background:'rgba(180,100,0,0.3)', borderRadius:2 }} />)}
              </div>
            </div>
            <span style={{ color:'rgba(255,255,255,0.55)', fontSize:13, fontFamily:'monospace', letterSpacing:'0.22em' }}>•••• •••• •••• 4291</span>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
            <div>
              <div style={{ color:'rgba(255,255,255,0.35)', fontSize:9, textTransform:'uppercase', letterSpacing:'0.15em', marginBottom:3, fontFamily:'Inter,sans-serif' }}>Card Holder</div>
              <div style={{ color:'white', fontSize:13, fontWeight:500, fontFamily:'Inter,sans-serif' }}>Felix Studio LLC</div>
            </div>
            <div style={{ textAlign:'right' }}>
              <div style={{ color:'rgba(255,255,255,0.35)', fontSize:9, textTransform:'uppercase', letterSpacing:'0.15em', marginBottom:3, fontFamily:'Inter,sans-serif' }}>Expires</div>
              <div style={{ color:'white', fontSize:13, fontWeight:500, fontFamily:'Inter,sans-serif' }}>12/28</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
