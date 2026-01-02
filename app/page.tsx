'use client'; // must be first line

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>

      {/* Hero Banner */}
      <div style={{
        textAlign: 'center',
        padding: '60px',
        backgroundImage: 'url(/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px #000' }}>
          Prados Cheesesteak & Tacos 1
        </h1>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', textShadow: '1px 1px #000' }}>
          Juicy steaks, fresh tacos, and flavorful eats!
        </p>
        <button
          style={{
            backgroundColor: '#8b5e3c',
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
      <div style={{ padding: '50px', backgroundColor: '#f7f1eb', textAlign: 'center' }}>
        <h2 style={{ color: '#5c4033', marginBottom: '30px' }}>Our Menu</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>

          {/* Menu Item 1 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '220px', backgroundColor: '#fff' }}>
            <img src="/cheesesteak.jpg" alt="Classic Cheesesteak" style={{ width: '100%', borderRadius: '8px' }} />
            <h3>Classic Cheesesteak</h3>
            <p>Thinly sliced steak with melted cheese and toasted bread</p>
          </div>

          {/* Menu Item 2 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '220px', backgroundColor: '#fff' }}>
            <img src="/tacos.jpg" alt="Street Tacos" style={{ width: '100%', borderRadius: '8px' }} />
            <h3>Street Tacos</h3>
            <p>Fresh tortillas with beef, chicken, or pork</p>
          </div>

          {/* Menu Item 3 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '220px', backgroundColor: '#fff' }}>
            <img src="/burger.jpg" alt="Signature Burger" style={{ width: '100%', borderRadius: '8px' }} />
            <h3>Signature Burger</h3>
            <p>Grilled patty, cheddar cheese, lettuce, and sauce</p>
          </div>

          {/* Menu Item 4 */}
          <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '220px', backgroundColor: '#fff' }}>

