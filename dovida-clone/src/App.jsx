import React, { useState } from 'react';

const DOVIDA_LOGO = 'https://ext.same-assets.com/3375519255/2598993299.svg';
const HERO_BG = 'https://ext.same-assets.com/3375519255/2819031653.jpeg';
const FIND_IMG = 'https://ext.same-assets.com/3375519255/1214357647.jpeg';
const HOW1 = 'https://ext.same-assets.com/3375519255/252607965.jpeg';
const HOW2 = 'https://ext.same-assets.com/3375519255/1214357647.jpeg';
const HOW3 = 'https://ext.same-assets.com/3375519255/2819031653.jpeg';
const SERVICES = [
  'Companion Care Services', 'Home Help', 'Transport Services', 'Personal Care', 'Hospital to Home',
  'Arthritis Care at Home', 'Dementia Care', 'Disability Care', 'Respite Care', 'Overnight Care',
  '24 Hour Care at Home', 'Palliative Care at Home', 'Care Plan Management', 'Support at Home'
];
const FAQS = [
  {
    q: 'What makes Dovida different from other home care providers?',
    a: 'Our person-centred approach and compassionate team set us apart. We focus on respect, empowerment, and uplifting independent living.'
  },
  {
    q: 'What types of care do you provide?',
    a: 'Dovida offers a wide range of in-home services including companion care, dementia care, disability care, respite, and more.'
  },
  {
    q: 'How do you select and train your caregivers?',
    a: 'All caregivers are carefully vetted and receive ongoing training in both care and person-centred values.'
  },
  {
    q: 'Can I choose my caregiver?',
    a: 'Yes, we match you with the best person for your needs, and your feedback is central to our process.'
  },
  {
    q: 'How do I get started with Dovida?',
    a: 'Contact us to discuss your situation, and we’ll guide you through every step.'
  },
];

function PopupModal({ onClose }) {
  return (
    <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(28,16,14,0.60)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'#fff',padding:'2.5rem 2.5rem 1.5rem 2.5rem',borderRadius:'12px',maxWidth:520,boxShadow:'0 6px 24px rgba(44,32,31,0.11)',textAlign:'center',position:'relative'}}>
        <img src={DOVIDA_LOGO} alt="Dovida" style={{height:55, margin:'0 auto 20px'}} />
        <h2 style={{color:'#3c2826',fontWeight:'600'}}>We are no longer called Home Instead Australia</h2>
        <div style={{color:'#b04d45',margin:'10px 0 0',fontSize:'1.15rem',fontWeight:'600'}}>We are now Dovida!</div>
        <p style={{margin:'10px 0 0', fontSize:'1rem'}}>New Name &bull; Same Quality Care</p>
        <a href="#" style={{display:'inline-block',margin:'18px 0 10px',color:'#b04d45',fontWeight:500}}>Learn more</a>
        <button style={{marginTop:12, width:'120px'}} onClick={onClose}>Continue</button>
        <button aria-label="Close" style={{position:'absolute',top:18,right:20,fontSize:20,background:'none',border:'none',cursor:'pointer',color:'#3c2826'}} onClick={onClose}>&times;</button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header style={{background:'#fff', borderBottom:'1px solid #ececec', padding:'0 36px', display:'flex',alignItems:'center',height:78,position:'sticky',top:0,zIndex:100}}>
      <img src={DOVIDA_LOGO} alt="Dovida Logo" style={{height:48, marginRight:22}} />
      <nav style={{display:'flex',gap:30}}>
        <a href="#" style={{color:'#3c2826',textDecoration:'none',fontWeight:500,fontSize:'1.03rem'}}>About Us</a>
        <a href="#" style={{color:'#3c2826',textDecoration:'none',fontWeight:500,fontSize:'1.03rem'}}>Services</a>
        <a href="#" style={{color:'#3c2826',textDecoration:'none',fontWeight:500,fontSize:'1.03rem'}}>How We Help</a>
        <a href="#" style={{color:'#3c2826',textDecoration:'none',fontWeight:500,fontSize:'1.03rem'}}>FAQs</a>
        <a href="#" style={{color:'#3c2826',textDecoration:'none',fontWeight:500,fontSize:'1.03rem'}}>Contact Us</a>
      </nav>
      <div style={{flex:1}}></div>
      <button style={{background:'#b04d45',marginLeft:16, color:'#fff'}}>Get in touch</button>
    </header>
  );
}

function Hero() {
  return (
    <>
    <h1 className='cover-title'>
    Your life, Your way
    </h1>
    <p style={{
      fontSize: '1.2rem',
      textAlign: 'center',
      fontWeight: 500,
      lineHeight: '1.65',
      fontFamily: '"Times New Roman", Times, serif'
    }}>
    We bring genuine connections and person-centred values to home care
    </p>
    <section style={{
      background: `linear-gradient(to bottom, rgba(60,40,38,.57) 0,rgba(60,40,38,.16) 60%),url(${HERO_BG}) center/cover`,
      color: '#fff',
      minHeight: '400px',
      padding: '68px 0 50px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      boxShadow: 'inset 0 -60px 60px -20px #f9f7f7',
      margin: '6rem'
    }}>
      <div>
        <h1 style={{fontSize:'2.6rem',fontWeight:700, color:'#fff',marginBottom:14,letterSpacing:'-1px'}}>Experience Person-Centred Home Care</h1>
        <h2 style={{fontSize:'1.36rem',fontWeight:400, color:'#fff',marginBottom:0}}>Care that empowers, supports, and uplifts.</h2>
      </div>
    </section>
    </>
  );
}

function FindCare() {
  return (
    <section style={{display:'flex',alignItems:'center',justifyContent:'center',background:'#fcf8f6',padding:'54px 0 30px 0',gap:42}}>
      <div style={{maxWidth:450}}>
        <h2 style={{color:'#b04d45',fontSize:'2rem',fontWeight:600,marginBottom:12}}>Find Home Care Near You</h2>
        <p style={{margin:'8px 0 18px 0',fontSize:'1.08rem',color:'#3c2826'}}>Enter your city or postcode to find your nearest Dovida office.</p>
        <div style={{display:'flex',gap:8,marginBottom:8}}>
          <input type="text" placeholder="Enter postcode, city, region" style={{flex:1,padding:'11px 13px',borderRadius:'8px',border:'1px solid #c7ab9b',fontSize:'1rem'}} />
          <button style={{minWidth:42,background:'#b04d45',color:'#fff',borderRadius:'8px'}}>🔍</button>
        </div>
        <small style={{color:'#a29c93'}}>We currently serve 470+ local areas</small>
      </div>
      <div style={{maxWidth:300}}>
        <img src={FIND_IMG} alt="Find Care" style={{width:'100%',borderRadius:'13px',boxShadow:'0 1px 10px #deccc4',objectFit:'cover'}} />
      </div>
    </section>
  );
}

function HowHelp() {
  return (
    <section style={{padding:'60px 0 22px 0',background:'#fff',width:'100%'}}>
      <h2 style={{textAlign:'center',fontSize:'2rem',fontWeight:600}}>How Can We Help You?</h2>
      <div style={{display:'flex',justifyContent:'center',gap:40,marginTop:32,flexWrap:'wrap'}}>
        <div style={{width:285,background:'#fcf8f6',borderRadius:12,overflow:'hidden',boxShadow:'0 1.5px 12px #efe8e5'}}>
          <img src={HOW1} alt="Care for Seniors" style={{width:'100%',height:130,objectFit:'cover'}} />
          <div style={{padding:16}}>
            <strong>Care for Seniors</strong>
            <p style={{margin:'7px 0 0 0',fontSize:'1rem',color:'#3c2826'}}>Our person-centred care services are gentle and supportive. Designed to suit your needs.</p>
          </div>
        </div>
        <div style={{width:285,background:'#fcf8f6',borderRadius:12,overflow:'hidden',boxShadow:'0 1.5px 12px #efe8e5'}}>
          <img src={HOW2} alt="Specialist Support" style={{width:'100%',height:130,objectFit:'cover'}} />
          <div style={{padding:16}}>
            <strong>Specialist In-Home Support</strong>
            <p style={{margin:'7px 0 0 0',fontSize:'1rem',color:'#3c2826'}}>Contact your local Dovida office to understand the full range of care we offer.</p>
          </div>
        </div>
        <div style={{width:285,background:'#fcf8f6',borderRadius:12,overflow:'hidden',boxShadow:'0 1.5px 12px #efe8e5'}}>
          <img src={HOW3} alt="Become a Caregiver" style={{width:'100%',height:130,objectFit:'cover'}} />
          <div style={{padding:16}}>
            <strong>Become a Caregiver</strong>
            <p style={{margin:'7px 0 0 0',fontSize:'1rem',color:'#3c2826'}}>Make a difference with us. Find out more about our considered approach and recruitment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section style={{background:'#f9f7f7',padding:'56px 0 38px'}}>
      <h2 style={{textAlign:'center',marginBottom:34,fontWeight:600}}>Why Choose Dovida?</h2>
      <p style={{textAlign:'center',color:'#795b50',maxWidth:530,margin:'0 auto 30px'}}>We deliver home care that empowers you to live your life, your way.</p>
      <div style={{display:'flex',justifyContent:'center',gap:49,maxWidth:820,margin:'0 auto'}}>
        <div style={{flex:1,minWidth:180,textAlign:'center'}}>
          <div style={{height:46,marginBottom:10}}><span role="img" aria-label="Supportive">🏠</span></div>
          <strong style={{color:'#b04d45'}}>Supportive</strong>
          <p style={{color:'#3c2826',fontSize:'0.97rem',marginTop:6}}>Authenticity, respect and compassion are at the heart of everything we do.</p>
        </div>
        <div style={{flex:1,minWidth:180,textAlign:'center'}}>
          <div style={{height:46,marginBottom:10}}><span role="img" aria-label="Empowering">🤝</span></div>
          <strong style={{color:'#b04d45'}}>Empowering</strong>
          <p style={{color:'#3c2826',fontSize:'0.97rem',marginTop:6}}>We bring communities together to maximise your potential.</p>
        </div>
        <div style={{flex:1,minWidth:180,textAlign:'center'}}>
          <div style={{height:46,marginBottom:10}}><span role="img" aria-label="Uplifting">❤️</span></div>
          <strong style={{color:'#b04d45'}}>Uplifting</strong>
          <p style={{color:'#3c2826',fontSize:'0.97rem',marginTop:6}}>We enhance lives through person-centred care that promotes your independence.</p>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section style={{padding:'66px 0 44px 0',background:'#fff'}}>
      <h2 style={{textAlign:'center',marginBottom:36,fontWeight:600}}>Our Services</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(238px,1fr))',gap:'19px',maxWidth:950,margin:'0 auto'}}>
        {SERVICES.map((name, i) => (
          <div key={i} style={{background:'#fcf8f6',borderRadius:11,padding:'23px 24px 16px',boxShadow:'0 1.5px 9px #efe8e5',minHeight:82,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <span style={{color:'#3c2826',fontWeight:600,fontSize:'1.13rem'}}>{name}</span>
            <a href="#" style={{color:'#b04d45',marginTop:7,textDecoration:'underline',fontWeight:500,fontSize:'0.98rem'}}>Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function InfoPanels() {
  return (
    <section style={{background:'#fcf8f6',padding:'56px 0 8px'}}>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:38}}>
        <div style={{background:'#f9f7f7',borderRadius:'10px',padding:'32px 34px',maxWidth:395,flex:'1 1 380px',boxShadow:'0 1.5px 10px #ece3db'}}>
          <h3 style={{color:'#b04d45',marginBottom:12,fontWeight:600}}>Discover the Circle of Care Philosophy</h3>
          <p style={{fontSize:'1.09rem',color:'#795b50'}}>We create a Circle of Care with you, your family, and your team, empowering you to live your life, your way.</p>
          <button style={{margin:'16px 0 0'}}>Read more</button>
        </div>
        <div style={{background:'#f9f7f7',borderRadius:'10px',padding:'32px 34px',maxWidth:395,flex:'1 1 380px',boxShadow:'0 1.5px 10px #ece3db'}}>
          <h3 style={{color:'#b04d45',marginBottom:12,fontWeight:600}}>Why Choose Home Care?</h3>
          <p style={{fontSize:'1.09rem',color:'#795b50'}}>Deciding whether to stay at home or move somewhere new while managing care needs can feel overwhelming. Here are some things to help you choose.</p>
          <button style={{margin:'16px 0 0'}}>Read more</button>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section style={{padding:'56px 0 10px',background:'#fff'}}>
      <h2 style={{textAlign:'center',marginBottom:17,fontWeight:600}}>Frequently Asked Questions</h2>
      <p style={{textAlign:'center',color:'#795b50',marginBottom:34}}>Contact us if you have more questions about Dovida</p>
      <div style={{maxWidth:720,margin:'0 auto',borderTop:'1px solid #e1dad7'}}>
        {FAQS.map((f, idx) => (
          <div key={idx} style={{borderBottom:'1px solid #e1dad7',padding:'0',background:'#fff'}}>
            <button style={{width:'100%',background:'none',border:'none',textAlign:'left',padding:'18px 16px',fontSize:'1.04rem',fontWeight:500,display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',color:'#3c2826'}} onClick={()=>setOpen(open===idx?null:idx)}>
              {f.q}
              <span style={{fontWeight:700,color:'#b04d45',fontSize:19}}>{open===idx?'-':'+'}</span>
            </button>
            {open===idx && (
              <div style={{padding:'0 18px 15px 36px',fontSize:'0.98rem',color:'#795b50',animation:'fadeIn .2s'}}> {f.a} </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{background:'#3c2826',color:'#fff',padding:'40px 0 0 0',minHeight:150,marginTop:54}}>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:45,maxWidth:1200,margin:'0 auto',padding:'0 20px'}}>
        <div style={{minWidth:210}}>
          <img src={DOVIDA_LOGO} alt="Dovida Logo" style={{height:38,marginBottom:18,filter:'brightness(0) invert(1)'}} />
          <div style={{fontSize:'0.97rem',marginBottom:7}}><b>National Address</b></div>
          <div style={{fontSize:'0.97rem',marginBottom:7}}>405 Connaughton Drive, Level 3, Toowoomba QLD 4346</div>
          <a href="#" style={{color:'#fff',textDecoration:'underline'}}>Contact local office</a>
        </div>
        <div style={{minWidth:180}}>
          <div style={{marginBottom:10,fontWeight:600}}>Company</div>
          <div><a href="#" style={{color:'#fff'}}>Our Services</a></div>
          <div><a href="#" style={{color:'#fff'}}>Jobs & Careers</a></div>
          <div><a href="#" style={{color:'#fff'}}>About us</a></div>
          <div><a href="#" style={{color:'#fff'}}>News</a></div>
        </div>
        <div style={{minWidth:210}}>
          <div style={{marginBottom:10,fontWeight:600}}>More to explore</div>
          <div><a href="#" style={{color:'#fff'}}>Victorian Care</a></div>
          <div><a href="#" style={{color:'#fff'}}>Business Opportunities</a></div>
        </div>
      </div>
      <div style={{marginTop:45,padding:'0 18px',fontSize:'0.95rem',borderTop:'1px solid #cabebe',paddingTop:18,display:'flex',justifyContent:'space-between',color:'#cabebe'}}>
        <span>© 2025 Dovida. All rights reserved.</span>
        <span>
          <a href="#" style={{color:'#fff',marginRight:22}}>Privacy Policy</a>
          <a href="#" style={{color:'#fff'}}>Cookie Settings</a>
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className="dovida-app">
      {modalOpen && <PopupModal onClose={()=>setModalOpen(false)} />}
      <Header />
      <Hero />
      <FindCare />
      <HowHelp />
      <WhyChoose />
      <ServicesGrid />
      <InfoPanels />
      <FAQ />
      <Footer />
    </div>
  );
}
