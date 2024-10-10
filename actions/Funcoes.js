import { Alert } from 'react-native';

class Funcoes{ 
    static funcaoCalculo(number1, number2, acao) { 
        var sum; 
        switch (acao) { 
            case '+': 
                sum = parseFloat(number1) + parseFloat(number2);         
                break; 
            case '-': 
                sum = parseFloat(number1) - parseFloat(number2);         
                break; 
            case '*': 
                sum = parseFloat(number1) * parseFloat(number2);         
                break; 
            case '/': 
                sum = parseFloat(number1) / parseFloat(number2);         
                break;         
            default: 
                break; 
        }   
      if (isNaN(sum)) { 
        Alert.alert('Erro', 'Por favor, insira números válidos.'); 
    } else { 
        Alert(`A soma é: ${sum}`); 
      } 
   } 
} 
export default Funcoes;