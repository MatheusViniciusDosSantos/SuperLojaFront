import React, {useState} from "react";
import './Calculadora.css';


export default function CalculadoraFunction() {
 
       const [valores, setValores] = useState({valor1:'',valor2:'',resultado:''});
 
    
    function handleChange(event){
        setValores({...valores,[event.target.name]:event.target.value});
    }

    function handleSubmit(event){
        event.preventDefault();        
        let resultado = parseFloat(valores.valor1) + parseFloat(valores.valor2);
        setValores({...valores,resultado:resultado});
    }
    function limpar(event){
        setValores({valor1:'',valor2:'',resultado:''});
    }
    
        return (
            <div>
               <h1>Somar dois números - Calculadora com Function e Hook</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Valor 1<br/>
                        <input name="valor1" value={valores.valor1} onChange={handleChange} type="text" /><br /><br />
                    </label>
                    <label>
                        Valor 2<br />
                        <input name="valor2" value={valores.valor2} onChange={handleChange} type="text" /><br />
                    </label>
                    <br />
                    <input type="submit" value="Calcular"/>
                    <input type="button" value="Limpar" onClick={limpar} />
               </form>
               <p>
                    {valores.resultado}
               </p>
            </div>
        );
    
}