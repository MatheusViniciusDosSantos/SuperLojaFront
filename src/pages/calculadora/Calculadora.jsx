import React from "react";
import './Calculadora.css';


class Calculadora extends React.Component {

    constructor(props) {
        super(props);
        this.state = {valor1:'',valor2:'',resultado:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.limpar = this.limpar.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();        
        let resultado = parseFloat(this.state.valor1) + parseFloat(this.state.valor2);
        this.setState({resultado:resultado});
    }
    limpar(event){
        this.setState({valor1:'',valor2:'',resultado:''});
    }
    render() {
        return (
            <div>
               <h1>Somar dois números</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Valor 1<br/>
                        <input name="valor1" value={this.state.valor1} onChange={this.handleChange} type="text" /><br /><br />
                    </label>
                    <label>
                        Valor 2<br />
                        <input name="valor2" value={this.state.valor2} onChange={this.handleChange} type="text" /><br />
                    </label>
                    <br />
                    <input type="submit" value="Calcular"/>
                    <input type="button" value="Limpar" onClick={this.limpar} />
               </form>
               <p>
                {this.state.resultado}
               </p>
            </div>
        );
    }
}
export default Calculadora;