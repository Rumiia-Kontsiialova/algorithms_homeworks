function calculateSum() {
            // Получаем значения из полей ввода
            let num1 = parseInt(document.getElementById("num1").value) || 0;
            let num2 = parseInt(document.getElementById("num2").value) || 0;
            let num3 = parseInt(document.getElementById("num3").value) || 0;
            
            // Вычисляем сумму
            let sum = num1 + num2 + num3;
            
            // Выводим результат
            document.getElementById("result").innerHTML = 
                "Сумма трех чисел равна: " + sum;
        }