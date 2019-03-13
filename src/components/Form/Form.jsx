import React, {useRef} from 'react';

const Form = ({addTodo}) => {
    const input = useRef(null);

    const handleSumbit = (event) => {
        if (input.current.value) {
            addTodo(input.current.value);

            input.current.value = '';
        }
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSumbit}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Todo" ref={input} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
                </div>
            </div>
        </form>
    );
};

export default Form;