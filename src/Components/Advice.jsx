import Dice from "./Dice";

const Advice = () => {

    const URL = "https://api.adviceslip.com/advice"
    const llamada = async()=>{
        try{
            const response = await fetch(URL, {method: 'GET'});
            const result = await response.json()
            console.log(result)
        } catch(error) {
            console.error(error);
        }
    }   
    
    llamada()
    
    
    
    console.log("hoa")
    return (
        <div className="advice-box">
      <p className="advice-title">ADVICE #117</p>
      <p className="advice-text">
        "It is easy to sit up and take notice, what's difficult is getting up
        and taking action"
      </p>
      <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg" id="separator">
        <g fill="none">
          <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
          <g transform="translate(212)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>
      <Dice />
    </div>
  );
};

export default Advice;
