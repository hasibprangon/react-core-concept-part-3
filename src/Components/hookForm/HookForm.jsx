import React from 'react';
import useInputStateHook from '../../Hooks/InputHook';

const HookForm = () => {
    // const [name, setName] = useInputStateHook('hasib')
    const emailState = useInputStateHook('prangon@gmail.com')
    const handleSubmit = e => {
        e.preventDefault();
        // console.log('form data:', name);
        console.log('form data:', emailState.value);
    }
    return (
        <div>
              <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={setName} type="text" name='name'/> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name='password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;