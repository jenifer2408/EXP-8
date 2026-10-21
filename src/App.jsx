import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';

const departments = {
  Cardiology: {
    image: 'https://eozxehncj7g.exactdn.com/wp-content/uploads/2025/04/Cardiology-Banner.jpg',
    text: 'Our Cardiology department provides specialized care for heart and cardiovascular conditions.',
    doctors: [['Dr. Shyam','Cardiologist','10 AM - 2 PM',[1,3,5]],['Dr. Arun','Cardiologist','2 PM - 6 PM',[2,4,6]],['Dr. Meera','Cardiologist','9 AM - 1 PM',[1,2,3,4,5]]]
  },
  Dermatology: {
    image: 'https://cdn.prod.website-files.com/631e26f79f2c5af80112309a/66deb4823aa0e10bda315614_dermatology.webp',
    text: 'Our Dermatology department provides expert care for skin, hair, and related conditions.',
    doctors: [['Dr. Shilpa','Dermatologist','11 AM - 6 PM',[1,3,5]],['Dr. Priya','Dermatologist','9 AM - 1 PM',[2,4,6]],['Dr. Kavya','Dermatologist','2 PM - 6 PM',[1,2,4,5]]]
  },
  Orthopedics: {
    image: 'https://www.dashospital.com/resources/assets/images/department-img/orthopedics-dept.jpg',
    text: 'Our Orthopedics department provides specialized care for bones, joints, muscles, and sports injuries.',
    doctors: [['Dr. Arjun','Orthopedic','2 PM - 6 PM',[1,3,5]],['Dr. Rahul','Orthopedic','10 AM - 3 PM',[2,4,6]],['Dr. Kiran','Orthopedic','9 AM - 1 PM',[1,2,3,4,5]]]
  },
  Pediatrics: {
    image: 'https://www.satnamhospital.com/images/doctor-doing-their-work-pediatrics-office.jpg',
    text: 'Our Pediatrics department provides caring medical services for infants, children, and adolescents.',
    doctors: [['Dr. Ram','Pediatrician','9 AM - 1 PM',[1,3,5]],['Dr. Meena','Pediatrician','2 PM - 6 PM',[2,4,6]],['Dr. Divya','Pediatrician','10 AM - 3 PM',[1,2,3,4,5]]]
  },
  'General Medicine': {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaH6VmwP4sv11ooBUDw_P3VBy2b7A34ZR5Cfr4r7k5A8EFmEPEyKNlOM&s=10',
    text: 'Our General Medicine department provides comprehensive care for common illnesses and preventive healthcare.',
    doctors: [['Dr. Anitha','General Physician','9 AM - 1 PM',[1,3,5]],['Dr. Suresh','General Physician','2 PM - 6 PM',[2,4,6]],['Dr. Nisha','General Physician','10 AM - 3 PM',[1,2,3,4,5]]]
  }
};

function Header({ comfort, setComfort }) {
  const [today] = useState(new Date().toDateString());
  const [imageText, setImageText] = useState('Our hospital provides expert consultation and modern healthcare facilities.');
  return <>
    <header>
      <h1 id="title">CarePulse</h1>
      <p>
<b>Healthcare &amp; Appointment Booking System</b>
</p>
      <p>Welcome to CarePulse. Find the right doctor, explore departments, and book your appointment easily.</p>
      <nav className="navbar">
        <a href="#aboutSection">About</a>
<a href="#servicesSection">Services</a>
<a href="#bookingGuide">How to Book</a>
<a href="#consultationSection">Consultation</a>
<a href="#locationSection">Location</a>
<Link to="/register">Patient Registration</Link>
      </nav>
      <div id="hospitalImageBox">
        <img className="hospital-image" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d" alt="Hospital" onMouseOver={() => setImageText('CarePulse provides trusted healthcare services.')} onMouseOut={() => setImageText('Our hospital provides expert consultation and modern healthcare facilities.')} />
        <p id="imageMsg">{imageText}</p>
      </div>
      <div id="mottoContainer">
<p id="motto">Your Health, Our Priority — Caring for You Every Step of the Way.</p>
</div>
      <p id="todayDate">Appointments available today: {today}</p>
      <button id="comfortButton" onClick={() => setComfort(!comfort)} title="Comfort Mode">☾</button>
    </header>
<hr />
  </>;
}

function HomeSections() {
  return <>
    <section className="box" id="aboutSection">
<h2>About Us</h2>
<p>CarePulse is a healthcare and appointment booking system designed to make accessing medical care simple and organized.</p>
<p>Patients can explore departments, view doctors, select available dates and times, and book appointments.</p>
</section>
    <section className="box" id="servicesSection">
<h2>Our Services</h2>
<div className="service-container">
      <div className="service-card">
<h3>Primary &amp; General Consultation</h3>
<p>Routine medical examinations and preventive healthcare.</p>
</div>
      <div className="service-card">
<h3>Specialized Medical Care</h3>
<p>Expert care in different medical departments.</p>
</div>
      <div className="service-card">
<h3>Telehealth &amp; Virtual Care</h3>
<p>Connect with doctors through online consultation.</p>
</div>
      <div className="service-card">
<h3>Diagnostics &amp; Imaging</h3>
<p>Access diagnostic and imaging services.</p>
</div>
    </div>
</section>
    <section className="box" id="bookingGuide">
<h2>How to Book an Appointment</h2>
<div className="booking-steps">
      <div className="booking-step">
<div className="step-number">1</div>
<h3>Choose Consultation Mode</h3>
<p>Select In-Person, Telehealth or Home Visit.</p>
</div>
      <div className="booking-step">
<div className="step-number">2</div>
<h3>Select Department &amp; Doctor</h3>
<p>Choose your department and preferred doctor.</p>
</div>
      <div className="booking-step">
<div className="step-number">3</div>
<h3>Enter Details &amp; Confirm</h3>
<p>Enter details, date, time and confirm.</p>
</div>
    </div>
</section>

  </>;
}

function Consultation({ onChooseMode }) {
  return <section id="homePage" className="box">
<h2 id="consultationSection">Choose Your Preferred Mode of Consultation</h2>
<p>
<b>Select how you would like to receive your healthcare.</b>
</p>
<div className="consultation-container">
    <div className="consultation-card">
<h3>🏥 In-Person Appointment</h3>
<p>Visit our hospital and consult your preferred doctor in person.</p>
<button onClick={() => onChooseMode('In-Person')}>Choose In-Person</button>
</div>
    <div className="consultation-card">
<h3>💻 Telehealth</h3>
<p>Connect with your doctor remotely through an online consultation.</p>
<button onClick={() => onChooseMode('Telehealth')}>Choose Telehealth</button>
</div>
    <div className="consultation-card">
<h3>🏠 Home Visit</h3>
<p>Request a healthcare professional to provide consultation at your home.</p>
<button onClick={() => onChooseMode('Home Visit')}>Choose Home Visit</button>
</div>
  </div>
</section>;
}

function Registration() {
  const [form, setForm] = useState({name:'',email:'',password:'',age:'',mobile:'',gender:'',state:''});
  const [submitted, setSubmitted] = useState(false);
  const change = e => { setForm(p => ({...p,[e.target.name]:e.target.value})); setSubmitted(false); };
  const errors = {
    name: !/^[A-Za-z ]+$/.test(form.name.trim()),
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    password: !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password),
    age: !/^\d+$/.test(form.age) || Number(form.age)<18 || Number(form.age)>30,
    mobile: !/^\d{10}$/.test(form.mobile)
  };
  const valid = form.name.trim()!=='' && !errors.name && form.email!=='' && !errors.email && form.password!=='' && !errors.password && form.age!=='' && !errors.age && !errors.mobile && form.gender!=='' && form.state!=='';
  return (
    <main
      className="container"
      style={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 16px",
        boxSizing: "border-box",
        width: "100%"
      }}
    >
      <section
        className="box registration-card"
        style={{
          width: "100%",
          maxWidth: "460px",
          margin: "0 auto",
          boxSizing: "border-box"
        }}
      >
   <h2>Patient Registration</h2>
<p>Register with CarePulse to continue to appointment booking.</p>
<form noValidate onSubmit={e=>{e.preventDefault();if(valid)setSubmitted(true);}}>
    <label>Full Name</label>
<input name="name" value={form.name} onChange={change} placeholder="Enter your name" required />{form.name && errors.name && <small>Name must contain letters and spaces only.</small>}
    <label>Email Address</label>
<input type="email" name="email" value={form.email} onChange={change} placeholder="Enter your email" required />{form.email && errors.email && <small>Enter a valid email address.</small>}
    <label>Password</label>
<input type="password" name="password" value={form.password} onChange={change} placeholder="Minimum 8 characters" required />{form.password && errors.password && <small>Use uppercase, lowercase, a number and at least 8 characters.</small>}
    <label>Age</label>
<input type="number" name="age" value={form.age} onChange={change} placeholder="Age (18–30)" required />{form.age && errors.age && <small>Age must be between 18 and 30.</small>}
    <label>Mobile Number</label>
<input type="tel" name="mobile" value={form.mobile} onChange={change} placeholder="10-digit mobile number" maxLength="10" required />{form.mobile && errors.mobile && <small>Enter exactly 10 digits.</small>}
    <label>Gender</label>
<select name="gender" value={form.gender} onChange={change} required>
<option value="">Select gender</option>
<option>Male</option>
<option>Female</option>
<option>Other</option>
</select>{!form.gender && <small className="hint">Please select a gender.</small>}
    <label>State</label>
<select name="state" value={form.state} onChange={change} required>
<option value="">Select state</option>
<option>Tamil Nadu</option>
<option>Kerala</option>
<option>Karnataka</option>
<option>Andhra Pradesh</option>
</select>{!form.state && <small className="hint">Please select a state.</small>}
    <button type="submit" disabled={!valid}>Submit Registration</button>{submitted && <p className="success">Registration completed successfully!</p>}
  </form>
      </section>
    </main>
  );
}

const portalStyles = {
  page: { minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px', background: 'linear-gradient(135deg, #eaf5ff 0%, #f7fbff 55%, #dff3f2 100%)', fontFamily: 'Arial, sans-serif' },
  card: { width: 'min(100%, 480px)', boxSizing: 'border-box', background: '#fff', borderRadius: '24px', padding: 'clamp(24px, 5vw, 42px)', boxShadow: '0 18px 55px rgba(20, 78, 125, .14)', textAlign: 'center' },
  logo: { width: '68px', height: '68px', display: 'grid', placeItems: 'center', margin: '0 auto 14px', borderRadius: '20px', background: '#e6f3ff', color: '#1475c9', fontSize: '34px' },
  title: { color: '#145b91', fontSize: 'clamp(32px, 7vw, 44px)', margin: '8px 0' },
  muted: { color: '#587184', lineHeight: 1.7 },
  primary: { display: 'block', width: '100%', boxSizing: 'border-box', padding: '13px 18px', borderRadius: '10px', border: '1px solid #1677c8', background: '#1677c8', color: '#fff', fontWeight: 700, textDecoration: 'none', cursor: 'pointer', marginTop: '12px' },
  secondary: { display: 'block', width: '100%', boxSizing: 'border-box', padding: '13px 18px', borderRadius: '10px', border: '1px solid #1677c8', background: '#fff', color: '#1677c8', fontWeight: 700, textDecoration: 'none', cursor: 'pointer', marginTop: '12px' },
  field: { width: '100%', boxSizing: 'border-box', padding: '12px', margin: '6px 0 14px', border: '1px solid #cad8e4', borderRadius: '9px', fontSize: '15px' },
  label: { display: 'block', textAlign: 'left', fontWeight: 600, color: '#25465d' }
};

function WelcomePage() {
  return <main style={portalStyles.page}>
<section style={portalStyles.card}>
    <div style={portalStyles.logo} aria-hidden="true">♥</div>
    <h1 style={portalStyles.title}>CarePulse</h1>
    <p style={{color:'#145b91',fontWeight:700}}>Healthcare &amp; Appointment Booking System</p>
    <p style={portalStyles.muted}>Your Health, Our Priority — Caring for You Every Step of the Way.</p>
    <p style={{...portalStyles.muted, marginTop:24}}>Welcome! Sign in to continue, or create a patient account to get started.</p>
    <Link to="/login" style={portalStyles.primary}>Login</Link>
    <Link to="/register" style={portalStyles.secondary}>Create Patient Account</Link>
    <p style={{...portalStyles.muted,fontSize:12,marginTop:24}}>Find the right doctor. Explore departments. Book with confidence.</p>
  </section>
</main>;
}

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const submit = e => {
    e.preventDefault();
    if (!email.trim() || !password) { setMessage('Please enter your email and password.'); return; }
    setMessage('Demo login only. Connect a backend to verify patient accounts securely.');
  };
  return <main style={portalStyles.page}>
<section style={portalStyles.card}>
    <Link to="/" style={{display:'inline-block',color:'#1677c8',textDecoration:'none',marginBottom:18}}>← Back to Welcome</Link>
    <div style={portalStyles.logo} aria-hidden="true">♥</div>
<h1 style={{...portalStyles.title,fontSize:34}}>Welcome Back</h1>
    <p style={portalStyles.muted}>Login to your CarePulse account</p>
    <form onSubmit={submit} style={{marginTop:24,textAlign:'left'}}>
      <label style={portalStyles.label}>Email Address</label>
<input style={portalStyles.field} type="email" autoComplete="email" value={email} onChange={e=>{setEmail(e.target.value);setMessage('');}} placeholder="you@example.com" required />
      <label style={portalStyles.label}>Password</label>
<input style={portalStyles.field} type="password" autoComplete="current-password" value={password} onChange={e=>{setPassword(e.target.value);setMessage('');}} placeholder="Enter your password" required />
      <button type="submit" style={portalStyles.primary}>Login</button>
    </form>
    {message && <p role="status" style={{color:'#145b91',lineHeight:1.5}}>{message}</p>}
    <button type="button" onClick={()=>navigate('/home')} style={portalStyles.secondary}>Continue to CarePulse (Demo)</button>
    <p style={portalStyles.muted}>New patient? <Link to="/register">Register here</Link>
</p>
  </section>
</main>;
}

function CarePulseHome({ comfort, setComfort }) {
  const [mode, setMode] = useState('');
  const [dept, setDept] = useState('');
  const [doctor, setDoctor] = useState(null);
  const [search, setSearch] = useState('');
  const [month, setMonth] = useState(() => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [patient, setPatient] = useState({name:'',age:'',gender:'',email:'',phone:'',symptoms:''});
  const [confirmed, setConfirmed] = useState(null);
  const navigate = useNavigate();
  const selectedDept = departments[dept];
  const filteredDoctors = useMemo(() => (selectedDept?.doctors || []).filter(d => `${d[0]} ${d[1]}`.toLowerCase().includes(search.toLowerCase())), [selectedDept, search]);
  const timeSlots = useMemo(() => {
    if (!doctor) return [];
    const [startText,endText] = doctor[2].split('-').map(x=>x.trim());
    const toMinutes = str => { const [clock,ampm] = str.split(' '); let [h,m='0'] = clock.split(':'); h=Number(h);m=Number(m);if(ampm==='PM'&&h!==12)h+=12;if(ampm==='AM'&&h===12)h=0;return h*60+m; };
    const start=toMinutes(startText),end=toMinutes(endText), slots=[];
    for(let t=start;t<end;t+=30){let h=Math.floor(t/60),m=t%60;slots.push(`${h%12||12}:${String(m).padStart(2,'0')} ${h>=12?'PM':'AM'}`);}return slots;
  },[doctor]);
  const chooseMode = value => { navigate(`/departments?mode=${encodeURIComponent(value)}`); };
  const chooseDepartment = name => { setDept(name); setSearch(''); setDoctor(null); setDate(''); setTime(''); setConfirmed(null); document.getElementById('departmentDetails')?.scrollIntoView({behavior:'smooth'}); };
  const chooseDoctor = d => { setDoctor(d); setDate(''); setTime(''); setConfirmed(null); };
  const monthDays = useMemo(() => { const year=month.getFullYear(), m=month.getMonth(); const offset=(new Date(year,m,1).getDay()+6)%7; return {year,m,offset,total:new Date(year,m+1,0).getDate()}; },[month]);
  const dateKey = day => `${monthDays.year}-${String(monthDays.m+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
  const changePatient = e => setPatient(p=>({...p,[e.target.name]:e.target.value}));
  const confirmBooking = e => { e.preventDefault(); if(!date||!time){window.alert('Please select a date and time.');return;} setConfirmed({doctor:doctor[0],date,time,position:'#4',ahead:'3',wait:'30 minutes'}); setTimeout(()=>document.getElementById('queueResult')?.scrollIntoView({behavior:'smooth'}),50); };
  return <>
    <Header comfort={comfort} setComfort={setComfort}/>
    <div className="container">
      <HomeSections />
      <Consultation onChooseMode={chooseMode}/>
      <section className="box" id="locationSection">
        <h2>CarePulse Hospital Location</h2>
        <p>📍 Chennai, Tamil Nadu</p>
        <p>Visit our hospital for in-person consultations, diagnostics and specialized medical care.</p>
        <div className="map-box">
          <iframe
            title="CarePulse Hospital Location"
            src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </section>
      {mode && <section id="departmentSelection" className="box">
<h2>Choose a Department</h2>
<p>
<b>Select the medical department you would like to consult.</b>
</p>
<div className="dept">{Object.keys(departments).map(name=>
<button key={name} onClick={()=>chooseDepartment(name)}>{({Cardiology:'❤️',Dermatology:'🧴',Orthopedics:'🦴',Pediatrics:'👶','General Medicine':'🩺'})[name]} {name}</button>)}</div>
<button className="secondary-action" onClick={()=>{setMode('');setDept('');}}>Back</button>
</section>}
      {selectedDept && <section id="departmentDetails">
<div className="box">
<div className="department-image-box">
<img className="department-image" src={selectedDept.image} alt={`${dept} department`} />
</div>
<h2>{dept} Department</h2>
<p>{selectedDept.text}</p>
</div>
<div className="box">
<h2>Available Doctors</h2>
<p>Select a doctor to continue with your appointment.</p>
<input id="doctorSearch" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search doctors by name or speciality" aria-label="Search doctors"/>
<div id="doctors">{filteredDoctors.map(d=>
<div className="doctor" key={d[0]}>
<h3>{d[0]}</h3>
<p>
<b>{d[1]}</b>
</p>
<p>Available: {d[2]}</p>
<button onClick={()=>chooseDoctor(d)}>Book Appointment</button>
</div>)}{filteredDoctors.length===0 && <p>No doctors match your search.</p>}</div>
<button className="secondary-action" onClick={()=>{setDept('');setDoctor(null);}}>Back to Departments</button>
</div>
</section>}
      {doctor && <section id="appointmentForm" className="box">
<h2>Book an Appointment</h2>
<p>
<b>Selected Doctor:</b> {doctor[0]}</p>
<p>
<b>Consultation Mode:</b> {mode}</p>
<form onSubmit={confirmBooking}>
        <h3>Your Health Details</h3>
<label>Name:</label>
<input name="name" value={patient.name} onChange={changePatient} required/>
<label>Age:</label>
<input name="age" type="number" min="1" max="120" value={patient.age} onChange={changePatient} required/>
<label>Gender:</label>
<select name="gender" value={patient.gender} onChange={changePatient} required>
<option value="">Select Gender</option>
<option>Male</option>
<option>Female</option>
<option>Other</option>
</select>
<label>Email:</label>
<input name="email" type="email" value={patient.email} onChange={changePatient}/>
<label>Phone:</label>
<input name="phone" type="tel" pattern="[0-9]{10}" maxLength="10" value={patient.phone} onChange={changePatient} required/>
<label>Symptoms:</label>
<textarea name="symptoms" rows="4" value={patient.symptoms} onChange={changePatient}/>
        <label>Appointment Date:</label>
<div className="calendar-box">
<div className="calendar-header">
<button type="button" onClick={()=>setMonth(new Date(month.getFullYear(),month.getMonth()-1,1))}>‹</button>
<span>{month.toLocaleString('default',{month:'long',year:'numeric'})}</span>
<button type="button" onClick={()=>setMonth(new Date(month.getFullYear(),month.getMonth()+1,1))}>›</button>
</div>
<div className="calendar-weekdays">{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>
<span key={d}>{d}</span>)}</div>
<div className="calendar-days">{Array.from({length:monthDays.offset},(_,i)=>
<span key={`blank-${i}`} />)}{Array.from({length:monthDays.total},(_,i)=>{const day=i+1,key=dateKey(day);return <button type="button" key={key} className={`calendar-day available ${date===key?'selected':''}`} onClick={()=>{setDate(key);setTime('');}}>{day}</button>;})}</div>
</div>
<p className="selected-info">{date?`Selected Date: ${date}`:'Please select a date.'}</p>
        <label>Available Time:</label>
<div className="time-slots">{date?timeSlots.map(slot=>
<button type="button" key={slot} className={`time-slot ${time===slot?'selected':''}`} onClick={()=>setTime(slot)}>{slot}</button>):<p className="slot-placeholder">Select a date first.</p>}</div>
<button type="submit">Confirm Appointment</button>
</form>
<button className="secondary-action" onClick={()=>setDoctor(null)}>Back to Doctors</button>
</section>}
      {confirmed && <section id="queueResult" className="box">
<h2>Appointment Confirmed! 🎉</h2>
<p>
<b>Doctor:</b> {confirmed.doctor}</p>
<p>
<b>Date:</b> {confirmed.date}</p>
<p>
<b>Time:</b> {confirmed.time}</p>
<h3>Your Queue Position</h3>
<div className="queue-number">{confirmed.position}</div>
<p>
<b>Patients Ahead:</b> {confirmed.ahead}</p>
<p>
<b>Estimated Waiting Time:</b> {confirmed.wait}</p>
<small>* Default queue values for demonstration.</small>
</section>}
    </div>
    <footer>
<p>© 2026 CarePulse | Healthcare &amp; Appointment Booking System</p>
<p>Chennai | +91 9876543210 | carepulse@gmail.com</p>
</footer>
  </>;
}

function DepartmentBooking({ comfort, setComfort }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const mode = searchParams.get('mode') || 'In-Person';
  const [dept, setDept] = useState('');
  const [doctor, setDoctor] = useState(null);
  const [search, setSearch] = useState('');
  const [month, setMonth] = useState(() => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [patient, setPatient] = useState({name:'',age:'',gender:'',email:'',phone:'',symptoms:''});
  const [confirmed, setConfirmed] = useState(null);
  const selectedDept = departments[dept];
  const filteredDoctors = useMemo(() => (selectedDept?.doctors || []).filter(d => `${d[0]} ${d[1]}`.toLowerCase().includes(search.toLowerCase())), [selectedDept, search]);
  const timeSlots = useMemo(() => {
    if (!doctor) return [];
    const [startText,endText] = doctor[2].split('-').map(x=>x.trim());
    const toMinutes = str => { const [clock,ampm] = str.split(' '); let [h,m='0'] = clock.split(':'); h=Number(h);m=Number(m);if(ampm==='PM'&&h!==12)h+=12;if(ampm==='AM'&&h===12)h=0;return h*60+m; };
    const start=toMinutes(startText),end=toMinutes(endText), slots=[];
    for(let t=start;t<end;t+=30){let h=Math.floor(t/60),m=t%60;slots.push(`${h%12||12}:${String(m).padStart(2,'0')} ${h>=12?'PM':'AM'}`);}return slots;
  },[doctor]);
  const chooseDepartment = name => { setDept(name); setSearch(''); setDoctor(null); setDate(''); setTime(''); setConfirmed(null); };
  const chooseDoctor = d => { setDoctor(d); setDate(''); setTime(''); setConfirmed(null); };
  const monthDays = useMemo(() => { const year=month.getFullYear(), m=month.getMonth(); const offset=(new Date(year,m,1).getDay()+6)%7; return {year,m,offset,total:new Date(year,m+1,0).getDate()}; },[month]);
  const dateKey = day => `${monthDays.year}-${String(monthDays.m+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
  const changePatient = e => setPatient(p=>({...p,[e.target.name]:e.target.value}));
  const confirmBooking = e => { e.preventDefault(); if(!date||!time){window.alert('Please select a date and time.');return;} setConfirmed({doctor:doctor[0],date,time,position:'#4',ahead:'3',wait:'30 minutes'}); setTimeout(()=>document.getElementById('queueResult')?.scrollIntoView({behavior:'smooth'}),50); };
  return <>
    <Header comfort={comfort} setComfort={setComfort}/>
    <main className="container">
      <div className="box">
        <button className="secondary-action" type="button" onClick={()=>navigate('/home')}>← Back to Home</button>
        <h2>Consultation Mode: {mode}</h2>
        <p>Select a department below to view its details and available doctors.</p>
        <h2>Choose a Department</h2>
        <div className="dept">{Object.keys(departments).map(name=>
<button key={name} onClick={()=>chooseDepartment(name)}>{({Cardiology:'❤️',Dermatology:'🧴',Orthopedics:'🦴',Pediatrics:'👶','General Medicine':'🩺'})[name]} {name}</button>)}</div>
      </div>
      {selectedDept && <section id="departmentDetails">
<div className="box">
<div className="department-image-box">
<img className="department-image" src={selectedDept.image} alt={`${dept} department`} />
</div>
<h2>{dept} Department</h2>
<p>{selectedDept.text}</p>
</div>
<div className="box">
<h2>Available Doctors</h2>
<p>Select a doctor to continue with your appointment.</p>
<input id="doctorSearch" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search doctors by name or speciality" aria-label="Search doctors"/>
<div id="doctors">{filteredDoctors.map(d=>
<div className="doctor" key={d[0]}>
<h3>{d[0]}</h3>
<p>
<b>{d[1]}</b>
</p>
<p>Available: {d[2]}</p>
<button onClick={()=>chooseDoctor(d)}>Book Appointment</button>
</div>)}{filteredDoctors.length===0 && <p>No doctors match your search.</p>}</div>
<button className="secondary-action" onClick={()=>{setDept('');setDoctor(null);setDate('');setTime('');}}>Back to Departments</button>
</div>
</section>}
      {doctor && <section id="appointmentForm" className="box">
<h2>Book an Appointment</h2>
<p>
<b>Selected Doctor:</b> {doctor[0]}</p>
<p>
<b>Consultation Mode:</b> {mode}</p>
<form onSubmit={confirmBooking}>
        <h3>Your Health Details</h3>
<label>Name:</label>
<input name="name" value={patient.name} onChange={changePatient} required/>
<label>Age:</label>
<input name="age" type="number" min="1" max="120" value={patient.age} onChange={changePatient} required/>
<label>Gender:</label>
<select name="gender" value={patient.gender} onChange={changePatient} required>
<option value="">Select Gender</option>
<option>Male</option>
<option>Female</option>
<option>Other</option>
</select>
<label>Email:</label>
<input name="email" type="email" value={patient.email} onChange={changePatient}/>
<label>Phone:</label>
<input name="phone" type="tel" pattern="[0-9]{10}" maxLength="10" value={patient.phone} onChange={changePatient} required/>
<label>Symptoms:</label>
<textarea name="symptoms" rows="4" value={patient.symptoms} onChange={changePatient}/>
        <label>Appointment Date:</label>
<div className="calendar-box">
<div className="calendar-header">
<button type="button" onClick={()=>setMonth(new Date(month.getFullYear(),month.getMonth()-1,1))}>‹</button>
<span>{month.toLocaleString('default',{month:'long',year:'numeric'})}</span>
<button type="button" onClick={()=>setMonth(new Date(month.getFullYear(),month.getMonth()+1,1))}>›</button>
</div>
<div className="calendar-weekdays">{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>
<span key={d}>{d}</span>)}</div>
<div className="calendar-days">{Array.from({length:monthDays.offset},(_,i)=>
<span key={`blank-${i}`} />)}{Array.from({length:monthDays.total},(_,i)=>{const day=i+1,key=dateKey(day);return <button type="button" key={key} className={`calendar-day available ${date===key?'selected':''}`} onClick={()=>{setDate(key);setTime('');}}>{day}</button>;})}</div>
</div>
<p className="selected-info">{date?`Selected Date: ${date}`:'Please select a date.'}</p>
        <label>Available Time:</label>
<div className="time-slots">{date?timeSlots.map(slot=>
<button type="button" key={slot} className={`time-slot ${time===slot?'selected':''}`} onClick={()=>setTime(slot)}>{slot}</button>):<p className="slot-placeholder">Select a date first.</p>}</div>
<button type="submit">Confirm Appointment</button>
</form>
<button className="secondary-action" onClick={()=>setDoctor(null)}>Back to Doctors</button>
</section>}
      {confirmed && <section id="queueResult" className="box">
<h2>Appointment Confirmed! 🎉</h2>
<p>
<b>Doctor:</b> {confirmed.doctor}</p>
<p>
<b>Date:</b> {confirmed.date}</p>
<p>
<b>Time:</b> {confirmed.time}</p>
<h3>Your Queue Position</h3>
<div className="queue-number">{confirmed.position}</div>
<p>
<b>Patients Ahead:</b> {confirmed.ahead}</p>
<p>
<b>Estimated Waiting Time:</b> {confirmed.wait}</p>
<small>* Default queue values for demonstration.</small>
</section>}
    </main>
    <footer>
<p>© 2026 CarePulse | Healthcare &amp; Appointment Booking System</p>
<p>Chennai | +91 9876543210 | carepulse@gmail.com</p>
</footer>
  </>;
}

function App() {
  const [comfort, setComfort] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('comfortMode', comfort);
    return () => document.body.classList.remove('comfortMode');
  }, [comfort]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<>
          <div style={{padding:'18px 24px',background:'#f2f8fc'}}>
<Link to="/" style={{color:'#1677c8',textDecoration:'none'}}>← Back to Welcome</Link>
</div>
          <Registration />
          <footer>
<p>© 2026 CarePulse | Healthcare &amp; Appointment Booking System</p>
</footer>
        </>} />
        <Route path="/home" element={<CarePulseHome comfort={comfort} setComfort={setComfort} />} />
        <Route path="/departments" element={<DepartmentBooking comfort={comfort} setComfort={setComfort} />} />
        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
