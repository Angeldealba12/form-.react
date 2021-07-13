import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { handleSubmit, register } = useForm();

 const callback = (formValues) => {
   alert(JSON.stringify(formValues));
 }



  return (
    <div className="App">
      <div className="MyForm">
       <form onSubmit={handleSubmit(callback)}>
        <div className="divs">
          <label>
            Name: 
          </label>
          <input type="text" {...register('name')}/>
        </div>
        <div className="divs">
          <label>
            Last Name: 
          </label>
          <input type="text" {...register('Last Name')}/>
        </div>
        <div className="divs">
          <label>
            Age: 
          </label>
          <input type="number" {...register('Age')}/>
        </div>
        <div className="divs">
          <label>
            Email: 
          </label>
          <input type="email" {...register('email')}/>
        </div>
        <div className="divs">
          <label>
            Country: 
          </label>
          <input type="text" {...register('country')}/>
        </div>
        <div className="divs">
          <input type="submit" className="btn"/>
        </div>
       </form>
      </div>
    </div>
  );
}

export default App;
