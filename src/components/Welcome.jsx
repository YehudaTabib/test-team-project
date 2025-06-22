import React from 'react';
import '../style/Welcome.css';

export default function Welcome({ carrentUser }) {
  if (!carrentUser) {
    return <h2>לא נבחר משתמש. חזור לדף ההרשמה.</h2>;
  }

  const steps = [
    { id: 1, command: "git clone https://github.com/YehudaTabib/mkfitness-main.git", description: "שכפול הפרויקט מהמאגרים של GitHub אל המחשב האישי." },
    { id: 2, command: "cd mkfitness-main", description: "כניסה לתיקיית הפרויקט המקומית." },
    { id: 3, command: "git checkout main", description: "מעבר לסניף הראשי (main)." },
    { id: 4, command: "git pull origin main", description: "משיכת קוד עדכני מ‑GitHub." },
    { id: 5, command: "/git checkout -b feature", description: "יצירת סניף חדש לפיצ’ר מבוסס main." },
    { id: 6, command: "עבודה בקוד (localhost:3000)", description: "עריכת קבצים, בדיקת האתר בסביבת פיתוח." },
    { id: 7, command: ". git add ", description: "הוספת הקבצים ששונו לרשימת ה‑commit." },
    { id: 8, command: `"תיאור השינוי" git commit -m`, description: "שמירת השינויים בהיסטוריית Git עם תיאור ברור." },
    { id: 9, command: "/git push -u origin feature", description: "העלאת הסניף ל‑GitHub." },
    { id: 10, command: "פתיחת Pull Request ב‑GitHub", description: "פותחים PR עם שם ותיאור מה עשית." },
    { id: 11, command: "המתנה לאישור", description: "המנהל בודק ומאשר או מבקש תיקונים." },
    { id: 12, command: "git checkout main && git pull origin main", description: "משיכת הקוד המעודכן אחרי מיזוג ה‑PR." },
    { id: 13, command: "git branch -d feature/שם‑הפיצ’ר", description: "מחיקת הסניף המקומי אחרי סיום הפיצ’ר." },
    { id: 14, command: "חוזר לשלב 5", description: "פותח סניף חדש לפיצ’ר הבא." }
  ];

  return (
    <div className="welcome-container">
      <h1>Welcome, {carrentUser.userName}</h1>
      <div className="card">
        <p><strong>Email:</strong> {carrentUser.email}</p>
        <p><strong>Password:</strong> {carrentUser.password}</p>
        <p><strong>Username:</strong> {carrentUser.userName}</p>
      </div>

      <div className="team-guide-container">
        <h2>מדריך לחבר צוות – עבודה עם Git</h2>
        <table className="team-guide-table">
          <thead>
            <tr><th>שלב</th><th>פקודה</th><th>הסבר</th></tr>
          </thead>
          <tbody>
            {steps.map(step =>
              <tr key={step.id}>
                <td>{step.id}</td>
                <td><code>{step.command}</code></td>
                <td>{step.description}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
