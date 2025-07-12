import React, { useState, useEffect } from 'react'
import "./Quiz.css"
import { quizData } from './data.js'

const Quiz = () => {
  // State management
  const [currentState, setCurrentState] = useState('configuration'); // 'configuration', 'quiz', 'results'
  const [selectedCategory, setSelectedCategory] = useState('CSS');
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(25);
  const [timerActive, setTimerActive] = useState(false);

  // Timer effect
  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && timerActive) {
      handleNextQuestion();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, timerActive]);

  // Get current questions based on category
  const getCurrentQuestions = () => {
    const categoryQuestions = quizData[selectedCategory] || [];
    return categoryQuestions.slice(0, Math.min(numberOfQuestions, categoryQuestions.length));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleQuestionCountSelect = (count) => {
    setNumberOfQuestions(parseInt(count));
  };

  const handleStartQuiz = () => {
    setCurrentState('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setTimeLeft(25);
    setTimerActive(true);
  };

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < getCurrentQuestions().length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(25);
    } else {
      // Quiz completed
      calculateScore();
      setCurrentState('results');
      setTimerActive(false);
    }
  };

  const calculateScore = () => {
    const questions = getCurrentQuestions();
    let correctAnswers = 0;
    
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        correctAnswers++;
      }
    });
    
    setScore(correctAnswers);
  };

  const handleTryAgain = () => {
    setCurrentState('configuration');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setTimeLeft(15);
    setTimerActive(false);
  };

  const currentQuestions = getCurrentQuestions();
  const currentQuestion = currentQuestions[currentQuestionIndex];

  return (
    <>
      {/* Material Symbols Font Imports */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

<div id='div' className='body'>
    
      {currentState === 'configuration' && (
        <div className="config-container">
          <h2 className="config-title">QUIZ CONFIGURATION</h2>

          <div className="config-option">
            <h4 className="option-title">SELECT CATEGORY</h4>
            <div className="category-options">
              {Object.keys(quizData).map((category) => (
                <button
                  key={category}
                  className={`category-option ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="config-option">
            <h4 className="option-title">NO. OF QUESTIONS</h4>
            <div className="question-options">
              {[5, 10, 15, 20, 25, 50].map((count) => (
                <button
                  key={count}
                  className={`question-option ${numberOfQuestions === count ? 'active' : ''}`}
                  onClick={() => handleQuestionCountSelect(count)}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          <button className="start-quiz-btn" onClick={handleStartQuiz}>
            START QUIZ
          </button>
        </div>
      )}

      {currentState === 'quiz' && currentQuestion && (
        <div className="quiz-container">
          <header className="quiz-header">
            <h2 className="quiz-title">Quiz Application</h2>
            <div className="quiz-timer">
              <span className="material-symbols-rounded">timer</span>
              <p className="time-duration">{timeLeft}s</p>
            </div>
          </header>

          <div className="quiz-content">
            <h1 className="question-text">{currentQuestion.question}</h1>
            <ul className="answer-options">
              {currentQuestion.options.map((option, index) => {
                const isSelected = userAnswers[currentQuestionIndex] === index;
                const isCorrect = index === currentQuestion.correct;
                let className = 'answer-option';
                
                if (isSelected) {
                  className += isCorrect ? ' correct' : ' incorrect';
                }
                
                return (
                  <li key={index}>
                    <button
                      className={className}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      {option}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>  

          <div className="quiz-footer">
            <p className="question-status">
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </p>
            <button className="next-question-btn" onClick={handleNextQuestion}>
              {currentQuestionIndex === currentQuestions.length - 1 ? 'Finish' : 'Next'}
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
        </div>
      )}

      {currentState === 'results' && (
        <div className="result-container">
          <div className="celebration-content">
            <h2 className="result-title">🎉 Quiz Completed! 🎉</h2>
            <div className="score-display">
              <h3>Your Score: {score}/{currentQuestions.length}</h3>
              <p className="score-percentage">
                {Math.round((score / currentQuestions.length) * 100)}%
              </p>
            </div>
            <div className="celebration-message">
              {score === currentQuestions.length && (
                <p>🎊 Perfect Score! You're a master! 🎊</p>
              )}
              {score >= currentQuestions.length * 0.8 && score < currentQuestions.length && (
                <p>🌟 Excellent! Great job! 🌟</p>
              )}
              {score >= currentQuestions.length * 0.6 && score < currentQuestions.length * 0.8 && (
                <p>👍 Good work! Keep learning! 👍</p>
              )}
              {score < currentQuestions.length * 0.6 && (
                <p>📚 Keep practicing! You'll get better! 📚</p>
              )}
            </div>
            <button className="try-again-btn" onClick={handleTryAgain}>
              Try Again
            </button>
          </div>
        </div>
      )}
</div>
    </>
  )
}

export default Quiz
