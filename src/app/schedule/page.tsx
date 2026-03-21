import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const schedule = [
  { time: "12:00", event: "受付開始" },
  { time: "12:30", event: "挙式 (3F Chapel)" },
  { time: "13:30", event: "披露宴開宴 (2F Rose Hall)" },
  { time: "14:30", event: "お色直し入場" },
  { time: "15:30", event: "お開き" },
];

export default function SchedulePage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '1rem' }}>
        <h2 style={{ color: 'var(--accent)', textAlign: 'center', marginBottom: '1.5rem' }}>Schedule</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {schedule.map((item, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              alignItems: 'center',
              background: 'var(--card-bg)',
              padding: '1rem',
              borderRadius: '12px',
              border: '1px solid var(--card-border)'
            }}>
              <span style={{ 
                fontWeight: 'bold', 
                color: 'var(--accent)', 
                minWidth: '70px' 
              }}>{item.time}</span>
              <div style={{ 
                height: '20px', 
                width: '1px', 
                background: 'var(--card-border)', 
                margin: '0 1rem' 
              }}></div>
              <span style={{ color: 'var(--foreground)' }}>{item.event}</span>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </main>
  );
}