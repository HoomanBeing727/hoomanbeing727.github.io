import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <ul className="chip-row">
                {group.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
