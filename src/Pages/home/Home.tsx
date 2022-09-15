import { useState, useEffect } from "react"
import { CEP } from "../../types/CEP"
import { api } from "../../../api"
import { useForm } from "react-hook-form"

import './styles.css'

export const Home = () => {

    const [list, setList] = useState<CEP>({cep: '', logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
      ibge: '',
      gia: '',
      ddd: '',
      siafi: ''});
      const [cepNumber, setCepNumber] = useState<string>("");

      const {register, handleSubmit} = useForm();
    
      console.log(cepNumber)
    useEffect(()=>{
      if(cepNumber){
        loadCEP()
      }
    },[cepNumber]);

    const onSubmit = (e: any) => {
      let cep = Object.values(e).toString().replace(/\D/g, '');
      setCepNumber(cep)
    }

    const loadCEP = async () => {
        const cep = await api.getCEP(cepNumber);
        setList(cep)
       
    }
    
  return (
    <section>

        <div className="container h-container">

          <div className="left-side">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>
                  <span>Digite o CEP: </span>
                    <input type="string" {...register("cep")} id="" placeholder="ex.: 72911298"/>
                </label>
                  <button value="enviar">Enviar</button>
              </div>
            </form>
          </div>

         <div className="right-side">
           
                  <p>Bairro: <span>{list.bairro}</span></p>
                  <p>Localidade: <span>{list.localidade}</span></p>
                  <p>Logradouro: <span>{list.logradouro}</span></p>
                  <p>DDD: <span>{list.ddd}</span>
                  </p>

         </div>
        </div>

    </section>
  )
}
