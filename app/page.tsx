'use client';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>

      {/* Hero Banner */}
      <div
        style={{
          textAlign: 'center',
          padding: '60px',
          backgroundImage: 'url(/banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
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
            cursor: 'pointer',
          }}
          onClick={() => (window.location.href = '/contact')}
        >
          Order Online
        </button>
      </div>

      {/* Menu Section */}
      <div
        style={{
          padding: '50px',
          backgroundColor: '#f7f1eb',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#5c4033', marginBottom: '30px' }}>Our Menu</h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {/* Menu Items */}
          {[
            { src: '/cheesesteak.jpg', title: 'Classic Cheesesteak', desc: 'Thinly sliced steak with melted cheese and toasted bread' },
            { src: '/tacos.jpg', title: 'Street Tacos', desc: 'Fresh tortillas with beef, chicken, or pork' },
            { src: '/burger.jpg', title: 'Signature Burger', desc: 'Grilled patty, cheddar cheese, lettuce, and sauce' },
            { src: '/bbqsteak.jpg', title: 'BBQ Steak', desc: 'Grilled steak with smoky BBQ sauce' },
            { src: '/chickentacos.jpg', title: 'Chicken Tacos', desc: 'Soft tortillas with spiced grilled chicken' },
            { src: '/beeftacos.jpg', title: 'Beef Tacos', desc: 'Classic street-style beef tacos with fresh toppings' },
            { src: '/pulledpork.jpg', title: 'Pulled Pork Tacos', desc: 'Slow-cooked pork with tangy sauce and slaw' },
            { src: '/phillyburger.jpg', title: 'Philly Burger', desc: 'Steak-inspired burger with onions and melted cheese' },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '20px',
                width: '220px',
                backgroundColor: '#fff',
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

