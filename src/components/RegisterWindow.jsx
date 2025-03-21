import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const RegisterWindow = ({ showRegister, setShowRegister, setUserAuthenticated }) => {
  const [phone, setPhone] = useState("+7 (");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  
  // Форматирование номера телефона
  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // проверка на дурака не нужна
    let formatted = "+7 (";

    if (input.length > 1) formatted += input.substring(1, 4);
    if (input.length >= 4) formatted += ") " + input.substring(4, 7);
    if (input.length >= 7) formatted += "-" + input.substring(7, 9);
    if (input.length >= 9) formatted += "-" + input.substring(9, 11);

    setPhone(formatted);
  };

  // Отправка кода
  const handleSendCode = () => {
    setIsCodeSent(true);
    setCode(""); // чистим
    setResendTimer(10); // таймер 10 сек
  };

  //каждую 1 секунду
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  // Ввод кода
  const handleCodeChange = (e) => {
    const input = e.target.value.replace(/\D/g, "").substring(0, 4); // Только 4 цифры
    setCode(input);
  };

  // Подтверждение кода
  const handleConfirmCode = () => {
    setShowRegister(false);
    setUserAuthenticated(true);
  };

  return (
    showRegister && (
      <div 
        className="fixed top-4 left-4 bg-white bg-opacity-90 p-4 shadow-lg rounded-lg z-[1000] w-80 relative"
        style={{ top: "16px", left: "16px", position: "fixed", zIndex: "1000" }} // Явно указываем положение
      >
        {/* Кнопка закрытия */}
        <button
          onClick={() => setShowRegister(false)}
          className="absolute -top-3 -right-3 bg-gray-300 hover:bg-gray-400 text-gray-700 hover:text-black 
                     w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all"
        >
          <FaTimes size={16} />
        </button>

        <h2 className="text-lg font-semibold mb-2 text-center">{isCodeSent ? "Введите код" : "Регистрация"}</h2>

        {!isCodeSent ? (
          // Ввод телефона
          <>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={18}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <button
              onClick={handleSendCode}
              disabled={phone.length < 18}
              className={`w-full p-2 text-white rounded-md transition-all 
                         ${phone.length < 18 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            >
              Войти
            </button>
          </>
        ) : (
          // Ввод кода
          <>
            <input
              type="text"
              value={code}
              onChange={handleCodeChange}
              maxLength={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center mb-2"
              placeholder="Введите код"
            />

            {/* Кнопка подтверждения кода */}
            <button
              onClick={handleConfirmCode}
              disabled={code.length < 4}
              className={`w-full p-2 text-white rounded-md transition-all mb-2
                         ${code.length < 4 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
            >
              Подтвердить
            </button>

            {/* Кнопка повторной отправки кода */}
            <button
              onClick={handleSendCode}
              disabled={resendTimer > 0}
              className={`w-full p-2 text-white rounded-md transition-all
                         ${resendTimer > 0 ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"}`}
            >
              {resendTimer > 0 ? `Отправить повторно (${resendTimer} сек)` : "Отправить повторно"}
            </button>
          </>
        )}
      </div>
    )
  );
};

export default RegisterWindow;
