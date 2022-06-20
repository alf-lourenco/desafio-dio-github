function calculadora (){
        const operacao =  prompt ("Escolha uma opção \n 1 - soma (+)\n 2 - subtração (-)\n3 - multiplicação (*)\n4 - divisão real(/)\n5 - resto da divisão (%)\n6- Potenciação (**)");

        if (operacao >=1 && operacao <=6 ) {

        let n1 = Number(prompt("Insira o primeiro valor: \n"));
        let n2 =Number ( prompt("Insira o segundo valor: \n"));
        let resultado;
        b1=n1/1;
            
            alert(typeof(b1));
            
    }  
     
    }
    calculadora();
          /*
        if (operacao ==1){
            resultado = n1 + n2;
        alert ('A soma de '+n1+ ' e ' + n2+ ' é : ' + resultado);
        };

        if (operacao ==2){
            resultado = n1 - n2;
        alert ('A subtração de '+n1+ ' e ' + n2+ ' é : ' + resultado);
        };
        
        if (operacao ==3){
            resultado = n1 * n2;
        alert ('A multiplicação de '+n1+ ' e ' + n2+ ' é : ' + resultado);
        };
        
        if (operacao ==4){
            resultado = n1 / n2;
        alert ('A divisão de '+n1+ ' e ' + n2+ ' é : ' + parseInt( resultado));
        };
        
        if (operacao ==5){
            resultado = n1 % n2;
        alert ('A resto da divisão de '+n1+ ' e ' + n2+ ' é : ' + resultado);
        };
        
        if (operacao ==6){
            resultado = n1 ** n2;
        alert ('A potenciação de '+n1+ ' e ' + n2+ ' é : ' + resultado);
        };
    }else {
            alert ("Por favor, Digite um número entre 1 e 6");
            calculadora();
        }
        
    
    }


  calculadora();
  */