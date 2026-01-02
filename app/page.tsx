export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>

      {/* Hero Banner */}
      <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f1faee' }}>
        <h1 style={{ color: '#e63946', fontSize: '3rem' }}>Julia’s Cafe International Food</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Authentic Peruvian flavors in every dish</p>
        <button
          style={{
            backgroundColor: '#e63946',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            marginTop: '20px',
            cursor: 'pointer'
          }}
          onClick={() => window.location.href='/contact'}
        >
          Order Online
        </button>
      </div>

      {/* Menu Section */}
      <div style={{ padding: '50px', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <h2 style={{ color: '#e63946', marginBottom: '30px' }}>Our Menu</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          
          {/* Dish Card 1 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '200px' }}>
            <img src="/lomo.jpg" alt="Lomo Saltado" style={{ width: '100%', borderRadius: '8px' }} />
            <h3>Lomo Saltado</h3>
            <p>Beef stir fry with rice and fries</p>
          </div>

          {/* Dish Card 2 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '200px' }}>
            <img src="/ceviche.jpg" alt="Ceviche" style={{ width: '100%', borderRadius: '8px' }} />
            <h3>Ceviche</h3>
            <p>Fresh fish marinated in citrus</p>
          </div>

          {/* Dish Card 3 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '200px' }}>
            <img src="/pollo.jpg" alt="Pollo a la Brasa" style={{ width: '100%', borderRadius: '8px' }} />
            <h3>Pollo a la Brasa</h3>
            <p>Peruvian-style roasted chicken</p>
          </div>

        </div>
      </div>
    </div>
  )
}

