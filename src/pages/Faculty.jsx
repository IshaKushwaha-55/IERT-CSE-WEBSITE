import { GraduationCap, Lightbulb, Mail } from "lucide-react";
import "./Faculty.css";

// ⬇️ REPLACE: Fill in actual faculty details. Add photos at src/assets/faculty/faculty1.jpg etc.
const faculty = [
  {
    id: 1,
    name: "Prof. [HOD Name]",
    designation: "Professor & Head of Department",
    qualification: "Ph.D / M.Tech",
    specialization: "Computer Science & Engineering",
    email: "hod.cse@iert.ac.in",
    photo: null, // ⬇️ Replace: "/src/assets/faculty/hod.jpg"
  },
  {
    id: 2,
    name: "Dr. [Faculty Name]",
    designation: "Associate Professor",
    qualification: "Ph.D (CS), MNNIT Allahabad",
    specialization: "Machine Learning, AI",
    email: "faculty2@iert.ac.in",
    photo: null,
  },
  {
    id: 3,
    name: "Mr. [Faculty Name]",
    designation: "Assistant Professor",
    qualification: "M.Tech (Software Engineering), MNNIT",
    specialization: "Software Engineering, Web Tech",
    email: "ibd@iert.ac.in",
    photo: null,
  },
  {
    id: 4,
    name: "Ms. [Faculty Name]",
    designation: "Assistant Professor",
    qualification: "M.Tech (Computer Science)",
    specialization: "Data Structures, Algorithms",
    email: "indu2365@gmail.com",
    photo: null,
  },
  {
    id: 5,
    name: "Mr. [Faculty Name]",
    designation: "Assistant Professor",
    qualification: "M.Tech (Computer Networks)",
    specialization: "Computer Networks, Security",
    email: "faculty5@iert.ac.in",
    photo: null,
  },
  {
    id: 6,
    name: "Ms. [Faculty Name]",
    designation: "Assistant Professor",
    qualification: "M.Tech (IT)",
    specialization: "Database Management, Cloud Computing",
    email: "faculty6@iert.ac.in",
    photo: null,
  },
];

const staff = [
  { name: "[Lab Assistant Name]", role: "Senior Lab Technician", dept: "Programming Lab" },
  { name: "[Staff Name]", role: "Junior Lab Technician", dept: "Networking Lab" },
  { name: "[Staff Name]", role: "System Administrator", dept: "Server Room" },
];

export default function Faculty() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Faculty & Staff</h1>
          <p>Meet the experts shaping future engineers</p>
          <div className="breadcrumb">Home <span>›</span> Faculty</div>
        </div>
      </section>

      {/* Faculty Cards */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">OUR <span>FACULTY</span></h2>
          <div className="section-divider" />
          <p style={{ color: "var(--text-light)", marginBottom: 32, maxWidth: 620 }}>
            Our faculty members are highly qualified professionals from premier institutes, bringing
            a blend of academic expertise and industry experience to the classroom.
          </p>

          <div className="faculty-grid">
            {faculty.map((f) => (
              <div key={f.id} className="card faculty-card">
                <div className="faculty-photo-wrap">
                  {f.photo ? (
                    <img src={f.photo} alt={f.name} className="faculty-photo" />
                  ) : (
                    <div className="faculty-photo-placeholder">
                      👤<br />
                      <small>[ Add photo:<br />faculty/f{f.id}.jpg ]</small>
                    </div>
                  )}
                </div>
                <div className="faculty-info">
                  <h3>{f.name}</h3>
                  <p className="faculty-designation">{f.designation}</p>
                  <div className="faculty-divider" />
                  <div className="faculty-details">
                    <p><GraduationCap size={14} strokeWidth={2} /> {f.qualification}</p>
                    <p><Lightbulb size={14} strokeWidth={2} /> {f.specialization}</p>
                    <p><Mail size={14} strokeWidth={2} /> <a href={`mailto:${f.email}`}>{f.email}</a></p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faculty-note">
            <strong>Note:</strong> Replace all placeholder names, qualifications, and photos with actual faculty details. 
            Faculty photos should be placed at <code>src/assets/faculty/faculty[id].jpg</code>.
          </div>
        </div>
      </section>

      {/* Technical Staff */}
      <section className="section staff-section">
        <div className="container">
          <h2 className="section-title">TECHNICAL <span>STAFF</span></h2>
          <div className="section-divider" />
          <div className="staff-table-wrapper">
            <table className="staff-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {staff.map((s, i) => (
                  <tr key={s.name}>
                    <td>{i + 1}</td>
                    <td>{s.name}</td>
                    <td>{s.role}</td>
                    <td>{s.dept}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section join-section">
        <div className="container join-box">
          <h2>Join Our Faculty</h2>
          <p>
            We are always looking for talented and dedicated educators to join our team.
            If you are passionate about Computer Science education and research, we'd love to hear from you.
          </p>
          <a href="mailto:cse@iert.ac.in" className="btn btn-primary">Send Your CV</a>
        </div>
      </section>
    </div>
  );
}
