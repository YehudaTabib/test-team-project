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
    { id: 5, command: "git checkout -b feature/שם‑הפיצ’ר", description: "יצירת סניף חדש לפיצ’ר מבוסס main." },
    { id: 6, command: "עבודה בקוד (localhost:3000)", description: "עריכת קבצים, בדיקת האתר בסביבת פיתוח." },
    { id: 7, command: "git add .", description: "הוספת הקבצים ששונו לרשימת ה‑commit." },
    { id: 8, command: `git commit -m "תיאור השינוי"`, description: "שמירת השינויים בהיסטוריית Git עם תיאור ברור." },
    { id: 9, command: "git push -u origin feature/שם‑הפיצ’ר", description: "העלאת הסניף ל‑GitHub." },
    { id: 10, command: "פתיחת Pull Request ב‑GitHub", description: "פותחים PR עם שם ותיאור מה עשית." },
    { id: 11, command: "המתנה לאישור", description: "המנהל בודק ומאשר או מבקש תיקונים." },
    { id: 12, command: "git checkout main && git pull origin main", description: "משיכת הקוד המעודכן אחרי מיזוג ה‑PR." },
    { id: 13, command: "git branch -d feature/שם‑הפיצ’ר", description: "מחיקת הסניף המקומי אחרי סיום הפיצ’ר." },
    { id: 14, command: "חוזר לשלב 5", description: "פותח סניף חדש לפיצ’ר הבא." }
  ];

  const whenToUse = [
    {
      context: "פעם ראשונה בלבד",
      commands: [
        "git clone https://github.com/YehudaTabib/mkfitness-main.git",
        "cd mkfitness-main"
      ],
      explanation: "שכפול הפרויקט והכנת הסביבה לעבודה"
    },
    {
      context: "לפני כל משימה חדשה",
      commands: [
        "git checkout main",
        "git pull origin main",
        "git checkout -b feature/שם-הפיצ’ר-שם-המשתמש"
      ],
      explanation: "ודא שאתה עובד עם הקוד הכי עדכני ויוצר סניף חדש עם השם שלך"
    },
    {
      context: "בסיום העבודה",
      commands: [
        "git add .",
        `git commit -m "תיאור השינוי"`,
        "git push -u origin feature/שם-הפיצ’ר-שם-המשתמש"
      ],
      explanation: "שמירת הקוד והעלאה ל-GitHub"
    },
    {
      context: "לאחר אישור ה־Pull Request",
      commands: [
        "git checkout main",
        "git pull origin main"
      ],
      explanation: "עדכון הסניף הראשי עם הקוד החדש"
    }
  ];

  const howToTestBranch = [
    {
      step: "1. פתיחת תיקיה חדשה לבדיקה",
      commands: [
        "cd Desktop",
        "mkdir test-branch",
        "cd test-branch"
      ],
      explanation: "כך נשמור על הקוד המקורי מבלי לשבש אותו"
    },
    {
      step: "2. שכפול הריפו מה-GitHub",
      commands: [
        "git clone https://github.com/YehudaTabib/test-team-project.git",
        "cd test-team-project"
      ],
      explanation: "הורדת כל קבצי הפרויקט לתיקייה הבודקת"
    },
    {
      step: "3. משיכת הסניף לבדיקה",
      commands: [
        "git fetch origin feature/Welcome-Changh",
        "git checkout feature/Welcome-Changh"
      ],
      explanation: "ככה אתה נכנס לסניף של המפתח ששלח את ה-PR"
    },
    {
      step: "4. התקנת התלויות והרצת הפרויקט",
      commands: [
        "npm install",
        "npm run dev"
      ],
      explanation: "בודק את הקוד בדפדפן – לוודא שהכול עובד כמו שצריך"
    },
    {
      step: "5. חזרה ל-main אחרי בדיקה",
      commands: [
        "git checkout main"
      ],
      explanation: "כדי להמשיך לעבוד על הקוד הראשי כרגיל"
    }
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
            {steps.map(step => (
              <tr key={step.id}>
                <td>{step.id}</td>
                <td><code>{step.command}</code></td>
                <td>{step.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>מה כל מפתח צריך לעשות ומתי</h2>
        <table className="team-guide-table">
          <thead>
            <tr>
              <th>מתי</th>
              <th>פקודות</th>
              <th>הסבר</th>
            </tr>
          </thead>
          <tbody>
            {whenToUse.map((row, index) => (
              <tr key={index}>
                <td>{row.context}</td>
                <td>{row.commands.map((cmd, i) => (
                  <code key={i}>{cmd}<br /></code>
                ))}</td>
                <td>{row.explanation}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>בדיקת סניף של מפתח אחר לפני Merge</h2>
        <table className="team-guide-table">
          <thead>
            <tr>
              <th>שלב</th>
              <th>פקודות</th>
              <th>הסבר</th>
            </tr>
          </thead>
          <tbody>
            {howToTestBranch.map((row, index) => (
              <tr key={index}>
                <td>{row.step}</td>
                <td>{row.commands.map((cmd, i) => (
                  <code key={i}>{cmd}<br /></code>
                ))}</td>
                <td>{row.explanation}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
