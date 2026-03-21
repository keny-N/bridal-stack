import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function MapPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '1rem', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>Floor Map</h2>
        <div style={{ 
          background: 'var(--card-bg)', 
          border: '1px solid var(--card-border)', 
          borderRadius: '12px', 
          padding: '2rem',
          color: 'var(--text-muted)'
        }}>
          <p>館内図の画像などをここに配置できます。</p>
          <div style={{ marginTop: '2rem', textAlign: 'left' }}>
            <p><strong>2F:</strong> 披露宴会場 (Rose Hall)</p>
            <p><strong>3F:</strong> チャペル / クローク</p>
            <p><strong>1F:</strong> ロビー / カフェ</p>
          </div>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}