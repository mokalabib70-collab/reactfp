
// import {
//   BarChart3Icon,
//   BookOpenIcon,
//   CalendarIcon,
//   ChevronRightIcon,
//   ClockIcon,
//   FileTextIcon,
//   LayoutDashboardIcon,
//   MessageSquareIcon,
//   PlusIcon,
// } from "lucide-react";
// import React, { useState } from "react";

// import styles from "./CreateExam.module.css";

// const sidebarItems = [
//   { icon: LayoutDashboardIcon, label: "Dashboard", active: false },
//   { icon: FileTextIcon, label: "Exams", active: true },
//   { icon: BarChart3Icon, label: "Reports", active: false },
//   { icon: BookOpenIcon, label: "Courses", active: false },
//   { icon: MessageSquareIcon, label: "Chat", active: false },
// ];

// export const CreateExam = () => {
//   const [questions, setQuestions] = useState([]);

//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       { text: "", type: "", score: 0, options: ["", "", "", ""], id: Date.now(), isSaved: false, },
//     ]);
//   };

//   return (
//     <div className={styles.container}>
//       {/* Header */}
//       <header className={styles.header}>
//         <div className={styles.headerContent}>
//           <div className={styles.logo}>
//             <img
//               className={styles.logoImage}
//               alt="TruthEye Logo"
//               src="https://c.animaapp.com/midrq529vvHnXh/img/unnamed-photoroom-1.png"
//             />
//             <div className={styles.logoText}>
//               <span className={styles.logoTextBold}>Truth</span>
//               <span className={styles.logoTextYellow}>Eye</span>
//             </div>
//           </div>

//           <div className={styles.userInfo}>
//             <img
//               className={styles.userAvatar}
//               alt="User Avatar"
//               src="https://c.animaapp.com/midrq529vvHnXh/img/rectangle.png"
//             />
//             <div className={styles.userName}>Dr . Ahmed</div>
//           </div>
//         </div>
//       </header>

//       {/* Sidebar */}
//       <aside className={styles.sidebar}>
//         <nav className={styles.sidebarNav}>
//           {sidebarItems.map((item, index) => (
//             <div
//               key={index}
//               className={`${styles.navItem} ${
//                 item.active ? styles.navItemActive : ""
//               }`}
//             >
//               <ChevronRightIcon size={20} color="white" />
//               <div className={styles.navItemContent}>
//                 <item.icon size={24} color="white" />
//                 <span className={styles.navItemText}>{item.label}</span>
//               </div>
//             </div>
//           ))}
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className={styles.main}>
//         {/* Title + Add Button */}
//         <div className={styles.mainHeader}>
//           <h1 className={styles.mainTitle}>Create Exam</h1>
//           <button className={styles.addButton} onClick={addQuestion}>
//             <PlusIcon size={24} color="#fffafa" />
//             <span className={styles.addButtonText}>Add Question</span>
//           </button>
//         </div>

//         {/* Exam Info Card */}
//         <div className={styles.cardWrapper}>
//           <div className={styles.card}>
//             <div className={styles.cardContent}>
//               <div className={styles.formSection}>
//                 <div className={styles.formGroup}>
//                   <label className={styles.label}>Exam Title</label>
//                   <input type="text" className={styles.input} />
//                 </div>

//                 <div className={styles.formGroup}>
//                   <label className={styles.label}>Course</label>
//                   <select className={styles.select}>
//                     <option value="">Select Course</option>
//                     <option value="course1">Course 1</option>
//                     <option value="course2">Course 2</option>
//                   </select>
//                 </div>

//                 <div className={styles.formRow}>
//                   <div className={styles.formColumn}>
//                     <label className={styles.labelSmall}>Date</label>
//                     <div className={styles.dateInput}>
//                       <CalendarIcon size={16} />
//                       <input type="date" className={styles.realInput} />
//                     </div>
//                   </div>

//                   <div className={styles.formColumn}>
//                     <label className={styles.labelSmall}>Duration (min)</label>
//                     <input
//                       type="number"
//                       min="1"
//                       className={styles.realNumberInput}
//                       placeholder="0"
//                     />
//                   </div>

//                   <div className={styles.formColumn}>
//                     <label className={styles.labelSmall}>Start Time</label>
//                     <div className={styles.timeInput}>
//                       <input type="time" className={styles.realInput} />
//                       <ClockIcon size={18} />
//                     </div>
//                   </div>

//                   <div className={styles.formColumn}>
//                     <label className={styles.labelSmall}>End Time</label>
//                     <div className={styles.timeInput}>
//                       <input type="time" className={styles.realInput} />
//                       <ClockIcon size={18} />
//                     </div>
//                   </div>

//                   <div className={styles.formColumn}>
//                     <label className={styles.labelSmall}>Number of Questions</label>
//                     <input
//                       type="number"
//                       min="1"
//                       className={styles.realNumberInput}
//                       placeholder="0"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Dynamic Question Cards */}
//         {questions.map((q, index) => (
//           <div key={q.id} className={styles.cardquesWrapper}>
//             <div className={styles.cardques}>
//               <div className={styles.cardquesContent}>
//                 {/* QUESTION TEXT */}
//                 <div className={styles.formquesField}>
//                   <label className={styles.queslabel}>Question Text</label>
//                   <textarea
//                     className={styles.quesformTextarea}
//                     placeholder="Write question here..."
//                     value={q.text}
//                     onChange={(e) => {
//                       const newQuestions = [...questions];
//                       newQuestions[index].text = e.target.value;
//                       setQuestions(newQuestions);
//                     }}
                     
//                   />
//                 </div>

//                 {/* TYPE + SCORE */}
//                 <div className={styles.quesformRow}>
//                   <div className={styles.quesformColumn}>
//                     <label className={styles.queslabelSmall}>Question Type</label>
//                     <select
//                       className={styles.quesselect}
//                       value={q.type}
//                       onChange={(e) => {
//                         const newQuestions = [...questions];
//                         newQuestions[index].type = e.target.value;

//                         if (e.target.value === "multiple") newQuestions[index].options = ["", "", "", ""];
//                         if (e.target.value === "truefalse") newQuestions[index].options = ["True", "False"];
//                         if (e.target.value === "essay") newQuestions[index].options = [];

//                         setQuestions(newQuestions);
//                       }}
//                     >
//                       <option value="">Select Question Type</option>
//                       <option value="multiple">Multiple Choice</option>
//                       <option value="truefalse">True/False</option>
//                       <option value="essay">Essay</option>
//                     </select>
//                   </div>

//                   <div className={styles.quesformColumn}>
//                     <label className={styles.queslabelSmall}>Score</label>
//                     <input
//                       type="number"
//                       min="0"
//                       className={styles.quesrealNumberInput}
//                       value={q.score}
//                       onChange={(e) => {
//                         const newQuestions = [...questions];
//                         newQuestions[index].score = Number(e.target.value);
//                         setQuestions(newQuestions);
//                       }}
//                     />
//                   </div>
//                 </div>

//                 {/* MULTIPLE CHOICE OPTIONS */}
//                 {q.type === "multiple" && (
//                   <div className={styles.optionsWrapper}>
//                     <label className={styles.queslabelSmall}>Options</label>
//                     {q.options.map((opt, optIndex) => (
//                       <div key={optIndex} className={styles.optionItem}>
//                         <input
//                           type="text"
//                           className={styles.optionInput}
//                           placeholder={`Option ${optIndex + 1}`}
//                           value={opt}
//                           onChange={(e) => {
//                             const newQuestions = [...questions];
//                             newQuestions[index].options[optIndex] = e.target.value;
//                             setQuestions(newQuestions);
//                           }}
//                         />
//                       </div>
//                     ))}
//                     <button
//   className={styles.saveBtn}
//   onClick={() => {
//     const newQuestions = [...questions];
//     newQuestions[index].isSaved = true;  // خلاص اتحفظ
//     setQuestions(newQuestions);
//   }}
// >
//   Add
// </button>

//                   </div>
//                 )}

//                 {/* TRUE / FALSE */}
//                 {q.type === "truefalse" && (
//                   <div className={styles.optionsWrapper}>
//                     <label className={styles.queslabelSmall}>Options</label>
//                     <div className={styles.optionItem}>
//                       <input type="text" className={styles.optionInput} value="True" disabled />
//                     </div>
//                     <div className={styles.optionItem}>
//                       <input type="text" className={styles.optionInput} value="False" disabled />
//                     </div>
//                     <button
//   className={styles.saveBtn}
//   onClick={() => {
//     const newQuestions = [...questions];
//     newQuestions[index].isSaved = true;  // خلاص اتحفظ
//     setQuestions(newQuestions);
//   }}
// >
//   Add
// </button>

//                   </div>
//                 )}

//                 {/* ESSAY */}
//                 {q.type === "essay" && (
//                   <div className={styles.essayWrapper}>
//                     <label className={styles.queslabelSmall}>Answer</label>
//                     <textarea
//                       className={styles.essayTextarea}
//                       placeholder="Write answer here..."
//                     ></textarea>
//                     <button
//   className={styles.saveBtn}
//   onClick={() => {
//     const newQuestions = [...questions];
//     newQuestions[index].isSaved = true;  // خلاص اتحفظ
//     setQuestions(newQuestions);
//   }}
// >
//   Add
// </button>

//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// };
import {
  BarChart3Icon,
  BookOpenIcon,
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  PlusIcon,
} from "lucide-react";
import React, { useState } from "react";

import styles from "./CreateExam.module.css";

const sidebarItems = [
  { icon: LayoutDashboardIcon, label: "Dashboard", active: false },
  { icon: FileTextIcon, label: "Exams", active: true },
  { icon: BarChart3Icon, label: "Reports", active: false },
  { icon: BookOpenIcon, label: "Courses", active: false },
  { icon: MessageSquareIcon, label: "Chat", active: false },
];

export const CreateExam = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { text: "", type: "", score: 0, options: ["", "", "", ""], id: Date.now(), isSaved: false },
    ]);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img
              className={styles.logoImage}
              alt="TruthEye Logo"
              src="https://c.animaapp.com/midrq529vvHnXh/img/unnamed-photoroom-1.png"
            />
            <div className={styles.logoText}>
              <span className={styles.logoTextBold}>Truth</span>
              <span className={styles.logoTextYellow}>Eye</span>
            </div>
          </div>

          <div className={styles.userInfo}>
            <img
              className={styles.userAvatar}
              alt="User Avatar"
              src="https://c.animaapp.com/midrq529vvHnXh/img/rectangle.png"
            />
            <div className={styles.userName}>Dr . Ahmed</div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <nav className={styles.sidebarNav}>
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.navItem} ${item.active ? styles.navItemActive : ""}`}
            >
              <ChevronRightIcon size={20} color="white" />
              <div className={styles.navItemContent}>
                <item.icon size={24} color="white" />
                <span className={styles.navItemText}>{item.label}</span>
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Title + Add Button */}
        <div className={styles.mainHeader}>
          <h1 className={styles.mainTitle}>Create Exam</h1>
          <button className={styles.addButton} onClick={addQuestion}>
            <PlusIcon size={24} color="#fffafa" />
            <span className={styles.addButtonText}>Add Question</span>
          </button>
        </div>

        {/* Exam Info Card */}
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.formSection}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Exam Title</label>
                  <input type="text" className={styles.input} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Course</label>
                  <select className={styles.select}>
                    <option value="">Select Course</option>
                    <option value="course1">Course 1</option>
                    <option value="course2">Course 2</option>
                  </select>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formColumn}>
                    <label className={styles.labelSmall}>Date</label>
                    <div className={styles.dateInput}>
                      <CalendarIcon size={16} />
                      <input type="date" className={styles.realInput} />
                    </div>
                  </div>

                  <div className={styles.formColumn}>
                    <label className={styles.labelSmall}>Duration (min)</label>
                    <input type="number" min="1" className={styles.realNumberInput} placeholder="0" />
                  </div>

                  <div className={styles.formColumn}>
                    <label className={styles.labelSmall}>Start Time</label>
                    <div className={styles.timeInput}>
                      <input type="time" className={styles.realInput} />
                      <ClockIcon size={18} />
                    </div>
                  </div>

                  <div className={styles.formColumn}>
                    <label className={styles.labelSmall}>End Time</label>
                    <div className={styles.timeInput}>
                      <input type="time" className={styles.realInput} />
                      <ClockIcon size={18} />
                    </div>
                  </div>

                  <div className={styles.formColumn}>
                    <label className={styles.labelSmall}>Number of Questions</label>
                    <input type="number" min="1" className={styles.realNumberInput} placeholder="0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Question Cards */}
         {questions.map((q, index) => (
          <div key={q.id} className={styles.cardquesWrapper}>
            <div className={styles.cardques}>
              <div className={styles.cardquesContent}>
                {/* QUESTION TEXT */}
                <div className={styles.formquesField}>
                  <label className={styles.queslabel}>Question Text</label>
                  <textarea
                    className={styles.quesformTextarea}
                    placeholder="Write question here..."
                    value={q.text}
                    onChange={(e) => {
                      const newQuestions = [...questions];
                      newQuestions[index].text = e.target.value;
                      setQuestions(newQuestions);
                    }}
                    disabled={q.isSaved}
                  />
                 

                </div>

                {/* TYPE + SCORE */}
                <div className={styles.quesformRow}>
                  <div className={styles.quesformColumn}>
                    <label className={styles.queslabelSmall}>Question Type</label>
                    <select
                      className={styles.quesselect}
                      value={q.type}
                      onChange={(e) => {
                        const newQuestions = [...questions];
                        newQuestions[index].type = e.target.value;

                        if (e.target.value === "multiple") newQuestions[index].options = ["", "", "", ""];
                        if (e.target.value === "truefalse") newQuestions[index].options = ["True", "False"];
                        if (e.target.value === "essay") newQuestions[index].options = [];

                        setQuestions(newQuestions);
                      }}
                      disabled={q.isSaved}
                    >
                      <option value="">Select Question Type</option>
                      <option value="multiple">Multiple Choice</option>
                      <option value="truefalse">True/False</option>
                      <option value="essay">Essay</option>
                    </select>
                  </div>

                  <div className={styles.quesformColumn}>
                    <label className={styles.queslabelSmall}>Score</label>
                    {q.isSaved ? (
                      <span className={styles.scoreText}>{q.score}</span>
                    ) : (
                      <input
                        type="number"
                        min="0"
                        className={styles.quesrealNumberInput}
                        value={q.score}
                        onChange={(e) => {
                          const newQuestions = [...questions];
                          newQuestions[index].score = Number(e.target.value);
                          setQuestions(newQuestions);
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* OPTIONS */}
                {(q.type === "multiple" || q.type === "truefalse") && (
                  <div className={styles.optionsWrapper}>
                    {q.isSaved ? (
                      q.options.map((opt, optIndex) => (
                        <div key={optIndex} className={styles.optionItem}>
                          <label>
                            <input type="radio" name={`q${q.id}`} />
                            {opt}
                          </label>
                        </div>
                      ))
                    ) : (
                      q.options.map((opt, optIndex) => (
                        <div key={optIndex} className={styles.optionItem}>
                          <input
                            type="text"
                            className={styles.optionInput}
                            placeholder={`Option ${optIndex + 1}`}
                            value={opt}
                            onChange={(e) => {
                              const newQuestions = [...questions];
                              newQuestions[index].options[optIndex] = e.target.value;
                              setQuestions(newQuestions);
                            }}
                          />
                        </div>
                      ))
                    )}
                    {!q.isSaved && (
                      <button
                        className={styles.saveBtn}
                        onClick={() => {
                          const newQuestions = [...questions];
                          newQuestions[index].isSaved = true;
                          setQuestions(newQuestions);
                        }}
                      >
                        Add
                      </button>
                    )}
                  </div>
                )}

                {/* ESSAY */}
                {q.type === "essay" && (
                  <div className={styles.essayWrapper}>
                    {q.isSaved ? (
                      <div className={styles.essaySaved}>
                        <strong>Answer saved</strong>
                      </div>
                    ) : (
                      <textarea
                        className={styles.essayTextarea}
                        placeholder="Write answer here..."
                      />
                    )}
                    {!q.isSaved && (
                      <button
                        className={styles.saveBtn}
                        onClick={() => {
                          const newQuestions = [...questions];
                          newQuestions[index].isSaved = true;
                          setQuestions(newQuestions);
                        }}
                      >
                        Add
                      </button>
                    )}
                  </div>
                )}

                {/* EDIT + DELETE */}
                {q.isSaved && (
                  <div className={styles.savedActionsRow}>
                  
                    <button
                      className={styles.editBtn}
                      onClick={() => {
                        const newQuestions = [...questions];
                        newQuestions[index].isSaved = false;
                        setQuestions(newQuestions);
                      }}
                    >
                      ✏️ 
                    </button>

                    <button
                      className={styles.deleteBtn}
                      onClick={() => {
                        const newQuestions = questions.filter((item) => item.id !== q.id);
                        setQuestions(newQuestions);
                      }}
                    >
                      🗑️ 
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))} 
      </main>
    </div>
  );
};

